module.exports = function tjsify(source) {
  this.cacheable && this.cacheable();

  var compiled = "var t = require('tmple');\n";
  compiled += "module.exports = new t(";
  compiled += JSON.stringify(source.toString('utf-8'));
  compiled += ");";
  return compiled;
};
