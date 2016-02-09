'use strict';

var path = require('path');
var fs = require('fs');
var cheerio = require('cheerio');
var Policy = require('csp-parse');
var getWWWFolder = require('./getWWWFolder');


function addCSP(cordovaDir, platforms) {
	platforms.forEach(function(platform) {
		var filename = path.join(cordovaDir, getWWWFolder(platform), 'index.html');

		var pageContent = fs.readFileSync(filename, 'utf-8');
		var $ = cheerio.load(pageContent, {
			decodeEntities: false
		});
		var cspTag = $('meta[http-equiv=Content-Security-Policy]');
		var policy = new Policy(cspTag.attr('content'));
		policy.add('default-src', 'ws:');
		policy.add('default-src', "'unsafe-inline'");
		cspTag.attr('content', policy.toString());
		fs.writeFileSync(filename, $.html());
	}, this);
}


module.exports = addCSP;
