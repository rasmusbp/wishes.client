var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');

function getBowerEntry( path, exports ) {
  return  __dirname + '/bower_components/' + path ;
}

var config = {
  addVendor: function (name, path) {
    this.resolve.alias[name] = path;
  },
  entry: {
    app: './app/layers/main',
    vendors : './app/layers/vendors'
  },
  output: {
      publicPath: './',
      filename: 'main.js'
      // path: <- will be set at runtime by Gulp,
  },
  resolve: {
    extensions: ['', '.js', '.ts'],
    alias: {}

  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader' }
    ],
    noParse: [],
  },
  plugins: [
    // vendor splitting
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),

  ]
}

// add vendors
var vendors = [
  [ 'jquery', getBowerEntry('jquery/dist/jquery') ],
  [ 'isotope', getBowerEntry('isotope/dist/isotope.pkgd') ],
  [ 'alertify', getBowerEntry('alertify.js/lib/alertify') ],
  [ 'angular', getBowerEntry('angular/angular.js') ],
  [ 'loopbackResources', __dirname + '/app/layers/resources' ],
  [ 'ng-resources', getBowerEntry('angular-resource/angular-resource') ],
  [ 'ui-router', getBowerEntry('ui-router/release/angular-ui-router') ],
  [ 'ng-ui-switch', getBowerEntry('angular-ui-switch/angular-ui-switch') ],
  [ 'ng-match-media', getBowerEntry('angular-media-queries/match-media') ],
  [ 'ng-file-upload', getBowerEntry('angular-file-upload/dist/angular-file-upload.min') ],
  [ 'ng-isotope', getBowerEntry('angular-isotope/dist/angular-isotope') ],
  [ 'bootstrap-collapse', getBowerEntry('bootstrap-sass/assets/javascripts/bootstrap/collapse') ]
];
vendors.forEach(function( vendor ) {
    config.addVendor.apply(config, vendor);
});

module.exports = config;
