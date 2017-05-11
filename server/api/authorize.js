'use strict';

const jwt = require('express-jwt');

function authorize () {
  return function (req, res, next) {
    const options = {
      secret: req.app.locals.configuration.jwt.secret
    };

    return jwt(options)(req, res, next);
  }
}

module.exports = authorize;
