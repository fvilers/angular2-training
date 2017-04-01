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
}, Object.assign(options, { collection: 'heroes' }));

schema.plugin(require('mongoose-slug-hero'), { doc: 'filter', field: 'name' });

module.exports = schema;
