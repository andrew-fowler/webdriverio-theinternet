const config = require('./base.conf');

// ================================
// SAUCELABS SELENIUM CONFIGURATION
// ================================
config.services = ['sauce'];
config.maxInstances = 10;
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;

config.capabilities = [
	// {
	// 	'browserName': 'chrome',
	// 	'version': 'latest',
	// 	'platform': 'Windows 7',
	// 	'maxDuration': 10800,
	// 	'idleTimeout': 900,
	// 	'commandTimeout': 600,
	// 	'screenResolution': '1280x1024',
	// 	"build": process.env.USER + "_local"
	// },
	// {
	// 	browserName: 'firefox',
	// 	platform: 'Windows 10',
	// 	screenResolution: '1280x960'
	// },
	{
		browserName: 'internet explorer',
		version: '11.103',
		platform: 'Windows 10'
	}
];

module.exports.config = config;
