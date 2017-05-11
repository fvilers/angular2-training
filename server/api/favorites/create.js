'use strict';

const createError = require('http-errors');

function createFavorite (req, res, next) {
  next(new createError.NotImplemented());
}

module.exports = createFavorite;
