const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const WebappWebpackPlugin = require('webapp-webpack-plugin');
const { resolveFromRootPath } = require('../helpers');

module.exports = merge(common, {
  context: resolveFromRootPath('src'),
  entry: {
    app: './index.tsx',
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      hash: true,
      chunks: ['manifest', 'vendor', 'app'],
      chunksSortMode: 'manual',
    }),
    new ForkTsCheckerWebpackPlugin({
      tsconfig: resolveFromRootPath('tsconfig.json'),
      tslint: resolveFromRootPath('tslint.json'),
      watch: resolveFromRootPath('src'),
      async: false,
      workers: ForkTsCheckerWebpackPlugin.TWO_CPUS,
    }),
  ],
  optimization: {
    minimize: false,
    runtimeChunk: {
      name: 'vendor',
    },
    splitChunks: {
      cacheGroups: {
        default: false,
        common: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          minSize: 1,
        },
      },
    },
  },
});
