// Module dependencies
var debug = require('debug')('blog:boot:init'),
    uuid = require('node-uuid'),
    Promise = require('bluebird'),
    KnexMigrator = require('knex-migrator'),
    config = require('./config'),
    logging = require('bunyan'),
    api = require('./api'),
    GhostServer = require('./ghost-server'),
    // knexMigrator = new KnexMigrator({
    //     knexMigratorFilePath: config.get('paths:appRoot')
    // }),
    dbHash;
function init(options) {
    debug('Init Start....');
    options = options || {};

    var ghostServer,parentApp;

    return api.themes.loadThemes().then(function () {
        debug('Themes load done');

    }).then(function () {
        parentApp = require('./app')();
        debug('Express Apps done');
    }).then(function(){
        debug('Auth done');
        return new GhostServer(parentApp);
    }).then(function (_ghostServer) {
        ghostServer = _ghostServer;

        debug("server done");
    }).then(function () {
        debug('Scheduling done');
        return ghostServer;
    })
}

module.exports = init;