'use strict';

var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var args = require('yargs').argv;
var path = require('path');

//

const DEVELOPMENT = 'development';
const PRODUCTION  = 'production';
const NODE_ENV    = process.env.NODE_ENV || DEVELOPMENT;

const is = {
  production: NODE_ENV === PRODUCTION,
  development: NODE_ENV === DEVELOPMENT,
  minify: args.minify
};

const resolve = path.resolve.bind(null, __dirname);

// loaders

let loaders = [
  {
    test: /\.js$/,
    loader: 'babel',
    exclude: /node_modules/
  },
  {
    test: /\.html/,
    loader: 'raw'
  },
  {
    test: /\.less$/,
    loader: ExtractTextPlugin.extract('style', 'css!less')
  }
];

// plugins

let plugins = [
  new webpack.NoErrorsPlugin(),
  new webpack.optimize.DedupePlugin(),
  new HtmlWebpackPlugin({
    template: resolve('./src/index.html'),
    minify: is.minify,
    inject: 'body'
  }),
  new ExtractTextPlugin('[name].css', {
    allChunks: true
  })
];

if (is.minify) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}

// server

let devServer = {
  port: 9000,
  contentBase: resolve('dist'),
  stats: {
    modules: false,
    cached: false,
    colors: true,
    chunk: false
  }
};

// export

module.exports = {
  context: resolve('src'),
  entry: {
    app: './scripts/app.js'
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    pathinfo: is.development
  },
  resolve: {
    modulesDirectories: [
      resolve('src'),
      resolve('node_modules')
    ],
    alias: {}
  },
  resolveLoader: {
    modulesDirectories: [
      resolve('node_modules')
    ]
  },
  progress: true,
  debug: is.development,
  devtool: is.development ? 'eval-source-map' : 'source-map',
  module: {
    loaders
  },
  plugins,
  devServer
};
