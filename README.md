# Setup

Clone repo and `npm install` from root.

Set `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment variables.

If you want to use the run script, run `chmod +x run.sh`

# Execution

To run all tests and load the test report use `./run.sh`

_or_

Run all specs in the specs directory using `./node_modules/.bin/wdio wdio.conf.js`

Run a single spec using `./node_modules/.bin/wdio wdio.conf.js --spec ./test/specs/my.spec.js`

Load the test report using `./node_modules/.bin/allure generate allure-results && ./node_modules/.bin/allure report open`