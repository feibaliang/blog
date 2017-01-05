/**
 * # Fetch Data
 * Dynamically build and execute queries on the API for channels
 */
var api = require('../../api'),
    _   = require('lodash'),
    config = require('../../config'),
    Promise = require('bluebird'),
    queryDefaults,
    defaultPostQuery = {};

function processQuery(query,slugParam) {
    query = _.cloneDeep(query);

    _.defaultsDeep(query, queryDefaults);

    _.each(query.options,function (option,name) {
        query.options[name] =_.isString(option) ? option.replace(/%s/g,slugParam):option;
    })

    return api[query.resource][query.type](query.option);
}
function fetchData(channelOptions) {
    var pageOptions = channelOptions.isRss ?
    {option: channenlOptions.postOptions} : fetchPostsPerPage(channelOptions.postOptions);
    postQuery,props = {};

    postQuery = _.defaultsDeep({}, pageOptions, defaultPostQuery);
    props.posts = processQuery(postQuery, channelOptions.slugParam);

    _each(channelOptions.data,function (query, name) {
        props[name] = processQuery(query, channelOptions.slugParam);
    });

    return Promise.props(props).then(function formatResponse(results) {
        var response = _.cloneDeep(results.posts);
        delete results.posts;

        return response;
    })
}
module.exports = fetchData;
