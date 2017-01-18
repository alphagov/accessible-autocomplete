/* global after, describe, before, beforeEach, expect, it */
import { h, render } from 'preact' /** @jsx h */
import Typeahead from '../../src/typeahead'

describe('Typeahead', () => {
  let scratch

  before(() => {
    scratch = document.createElement('div');
    (document.body || document.documentElement).appendChild(scratch)
  })

  beforeEach(() => {
    scratch.innerHTML = ''
  })

  after(() => {
    scratch.parentNode.removeChild(scratch)
    scratch = null
  })

  describe('basic usage', () => {
    it('should render an input', () => {
      render(<Typeahead />, scratch)

      expect(scratch.innerHTML).to.contain('input')
    })
  })
})
