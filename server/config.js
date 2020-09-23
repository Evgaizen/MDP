const path = require('path');

module.exports = {
  port: 4000,
  clientBuildPath: path.join(__dirname, '../client/dist'),
  DB: 'mongodb://mongo:27017/pomodapam',
  fileUpload: {
    limits: { fileSize: 200 * 1024 * 1024 },
  },
};
