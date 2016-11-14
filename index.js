var commonConfig = require('./common.config.js');
var path = require('path');
var express = require('express');

var app = express();

app.use('/', express.static(path.resolve('client/public')));
commonConfig.setupApp(app);

//app.listen(8080, "localhost", function () { console.log('Server listening on port 8080...') });
