/* global afterEach, beforeEach, browser, describe, it */
const expect = require('chai').expect
const { browserName, version } = browser.desiredCapabilities
const isChrome = browserName === 'chrome'
const isFireFox = browserName === 'firefox'
const isIE = browserName === 'internet explorer'
// const isIE9 = isIE && version === '9'
// const isIE10 = isIE && version === '10'
// const isIE11 = isIE && version === '11.103'
const liveRegionWaitTimeMillis = 10000

const basicExample = () => {
  describe('basic example', function () {
    const input = 'input#autocomplete-default'
    const menu = `${input} + ul`
    const firstOption = `${menu} > li:first-child`
    const secondOption = `${menu} > li:nth-child(2)`

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

    // These tests are flakey when run through Saucelabs so we only run them
    // in Chrome
    if (isChrome) {
      it('should announce status changes using two alternately updated aria live regions', () => {
        const regionA = browser.$('#autocomplete-default__status--A')
        const regionB = browser.$('#autocomplete-default__status--B')

        expect(regionA.getText()).to.equal('')
        expect(regionB.getText()).to.equal('')

        browser.click(input)
        browser.setValue(input, 'a')

        // We can't tell which region will be used first, so we have to allow for
        // either region changing
        browser.waitUntil(() => { return regionA.getText() !== '' || regionB.getText() !== '' },
          liveRegionWaitTimeMillis,
          'expected the first aria live region to be populated within ' + liveRegionWaitTimeMillis + ' milliseconds'
        )

        if (regionA.getText()) {
          browser.addValue(input, 's')
          browser.waitUntil(() => { return (regionA.getText() === '' && regionB.getText() !== '') },
            liveRegionWaitTimeMillis,
            'expected the first aria live region to be cleared, and the second to be populated within ' +
            liveRegionWaitTimeMillis + ' milliseconds'
          )

          browser.addValue(input, 'h')
          browser.waitUntil(() => { return (regionA.getText() !== '' && regionB.getText() === '') },
            liveRegionWaitTimeMillis,
            'expected the first aria live region to be populated, and the second to be cleared within ' +
            liveRegionWaitTimeMillis + ' milliseconds'
          )
        } else {
          browser.addValue(input, 's')
          browser.waitUntil(() => { return (regionA.getText() !== '' && regionB.getText() === '') },
            liveRegionWaitTimeMillis,
            'expected the first aria live region to be populated, and the second to be cleared within ' +
            liveRegionWaitTimeMillis + ' milliseconds'
          )

          browser.addValue(input, 'h')
          browser.waitUntil(() => { return (regionA.getText() === '' && regionB.getText() !== '') },
            liveRegionWaitTimeMillis,
            'expected the first aria live region to be cleared, and the second to be populated within ' +
            liveRegionWaitTimeMillis + ' milliseconds'
          )
        }
      })
    }

    it('should set aria-selected to true on selected option and false on other options', () => {
      browser.click(input)
      browser.setValue(input, 'ita')
      browser.addValue(input, ['ArrowDown'])
      expect(browser.$(firstOption).getAttribute('aria-selected')).to.equal('true')
      expect(browser.$(secondOption).getAttribute('aria-selected')).to.equal('false')
      browser.addValue(firstOption, ['ArrowDown'])
      expect(browser.$(firstOption).getAttribute('aria-selected')).to.equal('false')
      expect(browser.$(secondOption).getAttribute('aria-selected')).to.equal('true')
    })

    describe('keyboard use', () => {
      it('should allow typing', () => {
        browser.click(input)
        browser.addValue(input, 'ita')
        expect(browser.getValue(input)).to.equal('ita')
      })

      it('should allow selecting an option', () => {
        browser.click(input)
        browser.setValue(input, 'ita')
        browser.addValue(input, ['ArrowDown'])
        expect(browser.hasFocus(input)).to.equal(false)
        expect(browser.hasFocus(firstOption)).to.equal(true)
        browser.addValue(firstOption, ['ArrowDown'])
        expect(browser.isVisible(menu)).to.equal(true)
        expect(browser.getValue(input)).to.equal('ita')
        expect(browser.hasFocus(firstOption)).to.equal(false)
        expect(browser.hasFocus(secondOption)).to.equal(true)
      })

      it('should allow confirming an option', () => {
        browser.click(input)
        browser.setValue(input, 'ita')
        browser.addValue(input, ['ArrowDown', 'Enter'])
        browser.waitUntil(() => browser.getValue(input) !== 'ita')
        expect(browser.hasFocus(input)).to.equal(true)
        expect(browser.getValue(input)).to.equal('Italy')
      })

      it('should redirect keypresses on an option to input', () => {
        if (!isIE) {
          browser.click(input)
          browser.setValue(input, 'ita')
          browser.addValue(input, ['ArrowDown'])
          expect(browser.hasFocus(input)).to.equal(false)
          expect(browser.hasFocus(firstOption)).to.equal(true)
          browser.addValue(firstOption, ['l'])
          expect(browser.hasFocus(input)).to.equal(true)
          expect(browser.getValue(input)).to.equal('ital')
        } else {
          // FIXME: This feature does not work correctly on IE 9 to 11.
        }
      })
    })

    describe('mouse use', () => {
      it('should allow confirming an option', () => {
        browser.click(input)
        browser.setValue(input, 'ita')
        browser.click(firstOption)
        expect(browser.hasFocus(input)).to.equal(true)
        expect(browser.getValue(input)).to.equal('Italy')
      })
    })
  })
}

const customTemplatesExample = () => {
  describe('custom templates example', function () {
    const input = 'input#autocomplete-customTemplates'
    const menu = `${input} + ul`
    const firstOption = `${menu} > li:first-child`
    const firstOptionInnerElement = `${firstOption} > strong`

    beforeEach(() => {
      browser.setValue(input, '') // Prevent autofilling, IE likes to do this.
    })

    describe('mouse use', () => {
      it('should allow confirming an option by clicking on child elements', () => {
        browser.setValue(input, 'uni')
        if (isChrome) {
          const errorRegex = /Other element would receive the click/
          expect(browser.click.bind(browser, firstOptionInnerElement)).to.throw(errorRegex)
          expect(browser.hasFocus(input)).to.equal(true)
          expect(browser.getValue(input)).to.equal('uni')
        }
        if (isFireFox) {
          browser.click(firstOptionInnerElement)
          expect(browser.hasFocus(input)).to.equal(true)
          expect(browser.getValue(input)).to.equal('United Kingdom')
        }
        if (isIE) {
          // FIXME: This feature works correctly on IE but testing it doesn't seem to work.
        }
      })
    })
  })
}

const takeScreenshotsIfFail = () => {
  afterEach(function () {
    const testFailed = this.currentTest.state === 'failed'
    if (testFailed) {
      const timestamp = +new Date()
      const browserVariant = isIE ? `ie${version}` : browserName
      const testTitle = this.currentTest.title.replace(/\W/g, '-')
      const filename = `./screenshots/${timestamp}-${browserVariant}-${testTitle}.png`
      browser.saveScreenshot(filename)
      console.log(`Test failed, created: ${filename}`)
    }
  })
}

describe('Accessible Autocomplete', () => {
  beforeEach(() => {
    browser.url('/')
  })

  it('should have the right title', () => {
    expect(browser.getTitle()).to.equal('Accessible Autocomplete examples')
  })

  basicExample()
  customTemplatesExample()

  takeScreenshotsIfFail()
})

describe('Accessible Autocomplete Preact', () => {
  beforeEach(() => {
    browser.url('/preact')
  })

  it('should have the right title', () => {
    expect(browser.getTitle()).to.equal('Accessible Autocomplete Preact examples')
  })

  basicExample()

  takeScreenshotsIfFail()
})

describe('Accessible Autocomplete React', () => {
  beforeEach(() => {
    browser.url('/react')
  })

  it('should have the right title', () => {
    expect(browser.getTitle()).to.equal('Accessible Autocomplete React examples')
  })

  basicExample()

  takeScreenshotsIfFail()
})
