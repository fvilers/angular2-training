'use strict';

const mongoose = require('mongoose');
const options = require('./default-options');

options.toObject.transform = (doc, ret) => {
  delete ret._id;
  delete ret.passwordHash;
  delete ret.tokens;
};

const schema = new mongoose.Schema({
  email: {
    index: true,
    required: true,
    type: String,
    validate: {
      validator: require('./validators/email')
    }
  },
  emailConfirmed: {
    type: Boolean,
    default: false,
    required: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  favorites: [mongoose.Schema.Types.ObjectId]
}, options);

module.exports = schema;
