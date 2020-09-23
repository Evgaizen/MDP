const express = require('express');

const config = require('./config');

async function startServer() {
  const app = express();

  await require('./loaders/index')({ expressApp: app });

  app.listen(config.port, (err) => {
    if (err) {
      console.error(`Error: ${err}`);
      process.exit(1);
    }
    console.log(`Server running on ${config.port}`);
  });
}

startServer();
