'use strict';

var addCSP = require('./addCSP');
var addCSPInMem = require('./addCSPInMem');
var createIndexHtml = require('./createIndexHtml');
var createIndexHtmlForWebpack = require('./createIndexHtmlForWebpack');
var fixATS = require('./fixATS');
var startBrowserSync = require('./startBrowserSync');
var getWWWFolder = require('./getWWWFolder');
var updateConfigXml = require('./updateConfigXml');
var isPlatformSupported = require('./isPlatformSupported');

module.exports = {
	addCSP: addCSP,
	addCSPInMem: addCSPInMem,
	createIndexHtml: createIndexHtml,
	createIndexHtmlForWebpack: createIndexHtmlForWebpack,
	fixATS: fixATS,
	startBrowserSync: startBrowserSync,
	getWWWFolder: getWWWFolder,
	updateConfigXml: updateConfigXml,
	isPlatformSupported: isPlatformSupported
};
