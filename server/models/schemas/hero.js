'use strict';

const mongoose = require('mongoose');
const options = require('./default-options');
const schema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    unique: true
  },
  title: {
    type: String
  },
  universe: {
    index: true,
    required: true,
    type: Number
  },
  roles: [{
    index: true,
    required: true,
    type: Number
  }],
  image: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
}, Object.assign(options, { collection: 'heroes' }));

module.exports = schema;
