/*eslint-env node*/

var express = require('express');
var path = require('path');

var api = require('./server/api');

module.exports = {
  setupApp: function(app) {
    //serve static assets
    app.use('/externals', express.static(path.resolve('node_modules')));

    var server = require('http').Server(app);
    var io = require('socket.io')(server);

    io.on('connection', (socket) => {
      socket.emit('welcome', {hello: 'world'});
      console.log('client connected');
    });

    app.use((req, res, next) => {
      req.io = io;
      next();
    });

    //serve api
    app.use('/api', api);

    server.listen(8080, function(){
      console.log('server listening on port 8080...');
    });
  }
};
