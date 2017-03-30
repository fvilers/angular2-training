'use strict';

const Hero = require('../../models/hero');
const createError = require('http-errors');

function findHeroes (req, res, next) {
  const query = {}
  Hero.find()
    .then(sendResponse)
    .catch(next)
  ;

  function sendResponse (heroes) {
    const list = heroes.map(hero => hero.toObject());

    res.status(200).json(list);
  }
}

module.exports = findHeroes;
