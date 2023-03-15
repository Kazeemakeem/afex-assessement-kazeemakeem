const path = require('path');
const webpack = require('webpack');

module.exports = {
  resolve: {
    alias: {
      'crypto': require.resolve('crypto-browserify'),
    },
    fallback: {
      os: require.resolve("os-browserify/browser"),
      buffer: require.resolve("buffer/"),
      path: require.resolve('path-browserify'),
      stream: require.resolve('stream-browserify'),
      fs: require.resolve('browserify-fs'),
      util: require.resolve("util/"),
      buffer: require.resolve('buffer/')
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
};
