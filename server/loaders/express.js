const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');

const config = require('../config');

// Routers
const fileRouter = require('../files/routes');

module.exports = ({ app }) => {
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(morgan('combined'));
  app.use(fileUpload(config.fileUpload));

  app.use('/api', fileRouter);

  app.use('/', express.static(config.clientBuildPath));
};
