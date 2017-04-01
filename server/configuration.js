"use strict";

const configuration = {
  cors : {
    origin: new RegExp(process.env.CORS_ORIGIN || "http://localhost:4200")
  },
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
