var uuid = require('node-uuid'),
    logging = require('../logging');

module.exports = function logRequest(req, res, next) {
    var startTime = Date.now();
    requestId = uuid.v1();

    function logResponse() {
        res.responseTime = (Date.now() - startTime) + 'ms';
        req.requestId = requestId;

        if(req.err) {
            logging.error({req:req,res:res,err:req.err})
        }else {
            logging.info({req:req,res:res})
        }

        res.removeListener('finish', logResponse);
        res.removeListener('close', logResponse);
    }

    res.on('finish', logResponse);
    res.on('close', logResponse);
    next();
}