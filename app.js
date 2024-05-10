'use strict'

const express = require('express');
const app = express();

var routes = require('./routes/api');

app.use('', routes);

module.exports = app;