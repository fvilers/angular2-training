'use strict';

const express = require('express');
const router = express.Router();

router.post('/', require('./create'));
router.delete('/', require('./remove'));

module.exports = Object.freeze(router);
