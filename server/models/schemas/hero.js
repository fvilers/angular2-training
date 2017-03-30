'use strict';

const mongoose = require('mongoose');
const options = require('./default-options');
const schema = new mongoose.Schema({
  name: {
    index: true,
    required: true,
    type: String,
    unique: true
  },
  title: {
    type: String
  },
  value: {
    required: true,
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
}, options);

schema.plugin(require('mongoose-slug-hero'), { doc: 'filter', field: 'name' });

module.exports = schema;
