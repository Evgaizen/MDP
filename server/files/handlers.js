const NodeClam = require('clamscan');
const path = require('path');
const fs = require('fs');
const File = require('./model');

const ClamScan = new NodeClam().init();

module.exports = {
  getAllFiles: async (req, res) => {
    await File.find((err, files) => {
      if (err) {
        res.json(err);
      } else {
        res.json(files);
      }
    });
  },
  addFile: async (req, res) => {
    if (!req.files.file) {
      res.status(400).send('File dont upload');
    } else {
      const fileData = await req.files.file;
      const filePath = await path.join(__dirname, `../files/uploads/${fileData.name}`);

      await fileData.mv(filePath, (err) => {
        if (err) {
          return res.status(500).send(`Error with save file: ${err}`);
        }
      });

      const scanResult = await ClamScan.then(async (clamscan) => {
        const { is_infected, file, viruses } = await clamscan.is_infected(filePath);
        return {
          isInfected: is_infected,
          viruses,
        };
      });

      const file = await new File({
        title: fileData.name,
        date: new Date().toLocaleString(),
        size: `${(fileData.size / (1024 * 1024)).toFixed(3)}mb`,
        checksum: fileData.md5,
        ...scanResult,
      });

      await fs.unlinkSync(filePath);

      await file.save().then(() => {
        res.status(200).json(file);
      }).catch((err) => {
        res.status(400).send(err);
      });
    }
  },
  removeFile: async (req, res) => {
    await File.findOneAndDelete({ _id: req.body.id }).then(() => {
      res.status(200).send('File succesful delete');
    }).catch((err) => {
      res.status(400).send(err);
    });
  },
};
