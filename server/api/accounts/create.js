'use strict';

const Account = require('../../models/account');
const bcrypt = require('bcrypt-as-promised');
const createError = require('http-errors');

function createAccount (req, res, next) {
  if (!req.body.email || !req.body.password) {
    throw new createError.BadRequest();
  }

  Account.findOne({ email: req.body.email })
    .then(ensureNoConflict)
    .then(hashPassword)
    .then(addAccount)
    .then(sendResponse)
    .catch(onError)
  ;

  function ensureNoConflict (account) {
    if (account) {
      throw new createError.Conflict();
    }
  }

  function hashPassword () {
    return bcrypt.hash(req.body.password, 10);
  }

  function addAccount (passwordHash) {
    const account = new Account({
      email: req.body.email,
      passwordHash: passwordHash
    });

    return account.save();
  }

  function sendResponse (account) {
    res.status(201).json(account.toObject());
  }

  function onError (err) {
    if (err && err.name === 'ValidationError') {
      return next(new createError.BadRequest(err));
    }

    next(err);
  }
}

module.exports = createAccount;
