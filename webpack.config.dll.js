/**
 * Created by Yeapoo on 2017/03/20.
 */

var baseConfig = require('./webpack.config'),
  webpack = require('webpack'),
  path = require('path');

var dllConfig = baseConfig;

dllConfig.plugins.push(
  new webpack.DllPlugin({
    path: path.join(__dirname, '../static/dist', '[name]-manifest.json'),
    name: '[name]_library'
  })
);

module.exports = dllConfig;
