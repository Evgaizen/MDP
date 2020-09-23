const mongoose = require('mongoose');

const config = require('../config');

module.exports = async () => {
  const connection = await mongoose.connect(config.DB, { useNewUrlParser: true });
  return connection.connection.db;
};
