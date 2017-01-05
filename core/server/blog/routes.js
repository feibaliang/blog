var express = require('express'),
    path = require('path'),
    config = require('../config'),
    channels = require('../controllers/frontend/channels'),
    frontendRoutes;

frontendRoutes = function () {
    var router = express.Router();

    router.use(channels.router());

    return router;
}

module.exports = frontendRoutes;