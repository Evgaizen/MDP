const File = require('./model');

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
      const file = await new File({
        title: fileData.name,
        date: new Date().toLocaleString(),
        size: `${(fileData.size / (1024 * 1024)).toFixed(3)}mb`,
        state: 'ok',
        checksum: fileData.md5,
      });
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
