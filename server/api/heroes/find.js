'use strict';

const Hero = require('../../models/hero');
const createError = require('http-errors');

function findHeroes (req, res, next) {
  const regexp = new RegExp(req.query.terms, 'i');
  const query = {
    name: { $regex: regexp }
  }
  Hero.find(query)
    .then(sendResponse)
    .catch(next)
  ;

  function sendResponse (heroes) {
    const list = heroes.map(hero => hero.toObject());

    res.status(200).json(list);
  }
}

module.exports = findHeroes;
