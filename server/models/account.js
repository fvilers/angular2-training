'use strict';

const mongoose = require('mongoose');
const model = mongoose.model('Account', require('./schemas/account'));

module.exports = model;
