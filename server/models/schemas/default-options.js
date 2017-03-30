"use strict";

const options = {
  timestamps: true,
  toObject: {
    transform: removeDefaultIdProperty,
    versionKey: false,
    virtuals: true
  }
};

function removeDefaultIdProperty (doc, ret) {
  delete ret._id;
  delete ret.slugs;
}

module.exports = options;
