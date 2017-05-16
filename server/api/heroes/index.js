'use strict';

const express = require('express');
const authorize = require('../authorize');
const router = express.Router();

router.get('/', authorize({ credentialsRequired: false }), require('./find'));
router.get('/:name', require('./get'));

module.exports = Object.freeze(router);
