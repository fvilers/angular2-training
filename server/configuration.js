"use strict";

const configuration = {
  json: {
    limit: process.env.JSON_LIMIT || "2mb"
  },
  mongo: {
    uri: process.env.MONGO_URI || "mongodb://localhost/angular-training",
    options: {
      server: {
        auto_reconnect: true
      }
    }
  },
  urlencoded: {
    extended: false
  }
};

module.exports = Object.freeze(configuration);
