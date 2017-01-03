// Module dependencies
var debug = require('debug')('blog:boot:init'),
    uuid = require('node-uuid'),
    Promise = require('bluebird'),
    KnexMigrator = require('knex-migrator'),
    config = require('./config'),
    logging = require('bunyan'),
    api = require('./api'),
    //GhostServer = require('./ghost-server'),
    knexMigrator = new KnexMigrator({
        knexMigratorFilePath: config.get('paths:appRoot')
    }),
    dbHash;
function init(options) {
    debug('Init Start....');
    options = options || {};

    var ghostServer,parentApp;

    return api.themes.loadThemes().then(function () {
        debug('Themes load done');

    })
}