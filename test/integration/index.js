/* global $, afterEach, beforeEach, browser, describe, it */
const expect = require('chai').expect
const { browserName, browserVersion } = browser.capabilities
const isChrome = browserName === 'chrome'
const isFireFox = browserName === 'firefox'
const isIE = browserName === 'internet explorer'
// const isIE9 = isIE && browserVersion === '9'
// const isIE10 = isIE && browserVersion === '10'
// const isIE11 = isIE && browserVersion === '11.103'
const liveRegionWaitTimeMillis = 10000

const basicExample = () => {
  describe('basic example', function () {
    const input = 'input#autocomplete-default'
    const menu = `${input} + ul`
    const firstOption = `${menu} > li:first-child`
    const secondOption = `${menu} > li:nth-child(2)`

    it('should show the input', () => {
      $(input).waitForExist()
      expect($(input).isDisplayed()).to.equal(true)
    })

    it('should allow focusing the input', () => {
      $(input).click()
      expect($(input).isFocused()).to.equal(true)
    })

    it('should display suggestions', () => {
      $(input).click()
      $(input).setValue('ita')
      $(menu).waitForDisplayed()
      expect($(menu).isDisplayed()).to.equal(true)
    })

    // These tests are flakey when run through Saucelabs so we only run them
    // in Chrome
    if (isChrome) {
      it('should announce status changes using two alternately updated aria live regions', () => {
        const regionA = $('#autocomplete-default__status--A')
        const regionB = $('#autocomplete-default__status--B')

        expect(regionA.getText()).to.equal('')
        expect(regionB.getText()).to.equal('')

        $(input).click()
        $(input).setValue('a')

        // We can't tell which region will be used first, so we have to allow for
        // either region changing
        browser.waitUntil(() => { return regionA.getText() !== '' || regionB.getText() !== '' },
          liveRegionWaitTimeMillis,
          'expected the first aria live region to be populated within ' + liveRegionWaitTimeMillis + ' milliseconds'
        )

        if (regionA.getText()) {
          $(input).addValue('s')
          browser.waitUntil(() => { return (regionA.getText() === '' && regionB.getText() !== '') },
            liveRegionWaitTimeMillis,
            'expected the first aria live region to be cleared, and the second to be populated within ' +
            liveRegionWaitTimeMillis + ' milliseconds'
          )

          $(input).addValue('h')
          browser.waitUntil(() => { return (regionA.getText() !== '' && regionB.getText() === '') },
            liveRegionWaitTimeMillis,
            'expected the first aria live region to be populated, and the second to be cleared within ' +
            liveRegionWaitTimeMillis + ' milliseconds'
          )
        } else {
          $(input).addValue('s')
          browser.waitUntil(() => { return (regionA.getText() !== '' && regionB.getText() === '') },
            liveRegionWaitTimeMillis,
            'expected the first aria live region to be populated, and the second to be cleared within ' +
            liveRegionWaitTimeMillis + ' milliseconds'
          )

          $(input).addValue('h')
          browser.waitUntil(() => { return (regionA.getText() === '' && regionB.getText() !== '') },
            liveRegionWaitTimeMillis,
            'expected the first aria live region to be cleared, and the second to be populated within ' +
            liveRegionWaitTimeMillis + ' milliseconds'
          )
        }
      })
    }

    it('should set aria-selected to true on selected option and false on other options', () => {
      $(input).click()
      $(input).setValue('ita')
      browser.keys(['ArrowDown'])
      expect($(firstOption).getAttribute('aria-selected')).to.equal('true')
      expect($(secondOption).getAttribute('aria-selected')).to.equal('false')
      browser.keys(['ArrowDown'])
      expect($(firstOption).getAttribute('aria-selected')).to.equal('false')
      expect($(secondOption).getAttribute('aria-selected')).to.equal('true')
    })

    describe('keyboard use', () => {
      it('should allow typing', () => {
        $(input).click()
        $(input).addValue('ita')
        expect($(input).getValue()).to.equal('ita')
      })

      it('should allow selecting an option', () => {
        $(input).click()
        $(input).setValue('ita')
        browser.keys(['ArrowDown'])
        expect($(input).isFocused()).to.equal(false)
        expect($(firstOption).isFocused()).to.equal(true)
        browser.keys(['ArrowDown'])
        expect($(menu).isDisplayed()).to.equal(true)
        expect($(input).getValue()).to.equal('ita')
        expect($(firstOption).isFocused()).to.equal(false)
        expect($(secondOption).isFocused()).to.equal(true)
      })

      it('should allow confirming an option', () => {
        $(input).click()
        $(input).setValue('ita')
        browser.keys(['ArrowDown', 'Enter'])
        browser.waitUntil(() => $(input).getValue() !== 'ita')
        expect($(input).isFocused()).to.equal(true)
        expect($(input).getValue()).to.equal('Italy')
      })

      it('should redirect keypresses on an option to input', () => {
        if (!isIE) {
          $(input).click()
          $(input).setValue('ita')
          browser.keys(['ArrowDown'])
          expect($(input).isFocused()).to.equal(false)
          expect($(firstOption).isFocused()).to.equal(true)
          $(firstOption).addValue(['l'])
          expect($(input).isFocused()).to.equal(true)
          expect($(input).getValue()).to.equal('ital')
        } else {
          // FIXME: This feature does not work correctly on IE 9 to 11.
        }
      })
    })

    describe('mouse use', () => {
      it('should allow confirming an option', () => {
        $(input).click()
        $(input).setValue('ita')
        $(firstOption).click()
        expect($(input).isFocused()).to.equal(true)
        expect($(input).getValue()).to.equal('Italy')
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
      $(input).setValue('') // Prevent autofilling, IE likes to do this.
    })

    describe('mouse use', () => {
      it('should allow confirming an option by clicking on child elements', () => {
        $(input).setValue('uni')
        if (isChrome) {
          const errorRegex = /Other element would receive the click/
          expect($(firstOptionInnerElement).click.bind($(firstOptionInnerElement))).to.throw(errorRegex)
          expect($(input).isFocused()).to.equal(true)
          expect($(input).getValue()).to.equal('uni')
        }
        if (isFireFox) {
          $(firstOptionInnerElement).click()
          expect($(input).isFocused()).to.equal(true)
          expect($(input).getValue()).to.equal('United Kingdom')
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
      const browserVariant = isIE ? `ie${browserVersion}` : browserName
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
