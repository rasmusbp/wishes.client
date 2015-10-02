var _ = require('lodash');

module.exports = {
  context: __dirname + '/app',
  entry: './layers/main',
  output: {
      publicPath: './',
      path: '.tmp/layers',
      filename: 'main.js'
  },
  resolve: {
    extensions: ['', '.ts']
  },
  module: {
    loaders: [
      // note that babel-loader is configured to run after ts-loader
      { test: /\.ts$/, loader: 'awesome-typescript-loader' }
    ]
  }
}
