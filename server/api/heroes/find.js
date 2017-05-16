'use strict';

const Account = require('../../models/account');
const Hero = require('../../models/hero');
const createError = require('http-errors');

function findHeroes (req, res, next) {
  getAccount()
    .then(findHeroes)
    .then(setFavorites)
    .then(sendResponse)
    .catch(next)
  ;

  function getAccount () {
    if (!req.user) {
      return Promise.resolve(null);
    }

    return Account.findOne({ _id: req.user.id });
  }

  function findHeroes (account) {
    const regexp = new RegExp(req.query.terms, 'i');
    const query = {
      name: { $regex: regexp }
    }

    if (req.query.universe || req.query.universe === 0) {
      query.universe = req.query.universe;
    }

    if (req.query.role || req.query.role === 0) {
      query.roles = { $in: [ req.query.role ] };
    }
    return Promise.all([
      account,
      Hero.find(query)
    ]);
  }

  function setFavorites (values) {
    const [account, heroes] = values;

    if (!account) {
      return heroes;
    }

    const favorites = account.favorites.map(favorite => favorite.toString());

    return heroes.map(hero => {
      const result = hero.toObject();
      result.favorite = favorites.includes(hero.id);
      return result;
    });
  }

  function sendResponse (heroes) {
    res.status(200).json(heroes);
  }
}

module.exports = findHeroes;
