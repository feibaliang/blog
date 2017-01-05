var config = require('../config'),
    utils = require('../utils'),
    themes;

themes = {
    loadThemes: function () {
        return utils.readThemes(config.getContentPath('themes')).then(function (result) {
            config.set('paths:availableThemes', result);
        });
    }
};

module.exports = themes;