const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require("morgan");

const app = express();

//setup bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(logger("dev"));

// load sites
// require('./services/site-load')(path.join(__dirname, 'files'));

// api routes
require('./routes/routes')(app, path.join(__dirname, 'files'));

const PORT = 5000;
app.listen(PORT)
console.log(`App running on port ${PORT}`);