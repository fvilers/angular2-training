'use strict';

const jwt = require('express-jwt');

function authorize (options) {
  options = options || {};

  return function (req, res, next) {
    options.secret = req.app.locals.configuration.jwt.secret;
    
    return jwt(options)(req, res, next);
  }
}

module.exports = authorize;
