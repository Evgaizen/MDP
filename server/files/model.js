const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let File = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  }
},{
    collection: 'files'
});

module.exports = mongoose.model('File', File);