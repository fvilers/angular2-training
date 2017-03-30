'use strict';

const createError = require('http-errors');

function findHeroes (req, res, next) {
  throw new createError.NotImplemented();
}

module.exports = findHeroes;
