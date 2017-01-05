var debug = require('debug')('blog:app'),
    express = require('express'),

    config = require('./config'),
    netjet = require('netjet'),
    logRequest = require('./middleware/log-request');
module.exports = function setupParentApp() {
    debug('ParentApp setup start');

    var parentApp = express();
    parentApp.use(logRequest);
    parentApp.use(require('./blog')());

    debug('ParentApp setup end');
    return parentApp;
};