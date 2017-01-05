var debug = require('debug')('blog:channels:render'),
    _ = require('lodash'),
    safeString = require('../../utils/index').safeString,
    fetchData = require('./fetch-data');


function renderChannel(req,res,next) {
    debug('renderChannel called');

    var channelOpts = req.channelConfig,
        pageParam = req.params.page !== undefined ? req.params.page : 1,
        slugParam = req.params.param.slug? safeString(req.params.slug) : undefined;

    channelOpts.postOptions = channelOpts.postOptions || {};

    channelOpts.postOptions.page = pageParam;
    channelOpts.slugParam = slugParam;

    return fetchData(channelOpts).then(function handleResult(result) {
        if(pageParam > result.meta.pagination.pages){

        }

        res.render(view,result);
    })
}

module.exports = renderChannel;