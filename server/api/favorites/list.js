'use strict';

const Account = require('../../models/account');
const createError = require('http-errors');

function listFavorites (req, res, next) {
  const query = { _id: req.user.id };

  Account.findOne(query)
    .then(ensureAccount)
    .then(sendResponse)
    .catch(next)
  ;

  function ensureAccount (account) {
    if (!account) {
      throw new createError.Forbidden();
    }

    return account;
  }

  function sendResponse (account) {
    res.status(200).json(account.favorites);
  }
}

module.exports = listFavorites;
