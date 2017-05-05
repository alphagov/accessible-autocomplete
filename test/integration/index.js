/* global before, browser, describe, it */
const expect = require('chai').expect

describe('Accessible Typeahead examples page', () => {
  before(() => {
    browser.url('/')
  })
  it('should have the right title', () => {
    expect(browser.getTitle()).to.equal('Accessible Typeahead examples')
  })
})
