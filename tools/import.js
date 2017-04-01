const mongoose = require('mongoose');
const configuration = require('../server/configuration');
const Hero = require('../server/models/hero');
const source = require('../client/assets/heroes.json');

mongoose.Promise = global.Promise;
mongoose.connect(configuration.mongo.uri, configuration.mongo.options);
process.on('SIGTERM', () => mongoose.connection.close(() => process.exit(0)));

Hero
  .insertMany(source)
  .then(docs => {
    console.log(`Successfully imported ${docs.length} heroes.`);
    mongoose.disconnect();
  })
  .catch(error => {
    console.error('An error has occured', error);
    mongoose.disconnect();
  });
