const selectors = require('../../step2/supporting/selectors')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    '2+2=4': browser => {
        //I click all the appropriate buttons and check the display for the appropriate results, per the steps of my test case
        browser
            .click(selectors['2'])
            .pause(1000)
            .expect.element(selectors['result']).text.to.equal('2')
        browser
            .click(selectors['add'])
            .pause(1000)
            .expect.element(selectors['result']).text.to.equal('0')
        browser
            .click(selectors['2'])
            .pause(1000)
            .expect.element(selectors['result']).text.to.equal('2')
        browser
            .click(selectors['equals'])
            .pause(1000)
            .expect.element(selectors['result']).text.to.equal('4')
    }
}