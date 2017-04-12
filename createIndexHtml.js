'use strict';

var path = require('path');
var url = require('url');
var getWWWFolder = require('./getWWWFolder');
var createIndexHtml = require('./createIndexHtmlForWebpack');


function createIndexHtmlForBrowserSync(servers, platform, cordovaDir, dest) {
	if (!dest)
		dest = path.join(cordovaDir, 'www/index.html');

	var data = {};
	for (var key in servers) {
		if (typeof servers[key] !== 'undefined') {
			data[key] = url.resolve(servers[key], getWWWFolder(platform) + '/index.html');
		}
	}

	return createIndexHtml(data, dest);
};

module.exports = createIndexHtmlForBrowserSync;
