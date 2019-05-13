const path = require('path');
const express = require('express');
const logger = require("morgan");

const app = express();
app.use(logger("dev"));

// load sites
require('./services/site-load')(__dirname);

// api routes
require('./routes/routes')(app, path.join(__dirname, 'files'));

const PORT = 3000;
app.listen(PORT)
console.log(`App running on port ${PORT}`);