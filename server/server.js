const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');

const PORT = 4000;
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./DB.js');

const CLIENT_BUILD_PATH = path.join(__dirname, '../client/dist');

async function init() {
  await mongoose.connect(config.DB, { useNewUrlParser: true }).then(() => {
    console.log('DB is connected!');
  }).catch((err) => {
    console.log(`DB has error: ${err}`);
  });
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(morgan('combined'));

  app.listen(PORT, () => {
    console.log('Server is running on Port:', PORT);
  });

  app.use('/', express.static(CLIENT_BUILD_PATH));
}

init();
