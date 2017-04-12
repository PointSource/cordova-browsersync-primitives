'use strict';

var path = require('path');
var fs = require('fs');


function createIndexHtml(servers, dest) {
	var html = fs.readFileSync(path.join(__dirname, 'browser-sync-start.html'), 'utf-8');

	fs.writeFileSync(dest, html.replace(/__SERVERS__/, JSON.stringify(servers)));
};

module.exports = createIndexHtml;
