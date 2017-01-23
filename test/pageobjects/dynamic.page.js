/**
 * Created by andrewfowler on 1/23/17.
 */
var page = require('./page')

var dynamicPage = Object.create(page, {
    /**
     * define elements
     */
    btnStart:   { get: function () { return browser.element('button=Start'); } },
    lblDone: { get: function () { return browser.element("//div[@id='finish']"); } },
    //lblDone: { get: function () { return browser.elements('#finish'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, 'dynamic_loading/2');
    } }
});

module.exports = dynamicPage