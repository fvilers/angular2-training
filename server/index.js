'use strict';

const express = require('express');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const configuration = require('./configuration');
const www = path.join(__dirname, '..', 'dist');
const app = express();

// Middlewares
app.use(cors(configuration.cors));
app.use(compression());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.static(www));
app.use(require('prerender-node').set('prerenderToken', 'yxJvQmuLCib1mR9uH3R1'));
app.use('/api', require('./api'));
app.use('*', (req, res) => res.sendFile('index.html', { root: www }));
app.use((err, req, res, next) => res.status(err.status || 500).send(err));

// MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(configuration.mongo.uri, configuration.mongo.options);
process.on('SIGTERM', () => mongoose.connection.close(() => process.exit(0)));

module.exports = app;
