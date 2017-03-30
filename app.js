'use strict';

var express = require('express');
var app = express();

app.use('*', (req, res) => res.sendStatus(404));

module.exports = app;
