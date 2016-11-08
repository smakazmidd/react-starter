var commonConfig = require('./common.config.js');
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var path = require('path');
var express = require('express');

var compilerConfig = require('./webpack.config.js');
compilerConfig.watch = true;

var compiler = webpack(compilerConfig);

var server = new WebpackDevServer(compiler, {
  // webpack-dev-server options

  contentBase: path.resolve(__dirname, "client/public/"),
  // Can also be an array, or: contentBase: "http://localhost/",

  setup: function (app) {
    commonConfig.setupApp(app);
  },

  // It's a required option.
  publicPath: "/build/",
  reload: true,
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true,
  }
});
server.listen(8080, "localhost", function () { console.log('Dev server listening on port 8080...') });
// server.close();
