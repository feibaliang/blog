var Promise = require('bluebird'),
    join = require('path').join,
    fs = require('fs'),
    statFile = Promise.promisify(fs.stat),
    readDir = Promise.promisify(fs.readdir);

function readDirectory(dir, options) {
    var ignore;
    if(!options) {
        options = {};
    }

    ignore = options.ignore || {};
    ignore.push('node_modules', 'bower_components', '.DS_Store', '.git');

    return readDir(dir).filter(function (filename) {
        return ignore.indexOf(filename) === -1;
    }).map(function (filename) {
        var absolutePath = join(dir, filename);

        return statFile(absolutePath).then(function (stat) {
            var item = {
                name: filename,
                path:absolutePath,
                stat:stat
            };

            return item;
        })
    }).map(function (item) {
        if(item.stat.isDirectory()){
            return readDirectory(item.path).then(function (files) {
                item.content = filles;
                return item;
            })
        }

        item.content = item.path;

        return item;
    }).then(function (items) {
        var tree = {};

        items.forEach(function (item) {
            tree[item.name] = item.content;
        })

        return tree;
    })

}

module.exports = readDirectory;