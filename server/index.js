'use strict';

const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const www = path.join(__dirname, '../dist');
const app = express();

app.use(compression());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.static(www));
app.use('*', (req, res) => res.sendFile('index.html', { root: www }));

module.exports = app;
