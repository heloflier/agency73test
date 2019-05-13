const path = require('path');
const express = require('express');
const logger = require("morgan");
const bodyParser 	= require("body-parser");

const app = express();
app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// load sites
require('./services/site-load')(__dirname);

require('./routes/routes')(app, path.join(__dirname, 'files'));

const PORT = 3000;
app.listen(PORT)
console.log(`"App running on port ${PORT}`);