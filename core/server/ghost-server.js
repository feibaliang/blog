var debug = require('debug')('ghost:server'),
    Promise = require('bluebird'),
    chalk = require('chalk'),
    fs = require('fs'),
    path = require('path'),
    _ = require('lodash'),
    config = require('./config'),
    moment = require('moment');

function GhostServer(rootApp) {
    this.rootApp = rootApp;
    this.httpServer = null;
    this.connections = {};
    this.connectionId = 0;
    this.config = config;
}

GhostServer.prototype.start = function (externalApp) {
    debug('Starting.....');

    var self = this,
        rootApp = externalApp ? externalApp : self.rootApp;

    return new Promise(function (resolve,reject) {
        self.httpServer = rootApp.listen(config.get('server').port, config.get('server').host);
        self.httpServer.on('error',function(error){

        })
       // self.httpServer.on('connection',self.connections)
    })

}

module.exports = GhostServer;