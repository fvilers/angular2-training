'use strict';

const Hero = require('../../models/hero');
const createError = require('http-errors');

function getHero (req, res, next) {
  const query = { name: req.params.name };

  Hero.findOne(query)
    .then(hero => {
      if (!hero) {
        return next(new createError.NotFound());
      }

      res.status(200).json(hero.toObject());
    })
    .catch(next);
}

module.exports = getHero;
