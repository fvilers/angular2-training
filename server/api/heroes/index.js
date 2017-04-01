'use strict';

const express = require('express');
const router = express.Router();

router.get('/', require('./find'));
router.get('/:name', require('./get'));

module.exports = Object.freeze(router);
