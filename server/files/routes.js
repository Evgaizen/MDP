const express = require('express');
const handlers = require('./handlers');

const FileRoutes = express.Router();

const heandlers = require('./handlers');

FileRoutes.route('/files').get(heandlers.getAllFiles);

FileRoutes.route('/files/upload').post(heandlers.addFile);

FileRoutes.route('/files/delete').delete(handlers.removeFile);

module.exports = FileRoutes;
