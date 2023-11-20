/* global $, afterEach, beforeEach, browser, describe, it */

const { mkdir } = require('fs/promises')
const { dirname, join } = require('path')
const { cwd } = require('process')
const { expect } = require('chai')
const { Key } = require('webdriverio')

const { browserName, browserVersion } = browser.capabilities
const isChrome = browserName === 'chrome'
// const isFireFox = browserName === 'firefox'
const isIE = browserName === 'internet explorer'
const liveRegionWaitTimeMillis = 10000

const basicExample = () => {
  describe('basic example', function () {
    const input = 'input#autocomplete-default'

    let $input
    let $menu

    beforeEach(async () => {
      $input = await $(input)
      $menu = await $(`${input} + ul`)
    })

    it('should show the input', async () => {
      await $input.waitForExist()
      expect(await $input.isDisplayed()).to.equal(true)
    })

    it('should allow focusing the input', async () => {
      await $input.click()
      expect(await $input.isFocused()).to.equal(true)
    })

    it('should display suggestions', async () => {
      await $input.click()
      await $input.setValue('ita')
      await $menu.waitForDisplayed()
      expect(await $menu.isDisplayed()).to.equal(true)
    })

    // These tests are flakey when run through Saucelabs so we only run them
    // in Chrome
    if (isChrome) {
      it('should announce status changes using two alternately updated aria live regions', async () => {
        const $regionA = await $('#autocomplete-default__status--A')
        const $regionB = await $('#autocomplete-default__status--B')

        expect(await $regionA.getText()).to.equal('')
        expect(await $regionB.getText()).to.equal('')

        await $input.click()
        await $input.setValue('a')

        // We can't tell which region will be used first, so we have to allow for
        // either region changing
        await browser.waitUntil(async () => { return await $regionA.getText() !== '' || await $regionB.getText() !== '' },
          liveRegionWaitTimeMillis,
          'expected the first aria live region to be populated within ' + liveRegionWaitTimeMillis + ' milliseconds'
        )

        if (await $regionA.getText()) {
          await $input.addValue('s')
          await browser.waitUntil(async () => { return (await $regionA.getText() === '' && await $regionB.getText() !== '') },
            liveRegionWaitTimeMillis,
            'expected the first aria live region to be cleared, and the second to be populated within ' +
            liveRegionWaitTimeMillis + ' milliseconds'
          )

          await $input.addValue('h')
          await browser.waitUntil(async () => { return (await $regionA.getText() !== '' && await $regionB.getText() === '') },
            liveRegionWaitTimeMillis,
            'expected the first aria live region to be populated, and the second to be cleared within ' +
            liveRegionWaitTimeMillis + ' milliseconds'
          )
        } else {
          await $input.addValue('s')
          await browser.waitUntil(async () => { return (await $regionA.getText() !== '' && await $regionB.getText() === '') },
            liveRegionWaitTimeMillis,
            'expected the first aria live region to be populated, and the second to be cleared within ' +
            liveRegionWaitTimeMillis + ' milliseconds'
          )

          await $input.addValue('h')
          await browser.waitUntil(async () => { return (await $regionA.getText() === '' && await $regionB.getText() !== '') },
            liveRegionWaitTimeMillis,
            'expected the first aria live region to be cleared, and the second to be populated within ' +
            liveRegionWaitTimeMillis + ' milliseconds'
          )
        }
      })
    }

    it('should set aria-selected to true on selected option and false on other options', async () => {
      await $input.click()
      await $input.setValue('ita')

      const $option1 = await $(`${input} + ul li:nth-child(1)`)
      const $option2 = await $(`${input} + ul li:nth-child(2)`)

      await browser.keys([Key.ArrowDown])
      expect(await $option1.getAttribute('aria-selected')).to.equal('true')
      expect(await $option2.getAttribute('aria-selected')).to.equal('false')
      await browser.keys([Key.ArrowDown])
      expect(await $option1.getAttribute('aria-selected')).to.equal('false')
      expect(await $option2.getAttribute('aria-selected')).to.equal('true')
    })

    describe('keyboard use', () => {
      it('should allow typing', async () => {
        await $input.click()
        await $input.addValue('ita')
        expect(await $input.getValue()).to.equal('ita')
      })

      it('should allow selecting an option', async () => {
        await $input.click()
        await $input.setValue('ita')

        const $option1 = await $(`${input} + ul li:nth-child(1)`)
        const $option2 = await $(`${input} + ul li:nth-child(2)`)

        await browser.keys([Key.ArrowDown])
        expect(await $input.isFocused()).to.equal(false)
        expect(await $option1.isFocused()).to.equal(true)
        await browser.keys([Key.ArrowDown])
        expect(await $menu.isDisplayed()).to.equal(true)
        expect(await $input.getValue()).to.equal('ita')
        expect(await $option1.isFocused()).to.equal(false)
        expect(await $option2.isFocused()).to.equal(true)
      })

      it('should allow confirming an option', async () => {
        await $input.click()
        await $input.setValue('ita')
        await browser.keys([Key.ArrowDown, Key.Enter])
        await browser.waitUntil(async () => await $input.getValue() !== 'ita')
        expect(await $input.isFocused()).to.equal(true)
        expect(await $input.getValue()).to.equal('Italy')
      })

      it('should redirect keypresses on an option to input', async () => {
        if (!isIE) {
          await $input.click()
          await $input.setValue('ita')

          const $option1 = await $(`${input} + ul li:nth-child(1)`)

          await browser.keys([Key.ArrowDown])
          expect(await $input.isFocused()).to.equal(false)
          expect(await $option1.isFocused()).to.equal(true)
          await $option1.addValue('l')
          expect(await $input.isFocused()).to.equal(true)
          expect(await $input.getValue()).to.equal('ital')
        } else {
          // FIXME: This feature does not work correctly on IE 11
        }
      })
    })

    describe('mouse use', () => {
      it('should allow confirming an option', async () => {
        await $input.click()
        await $input.setValue('ita')

        const $option1 = await $(`${input} + ul li:nth-child(1)`)
        await $option1.click()

        expect(await $input.isFocused()).to.equal(true)
        expect(await $input.getValue()).to.equal('Italy')
      })
    })
  })
}

const customTemplatesExample = () => {
  describe('custom templates example', function () {
    const input = 'input#autocomplete-customTemplates'

    let $input

    beforeEach(async () => {
      $input = await $(input)

      await $input.setValue('') // Prevent autofilling, IE likes to do this.
    })

    describe('mouse use', () => {
      it('should allow confirming an option by clicking on child elements', async () => {
        await $input.setValue('uni')

        const $option1InnerElement = await $(`${input} + ul li:nth-child(1) strong`)

        if (isIE) {
          // FIXME: This feature works correctly on IE but testing it doesn't seem to work.
          return
        }

        try {
          await $option1InnerElement.click()
        } catch (error) {
          // In some cases (mainly ChromeDriver) the automation protocol won't
          // allow clicking span elements. In this case we just skip the test.
          if (error.toString().match(/Other element would receive the click/)) {
            return
          } else {
            throw error
          }
        }

        expect(await $input.isFocused()).to.equal(true)
        expect(await $input.getValue()).to.equal('United Kingdom')
      })
    })
  })
}

const takeScreenshotsIfFail = () => {
  afterEach(async function () {
    const testFailed = this.currentTest.state === 'failed'
    if (testFailed) {
      const timestamp = +new Date()
      const browserVariant = isIE ? `ie${browserVersion}` : browserName
      const testTitle = this.currentTest.title.replace(/\W/g, '-')
      const filename = join(cwd(), `screenshots/${timestamp}-${browserVariant}-${testTitle}.png`)
      await mkdir(dirname(filename), { recursive: true })
      await browser.saveScreenshot(filename)
      console.log(`Test failed, created: ${filename}`)
    }
  })
}

describe('Accessible Autocomplete', () => {
  beforeEach(async () => {
    await browser.url('/')
  })

  it('should have the right title', async () => {
    expect(await browser.getTitle()).to.equal('Accessible Autocomplete examples')
  })

  basicExample()
  customTemplatesExample()

  takeScreenshotsIfFail()
})

describe('Accessible Autocomplete Preact', () => {
  beforeEach(async () => {
    await browser.url('/preact')
  })

  it('should have the right title', async () => {
    expect(await browser.getTitle()).to.equal('Accessible Autocomplete Preact examples')
  })

  basicExample()

  takeScreenshotsIfFail()
})

describe('Accessible Autocomplete React', () => {
  beforeEach(async () => {
    await browser.url('/react')
  })

  it('should have the right title', async () => {
    expect(await browser.getTitle()).to.equal('Accessible Autocomplete React examples')
  })

  basicExample()

  takeScreenshotsIfFail()
})
