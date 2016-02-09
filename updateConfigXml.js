'use strict';

var path = require('path');
var fs = require('fs');
var et = require('elementtree');


function updateConfigXml(cordovaDir, platforms, projectName) {
	var CONFIG_LOCATION = {
		android: 'res/xml',
		ios: projectName
	};

	return platforms.forEach(function(platform) {
		var filename = path.join(cordovaDir, 'platforms', platform, CONFIG_LOCATION[platform], 'config.xml');

		var configXml = new et.ElementTree(et.XML(fs.readFileSync(filename, "utf-8").replace(/^\uFEFF/, "")));

		// Add allow-navigation element so that http:// files will not launch an external browser.
		var allowNavTag = et.SubElement(configXml.find('.'), 'allow-navigation');
		allowNavTag.set('href', '*');

		fs.writeFileSync(filename, configXml.write({
			indent: 4
		}), "utf-8");
	});
}


module.exports = updateConfigXml;
