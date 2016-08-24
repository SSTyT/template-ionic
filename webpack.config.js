'use strict';

// Modules
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

var ENV = process.env.npm_lifecycle_event;
var isTest = ENV === 'test' || ENV === 'test-watch';
var isProd = ENV === 'build' || 'android' || ENV === 'ios';

module.exports = function makeWebpackConfig() {
  var config = {};

  config.entry = isTest ? {} : {
    app: './src/app/app.js'
  };

  config.output = isTest ? {} : {
    path: __dirname + '/www',
    publicPath: isProd ? '' : 'http://localhost:8080/',
    filename: isProd ? 'js/[name].[hash].js' : 'js/[name].bundle.js',
    chunkFilename: isProd ? 'js/[name].[hash].js' : 'js/[name].bundle.js'
  };

  if (isTest) {
    config.devtool = 'inline-source-map';
  } else if (isProd) {
    config.devtool = 'source-map';
  } else {
    config.devtool = 'eval-source-map';
  }

  config.module = {
    preLoaders: [],
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loader: isTest ? 'null' : ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader!resolve-url!sass-loader?sourceMap', { publicPath: '../' })
    }, {
      test: /\.css$/,
      loader: isTest ? 'null' : ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader', { publicPath: '../' })
    }, {
      test: /\.(svg|woff|woff2|ttf|eot)$/,
      loader: 'file?name=assets/[name].[hash].[ext]'
    }, {
      test: /\.html$/,
      loader: 'raw'
    }]
  };

  if (isTest) {
    config.module.preLoaders.push({
      test: /\.js$/,
      exclude: [
        /node_modules/,
        /\.spec\.js$/
      ],
      loader: 'isparta-loader'
    })
  }

  config.postcss = [
    autoprefixer({
      browsers: ['last 2 version']
    })
  ];

  config.plugins = [];

  if (!isTest) {
    config.plugins.push(
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: 'body'
      }),
      new ExtractTextPlugin('css/[name].[hash].css', { disable: !isProd })
    )
  }

  if (isProd) {
    config.plugins.push(
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.DedupePlugin(),
      new ngAnnotatePlugin({
        add: true
      }),
      new webpack.optimize.UglifyJsPlugin(),
      new CopyWebpackPlugin([{
        from: __dirname + '/src/assets',
        to: 'assets'
      }])
    )
  }

  config.devServer = {
    contentBase: 'src',
    stats: 'minimal'
  };

  return config;
}();
