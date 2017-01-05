function urlJoin(){
    var args =Array.prototype.slice.call(arguments),
        prefixDoubleSlash = false,
        subdir = getSubdir().replace(/^\/|\/+$/, ''),
        subdirRegex,
        url;

    if(args[0] === '') {
        args.shift();
    }

    if(args[0].indexOf('//') == 0) {
        prefixDoubleSlash = true;
    }

    url = args.join('/');

    url = url.replace()
}