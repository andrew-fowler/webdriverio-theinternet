# Requirements

Saucelabs account or local Chrome install.

NOTE: This is designed for / tested on Mac.  It probably isn't Windows friendly.

# Setup

Clone repo and `npm install` from root.

If you want to use Saucelabs
 
* Set the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment variables
* Comment out the LOCAL section of `wdio.conf.js` and uncomment the SAUCELABS section

If you want to run locally

* Comment out the SAUCELABS section of `wdio.conf.js` and uncomment the LOCAL section

# Execution

To run all tests and load the test report use `npm test`

Reload the latest test report using `npm run report`