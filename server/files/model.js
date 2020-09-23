const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define collection and schema for Post
const File = new Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
}, {
  collection: 'files',
});

module.exports = mongoose.model('File', File);
