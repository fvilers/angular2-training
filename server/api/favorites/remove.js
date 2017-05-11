'use strict';

const Account = require('../../models/account');
const createError = require('http-errors');

function removeFavorite (req, res, next) {
  const query = { _id: req.user.id };

  Account.findOne(query)
    .then(ensureAccount)
    .then(deleteFavorite)
    .then(sendResponse)
    .catch(next)
  ;

  function ensureAccount (account) {
    if (!account) {
      throw new createError.Forbidden();
    }

    return account;
  }

  function deleteFavorite (account) {
    const index = account.favorites.indexOf(req.query.hero_id);
    if (index === -1) {
      throw new createError.NotFound();
    }

    account.favorites.splice(index, 1);

    return account.save();
  }

  function sendResponse () {
    res.status(204).json();
  }
}

module.exports = removeFavorite;
