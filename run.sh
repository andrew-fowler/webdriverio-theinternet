rm -rf allure-report
rm -rf allure-results
./node_modules/.bin/wdio wdio.conf.js
./node_modules/.bin/allure generate allure-results && ./node_modules/.bin/allure report open