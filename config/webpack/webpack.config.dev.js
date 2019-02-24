const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.config.base');
const helpers = require('../helpers');

const DIST_DIR = helpers.resolveFromRootPath('dist');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: DIST_DIR,
    filename: '[name].js',
  },
  devServer: {
    contentBase: DIST_DIR,
    inline: true,
    host: '0.0.0.0',
    port: 3000,
    stats: 'minimal',
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
});
