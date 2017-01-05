var express = require('express'),
    _ = require('lodash'),
    config = require('../../config'),
    utils = require('../../utils'),
    // channelConfig = require('./channel-config'),
    renderChannel = require('./render-channel'),
    channelRouter;

channelRouter = function () {
    function channelConfigMiddleware(channel) {
        return function doChannelConfig(req,res,next) {
            req.channelConfig = _.cloneDeep(channel);
            next();
        };
    }

    var channelsRouter = express.Router({mergeParams: true}),
        baseRoute = '/';
        //pageRoute = utils.url.urlJoin('/', config.get('routeKeywords').page, ':page/');
    var channel ={
            name: 'index',
            route: '/',
            frontPageTemplate: 'home'
    }
    // _.each(channelConfig.list(),function(channel) {
    //     var channelRouter = express.Router({mergeParams: true}),
    configChannel = channelConfigMiddleware(channel);
    //     channelRouter.get(baseRoute, configChannel, renderChannel);
    //     channelRouter.get(pageRoute,configChannel,renderChannel);
        //channelRouter.param('page',handlePageParam);
    channelsRouter.get(channel.route,configChannel, channelRouter);
    // })
    return channelsRouter;
}

module.exports.router = channelRouter;