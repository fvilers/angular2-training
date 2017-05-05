"use strict";

const configuration = {
  cors : {
    origin: new RegExp(process.env.CORS_ORIGIN || "http://localhost:4200")
  },
  json: {
    limit: process.env.JSON_LIMIT || "2mb"
  },
  jwt: {
    options: {
      expiresIn: 60 * 60 * 24
    },
    secret: process.env.JWT_SECRET || "This is a secret !"
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
