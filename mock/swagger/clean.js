const rm = require('rimraf');
const {routesPath} = require('../../config');

module.exports = function() {
  rm.sync(routesPath);
  return Promise.resolve();
}