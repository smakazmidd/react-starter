var webpack = require('webpack');
var path = require('path');

var PATHS = {
  script: path.resolve(__dirname, 'client/src/script/components'),
  build: path.resolve(__dirname, 'client/public/build')
}

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(PATHS.script, 'App.jsx'),
  output: {
    path: PATHS.build,
    filename: 'client.bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.css']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel?presets[]=es2015&presets[]=react&plugins[]=react-html-attrs&plugins[]=transform-decorators-legacy&plugins[]=transform-class-properties','eslint'],
      exclude: /(node_modules|bower_components)/,
    }, {
      test: /\.scss$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
    }, {
      test: /\.css$/, loaders: ['style', 'css?sourceMap']
    }, {
      test: /\.(jpe?g|gif|png)$/, loader: 'url-loader?limit=100000'
    }, {
      test: /\.woff$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.ttf$/, loader: "file-loader"
    }, {
      test: /\.eot$/, loader: "file-loader"
    }, {
      test: /\.svg$/, loader: "file-loader"
    }, {
      test: /\.woff2$/, loader: "file-loader"
    }]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  eslint: {
    configFile: './.eslintrc.json',
    failOnError: true
  }
}
