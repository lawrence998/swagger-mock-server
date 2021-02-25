
const generateRouter = require('./generateRouter');

module.exports = function(app, conf) {
  // 路由
  generateRouter(app, conf);
};