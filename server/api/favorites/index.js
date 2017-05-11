'use strict';

const express = require('express');
const router = express.Router();

router.get('/', require('./list'));
router.post('/', require('./create'));
router.delete('/', require('./remove'));

module.exports = Object.freeze(router);
