Package.describe({
  name: 'chhib:mongo-sync',
  summary: 'mongo-sync packaged to work with Meteor and avoid Fiber conflict issue',
  version: '0.0.1'
});

Npm.depends({
  "mongodb": "1.4.7"
});

Package.onUse(function(api) {
  api.add_files([
    'lib.js'
  ], 'server');  

  api.export('MongoSync');
});