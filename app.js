'use strict';

const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const app = express();

app.use(compression());
app.use(helmet());
app.use('*', (req, res) => res.sendStatus(404));

module.exports = app;
