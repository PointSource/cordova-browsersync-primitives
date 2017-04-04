'use strict';

var fs = require('fs');
var addCSPInMem = require('./addCSPInMem');


function addCSP(filename) {
	var pageContent = fs.readFileSync(filename, 'utf-8');
	var alteredHtml = addCSPInMem(pageContent);
	fs.writeFileSync(filename, alteredHtml);
}


module.exports = addCSP;
