'use strict';

var cheerio = require('cheerio');
var Policy = require('csp-parse');


function addCSPInMem(pageContent) {
	var $ = cheerio.load(pageContent, {
		decodeEntities: false
	});
	var cspTag = $('meta[http-equiv=Content-Security-Policy]');
	var policy = new Policy(cspTag.attr('content'));
	policy.add('default-src', 'ws:');
	policy.add('default-src', "'unsafe-inline'");
	cspTag.attr('content', policy.toString());
	return $.html();
}


module.exports = addCSPInMem;
