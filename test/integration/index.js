/* global afterEach, before, beforeEach, browser, describe, it */
const expect = require('chai').expect

describe('Accessible Typeahead page', () => {
  before(() => {
    browser.url('/')
  })

  it('should have the right title', () => {
    expect(browser.getTitle()).to.equal('Accessible Typeahead examples')
  })

  describe('basic example', function () {
    this.retries(3)

    const input = 'input#typeahead-default'
    const menu = `${input} + ul`
    const firstOption = `${menu} > li:first-child`

    beforeEach(() => {
      browser.setValue(input, '') // Prevent autofilling, IE likes to do this.
    })

    it('should show the input', () => {
      browser.waitForExist(input)
      expect(browser.isVisible(input)).to.equal(true)
    })

    it('should allow focusing the input', () => {
      browser.click(input)
      expect(browser.hasFocus(input)).to.equal(true)
    })

    it('should display suggestions', () => {
      browser.click(input)
      browser.setValue(input, 'ita')
      browser.waitForVisible(menu)
      expect(browser.isVisible(menu)).to.equal(true)
    })

    describe('keyboard use', () => {
      it('should allow typing', () => {
        browser.click(input)
        browser.keys(['i', 't', 'a'])
        expect(browser.getValue(input)).to.equal('ita')
      })

      it('should allow selecting an option', () => {
        browser.click(input)
        browser.setValue(input, 'ita')
        browser.keys(['ArrowDown'])
        expect(browser.hasFocus(input)).to.equal(false)
        expect(browser.hasFocus(firstOption)).to.equal(true)
      })

      it('should allow confirming an option', () => {
        browser.click(input)
        browser.setValue(input, 'ita')
        browser.keys(['ArrowDown', 'Enter'])
        browser.waitUntil(() => browser.getValue(input) !== 'ita')
        expect(browser.hasFocus(input)).to.equal(true)
        expect(browser.getValue(input)).to.equal('Italy')
      })
    })
  })

  afterEach(function () {
    const testFailed = this.currentTest.state === 'failed'
    if (testFailed) {
      const timestamp = +new Date()
      const browserName = browser.desiredCapabilities.browserName
      const testTitle = this.currentTest.title.replace(/\W/g, '-')
      const filename = `./screenshots/${timestamp}-${browserName}-${testTitle}.png`
      browser.saveScreenshot(filename)
      console.log(`Test failed, created: ${filename}`)
    }
  })
})
