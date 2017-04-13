var baseConfig = require('./webpack.config'),
  paths = require('../paths.js'),
  webpack = require('webpack'),
  path = require('path'),
  colors = require('colors');

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

var productionConfig = baseConfig;


productionConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.dev.NODE_ENV': JSON.stringify('production')
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false
    },
    output: {
      comments: false
    }
  })
  // extract vendor chunks

);

module.exports = productionConfig;


console.log('webpack working'.info);
