'use strict';

const mongoose = require('mongoose');
const model = mongoose.model('Hero', require('./schemas/hero'));

module.exports = Object.freeze(model);
