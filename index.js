// # Ghost Startup
// Orchestrates the startup of Ghost when run from command line.
var ghost = require('./core'),
    debug = require('debug')('blog:boot:index'),
    express = require('express'),
    logging = require('bunyan'),
    parentApp = express();

debug('Initialising Ghost');
ghost().then(function (ghostServer) {

    debug('Starting Ghost');
    // Let Ghost handle starting our server instance.
    return ghostServer.start(parentApp);
}).catch(function (error) {
    console.error(err.stack);
    logging.error(error);
    process.exit(-1);
});
