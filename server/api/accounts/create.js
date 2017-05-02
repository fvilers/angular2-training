'use strict';

const createError = require('http-errors');

function createAccount (req, res, next) {
  next(new createError.NotImplemented());
}

module.exports = createAccount;
