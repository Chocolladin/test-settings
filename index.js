var debug = require('debug');
var nconf = require('nconf');
var path = require('path');

nconf.env().argv();
var env = nconf.get('NODE_ENV') || 'production';
nconf.file(path.join(__dirname, env + '.json'));
var settings = nconf.get();
debug(settings);

console.log(settings);

module.exports = settings;