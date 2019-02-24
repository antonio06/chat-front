const urlLoaderOptions = (mimetype, limit = 1e4) => ({ limit, mimetype });

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    // TODO: Add code example folder as alias
    // alias: {},
  },
  module: {
    rules: [
      {
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: urlLoaderOptions('application/font-woff'),
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: urlLoaderOptions('application/octet-stream'),
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: urlLoaderOptions('image/svg+xml'),
      },
      {
        test: /\.(png|jpg|ico)?$/,
        loader: 'url-loader',
        options: urlLoaderOptions('image/png'),
      },
    ],
  },
};
