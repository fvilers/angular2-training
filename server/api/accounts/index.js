'use strict';

const express = require('express');
const router = express.Router();

router.post('/', require('./create'));
router.post("/token", require("./create-token"));

module.exports = Object.freeze(router);
