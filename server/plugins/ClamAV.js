const NodeClam = require('clamscan');

const ClamScan = new NodeClam().init();

// Get instance by resolving ClamScan promise object
module.exports = ClamScan;
