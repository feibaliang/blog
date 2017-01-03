exports = module.exports;

models=[
    'post'
];

function init() {
    exports.Base = require('./base');

    model.forEach(function (name) {
        _.extend(exports, require('./') + name);
    });
}

exports.init  =  init;