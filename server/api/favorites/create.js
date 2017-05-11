'use strict';

const Hero = require('../../models/hero');
const Account = require('../../models/account');
const createError = require('http-errors');

function createFavorite (req, res, next) {
  const query = { _id: req.query.hero_id };

  Hero.findOne(query)
    .then(ensureHero)
    .then(findAccount)
    .then(ensureAccount)
    .then(addFavorite)
    .then(sendResponse)
    .catch(next)
  ;

  function ensureHero (hero) {
    if (!hero) {
      throw new createError.NotFound();
    }
  }

  function findAccount () {
    const query = { _id: req.user.id };

    return Account.findOne(query);
  }

  function ensureAccount (account) {
    if (!account) {
      throw new createError.Forbidden();
    }

    return account;
  }

  function addFavorite (account) {
    if (account.favorites.indexOf(req.query.hero_id) > -1) {
      throw new createError.Conflict();
    }

    account.favorites.push(req.query.hero_id);

    return account.save();
  }

  function sendResponse () {
    res.status(201).json();
  }
}

module.exports = createFavorite;
