# Requirements

Saucelabs account or local Chrome install.

NOTE: This is designed for / tested on Mac.  It probably isn't Windows friendly.

# Setup

Clone repo and `npm install` from root.

If you have a Saucelabs account, set `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment variables.

Or if you want to run locally, install the selenium-standalone package via `"./node_modules/.bin/selenium-standalone" install`
and run the server using `"./node_modules/.bin/selenium-standalone" start`.  Also, uncomment the LOCAL section, and comment out the SAUCELABS section in `wdio.conf.js`.

If you want to use the run script, make it executable with `chmod +x run.sh`


# Execution

To run all tests and load the test report use `./run.sh`

_or_

Run all specs in the specs directory using `./node_modules/.bin/wdio wdio.conf.js`

Run a single spec using `./node_modules/.bin/wdio wdio.conf.js --spec ./test/specs/my.spec.js`

Load the test report using `./node_modules/.bin/allure generate allure-results && ./node_modules/.bin/allure report open`