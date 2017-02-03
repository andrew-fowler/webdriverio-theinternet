/**
 * Created by andrewfowler on 1/23/17.
 */
var page = require('./page');

var formPage = Object.create(page, {
    /**
     * define elements
     */

    dropdown: {get: function () { return browser.element('#dropdown'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, 'dropdown');
    } }
});

module.exports = formPage;