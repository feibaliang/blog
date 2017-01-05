var debug = require('debug')('blog:blog'),
    path = require('path'),

    config = require('../config'),
    utils = require('../utils'),

    routes = require('./routes');

module.exports = function setupBlogApp() {
    debug('Blog setup start');

    var blogApp = require('express')();

    blogApp.set('view engin','hbs');
    blogApp.use(routes());
    return blogApp;
};