const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define collection and schema for Post
const File = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  checksum: {
    type: String,
  },
  isInfected: {
    type: Boolean,
  },
  viruses: {
    type: Array,
  },
}, {
  collection: 'files',
});

module.exports = mongoose.model('File', File);
