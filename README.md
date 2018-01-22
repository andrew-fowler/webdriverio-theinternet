# Requirements

Saucelabs account or local Chrome install.

NOTE: This is designed for / tested on Mac.  It probably isn't Windows friendly.

# Setup

Clone repo and `npm install` from root.

If you want to use Saucelabs, set the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment variables

# Execution

To run all tests against a local browser use `npm run test:local`

To run all tests against against Saucelabs use `npm run test:sauce`

Reload the latest test report using `npm run report`