/* global before, beforeEach, after, describe, expect, it */
import { createElement, render } from 'preact' /** @jsx createElement */
import DropdownArrowDown from '../../src/dropdown-arrow-down'

describe('DropdownArrowDown', () => {
  describe('rendering', () => {
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
      it('renders an svg', () => {
        render(<DropdownArrowDown />, scratch)

        expect(scratch.innerHTML).to.contain('svg')
      })

      it('renders with a given custom class', () => {
        render(<DropdownArrowDown className='foo' />, scratch)

        expect(scratch.innerHTML).to.contain('class="foo"')
      })

      // IE issue so the dropdown svg is not focusable (tabindex won't work for this)
      it('renders an svg where focusable attribute is false', () => {
        render(<DropdownArrowDown />, scratch)

        expect(scratch.innerHTML).to.contain('focusable="false"')
      })
    })
  })
})
