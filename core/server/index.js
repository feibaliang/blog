// Module dependencies
var debug = require('debug')('blog:boot:init'),
    uuid = require('node-uuid'),
    Promise = require('bluebird'),
    KnexMigrator = require('knex-migrator'),
    config = require('./config'),
    logging = require('bunyan'),
    api = require('./api'),
    models = require('./models'),
    GhostServer = require('./ghost-server'),
    knexMigrator = new KnexMigrator({
        knexMigratorFilePath: config.get('paths:appRoot')
    }),
    dbHash;