const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = (config, context) => {
  config.plugins.push(new JavaScriptObfuscator({rotateUnicodeArray: true}));

  return config;
};
