'use strict';

const express = require('express');
const router = express.Router();

router.use('/accounts', require('./accounts'));
router.use('/heroes', require('./heroes'));

module.exports = Object.freeze(router);
