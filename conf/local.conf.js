const config = require('./base.conf');

config.services = ['selenium-standalone'];

config.maxInstances = 1;

config.capabilities = [{
	browserName: 'chrome',
	version: 'latest',
        chromeOptions: {
            args: ['window-size=3000,3000']
        }
}];

config.logLevel = 'silent',


module.exports.config = config;