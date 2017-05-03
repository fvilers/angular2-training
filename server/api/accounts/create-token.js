'use strict';

const Account = require('../../models/account');
const createError = require('http-errors');
const bcrypt = require('bcrypt-as-promised');
const jwt = require('jsonwebtoken-as-promised');

function createToken (req, res, next) {
  Account.findOne({ email: req.body.email })
    .then(ensureAccount)
    .then(compareHashes)
    .then(generateToken)
    .then(sendResponse)
    .catch(onError)
  ;

  function ensureAccount (account) {
    if (!account) {
      throw new createError.Forbidden();
    }

    return account;
  }

  function compareHashes (account) {
    return bcrypt.compare(req.body.password, account.passwordHash);
  }

  function generateToken (account) {
    const payload = {
      id: account.id,
      email: account.email,
      profile: account.profile,
    };

    return jwt.sign(payload, req.app.locals.configuration.jwt.secret, req.app.locals.configuration.jwt.options);
  }

  function sendResponse (token) {
    const jwt = {
      access_token: token,
      token_type: 'bearer'
    };

    res.status(201).json(jwt);
  }

  function onError (err) {
    if (err && err.name === 'MismatchError') {
      return next(new createError.Forbidden(err));
    }

    next(err);
  }
}

module.exports = createToken;
