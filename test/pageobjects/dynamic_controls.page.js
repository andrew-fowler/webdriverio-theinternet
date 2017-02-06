/**
 * Created by billagee on 2/5/17.
 */
var page = require('./page')

var dynamicControlsPage = Object.create(page, {
    /**
     * define elements
     */
    btnRemove: { get: function () { return browser.element('button=Remove'); } },
    btnAdd: { get: function () { return browser.element('button=Add'); } },
    checkboxFoo: {
        get: function () { return browser.element("input[type='checkbox']"); }
    },
    pItsGone : {
        get: function () {
            return browser.element('//p[@id="message" and .="It\'s gone!"]');
        }
    },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, 'dynamic_controls');
    } }
});

module.exports = dynamicControlsPage
