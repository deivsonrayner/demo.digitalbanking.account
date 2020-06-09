'use strict';
//require('appmetrics-dash').attach();
//  require('appmetrics-prometheus').attach();
const mongoose = require('mongoose');

var server = require('./app');
var port = 3000;

var mongoURL = process.env.MONGO_URL != undefined?process.env.MONGO_URL:"mongodb://169.57.206.164:27017/local";

console.log(`Running on Port:${port}, connecting to ${mongoURL}`)
console.log(`Server: ${server}`)
mongoose.connect(mongoURL, function (ignore, connection) {
    connection.onOpen();
 //   server.listen(port, function () {
 //       console.log('Server running on port: %d', port);
 //   });
});

module.exports.app = server;
