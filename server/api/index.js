'use strict';

const express = require('express');
const authorize = require('./authorize');
const router = express.Router();

router.use('/accounts', require('./accounts'));
router.use('/favorites', authorize(), require('./favorites'));
router.use('/heroes', require('./heroes'));

module.exports = Object.freeze(router);
