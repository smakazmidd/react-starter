var express = require('express');
var path = require('path');

module.exports = {
  setupApp: function(app) {
    app.use('/externals', express.static(path.resolve('node_modules')));
  }
}
