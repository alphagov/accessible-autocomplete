/* global after, describe, before, beforeEach, expect, it */
import { h, render } from 'preact' /** @jsx h */
import Typeahead from '../../src/typeahead'

function suggest (query, syncResults) {
  var results = [
    'France',
    'Germany',
    'United Kingdom'
  ]
  syncResults(query
    ? results.filter(function (result) {
      return result.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
    : []
  )
}

describe('Typeahead', () => {
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
      it('renders an input', () => {
        render(<Typeahead />, scratch)

        expect(scratch.innerHTML).to.contain('input')
        expect(scratch.innerHTML).to.contain('class="typeahead__input"')
        expect(scratch.innerHTML).to.contain('class="typeahead__menu')
        expect(scratch.innerHTML).to.contain('name="input-typeahead"')
      })

      it('renders an input with a name attribute', () => {
        render(<Typeahead name='bob' />, scratch)

        expect(scratch.innerHTML).to.contain('name="bob"')
      })

      it('renders an input with a custom CSS namespace', () => {
        render(<Typeahead cssNamespace='bob' />, scratch)

        expect(scratch.innerHTML).to.contain('class="bob__input"')
        expect(scratch.innerHTML).to.contain('class="bob__menu')
      })
    })
  })

  describe('behaviour', () => {
    let typeahead, autoselectTypeahead

    beforeEach(() => {
      typeahead = new Typeahead({
        ...Typeahead.defaultProps,
        id: 'test',
        source: suggest
      })

      autoselectTypeahead = new Typeahead({
        ...Typeahead.defaultProps,
        autoselect: true,
        id: 'test2',
        source: suggest
      })
    })

    describe('typing', () => {
      it('searches for options', () => {
        typeahead.handleInputChange({ target: { value: 'f' } })
        expect(typeahead.state.menuOpen).to.equal(true)
        expect(typeahead.state.options).to.contain('France')
      })

      it('hides menu when no options are available', () => {
        typeahead.handleInputChange({ target: { value: 'aa' } })
        expect(typeahead.state.menuOpen).to.equal(false)
        expect(typeahead.state.options.length).to.equal(0)
      })

      it('hides menu when query becomes empty', () => {
        typeahead.setState({ query: 'f', options: ['France'], menuOpen: true })
        typeahead.handleInputChange({ target: { value: '' } })
        expect(typeahead.state.menuOpen).to.equal(false)
      })

      describe('with minLength', () => {
        beforeEach(() => {
          typeahead = new Typeahead({
            ...Typeahead.defaultProps,
            id: 'test',
            source: suggest,
            minLength: 2
          })
        })

        it('doesn\'t search when under limit', () => {
          typeahead.handleInputChange({ target: { value: 'f' } })
          expect(typeahead.state.menuOpen).to.equal(false)
          expect(typeahead.state.options.length).to.equal(0)
        })

        it('does search when over limit', () => {
          typeahead.handleInputChange({ target: { value: 'fra' } })
          expect(typeahead.state.menuOpen).to.equal(true)
          expect(typeahead.state.options).to.contain('France')
        })
      })
    })

    describe('focusing input', () => {
      it('does not display menu when something is typed in', () => {
        typeahead.setState({ query: 'f' })
        typeahead.handleInputFocus()
        expect(typeahead.state.menuOpen).to.equal(false)
        expect(typeahead.state.focused).to.equal(-1)
      })

      it('hides menu when query is empty', () => {
        typeahead.setState({ query: '' })
        typeahead.handleInputFocus()
        expect(typeahead.state.menuOpen).to.equal(false)
        expect(typeahead.state.focused).to.equal(-1)
      })

      describe('with option selected', () => {
        it('leaves menu open, does not change query', () => {
          typeahead.setState({ menuOpen: true, options: ['France'], query: 'fr', focused: 0, selected: 0 })
          typeahead.handleInputFocus()
          expect(typeahead.state.focused).to.equal(-1)
          expect(typeahead.state.menuOpen).to.equal(true)
          expect(typeahead.state.query).to.equal('fr')
        })
      })

      describe('with defaultValue', () => {
        beforeEach(() => {
          typeahead = new Typeahead({
            ...Typeahead.defaultProps,
            defaultValue: 'France',
            id: 'test',
            source: suggest
          })
        })

        it('is prefilled', () => {
          expect(typeahead.state.options.length).to.equal(1)
          expect(typeahead.state.options[0]).to.equal('France')
          expect(typeahead.state.query).to.equal('France')
        })
      })
    })

    describe('blurring input', () => {
      it('unfocuses component', () => {
        typeahead.setState({ menuOpen: true, options: ['France'], query: 'fr', focused: -1, selected: -1 })
        typeahead.handleInputBlur({ relatedTarget: null })
        expect(typeahead.state.focused).to.equal(null)
        expect(typeahead.state.menuOpen).to.equal(false)
        expect(typeahead.state.query).to.equal('fr')
      })

      describe('autoselect', () => {
        it('unfocuses component, updates query', () => {
          autoselectTypeahead.setState({ menuOpen: true, options: ['France'], query: 'fr', focused: -1, selected: 0 })
          autoselectTypeahead.handleInputBlur({ target: 'mock', relatedTarget: 'relatedMock' }, 0)
          expect(autoselectTypeahead.state.focused).to.equal(null)
          expect(autoselectTypeahead.state.menuOpen).to.equal(false)
          expect(autoselectTypeahead.state.query).to.equal('France')
        })
      })
    })

    describe('focusing option', () => {
      it('sets the option as focused', () => {
        typeahead.setState({ options: ['France'] })
        typeahead.handleOptionFocus(0)
        expect(typeahead.state.focused).to.equal(0)
      })
    })

    describe('focusing out option', () => {
      describe('with input selected', () => {
        it('unfocuses component, does not change query', () => {
          typeahead.setState({ menuOpen: true, options: ['France'], query: 'fr', focused: 0, selected: -1 })
          typeahead.handleOptionFocusOut({ target: 'mock', relatedTarget: 'relatedMock' }, 0)
          expect(typeahead.state.focused).to.equal(null)
          expect(typeahead.state.menuOpen).to.equal(false)
          expect(typeahead.state.query).to.equal('fr')
        })
      })

      describe('with option selected', () => {
        it('unfocuses component, updates query', () => {
          typeahead.setState({ menuOpen: true, options: ['France'], query: 'fr', focused: 0, selected: 0 })
          typeahead.handleOptionFocusOut({ target: 'mock', relatedTarget: 'relatedMock' }, 0)
          expect(typeahead.state.focused).to.equal(null)
          expect(typeahead.state.menuOpen).to.equal(false)
          expect(typeahead.state.query).to.equal('France')
        })
      })
    })

    describe('hovering option', () => {
      it('sets the option as focused, does not change selected', () => {
        typeahead.setState({ options: ['France'], focused: -1, selected: -1 })
        typeahead.handleOptionMouseMove(0)
        expect(typeahead.state.focused).to.equal(0)
        expect(typeahead.state.selected).to.equal(-1)
      })
    })

    describe('hovering out option', () => {
      it('sets focus back on selected', () => {
        typeahead.setState({ options: ['France'], focused: 0, selected: -1 })
        typeahead.handleOptionMouseOut({ toElement: 'mock' }, 0)
        expect(typeahead.state.focused).to.equal(-1)
        expect(typeahead.state.selected).to.equal(-1)
      })
    })

    describe('up key', () => {
      it('focuses previous element', () => {
        typeahead.setState({ menuOpen: true, options: ['France'], focused: 0 })
        typeahead.handleKeyDown({ preventDefault: () => {}, keyCode: 38 })
        expect(typeahead.state.focused).to.equal(-1)
      })
    })

    describe('down key', () => {
      describe('0 options available', () => {
        it('does nothing', () => {
          typeahead.setState({ menuOpen: false, options: [], focused: -1 })
          const stateBefore = typeahead.state
          typeahead.handleKeyDown({ preventDefault: () => {}, keyCode: 40 })
          expect(typeahead.state).to.equal(stateBefore)
        })
      })

      describe('1 option available', () => {
        it('focuses next element', () => {
          typeahead.setState({ menuOpen: true, options: ['France'], focused: -1, selected: -1 })
          typeahead.handleKeyDown({ preventDefault: () => {}, keyCode: 40 })
          expect(typeahead.state.focused).to.equal(0)
          expect(typeahead.state.selected).to.equal(0)
        })
      })

      describe('2 or more option available', () => {
        it('focuses next element', () => {
          typeahead.setState({ menuOpen: true, options: ['France', 'Germany'], focused: 0, selected: 0 })
          typeahead.handleKeyDown({ preventDefault: () => {}, keyCode: 40 })
          expect(typeahead.state.focused).to.equal(1)
          expect(typeahead.state.selected).to.equal(1)
        })
      })

      describe('autoselect', () => {
        describe('0 options available', () => {
          it('does nothing', () => {
            autoselectTypeahead.setState({ menuOpen: false, options: [], focused: -1, selected: -1 })
            const stateBefore = autoselectTypeahead.state
            autoselectTypeahead.handleKeyDown({ preventDefault: () => {}, keyCode: 40 })
            expect(autoselectTypeahead.state).to.equal(stateBefore)
          })
        })

        describe('1 option available', () => {
          it('does nothing', () => {
            autoselectTypeahead.setState({ menuOpen: true, options: ['France'], focused: -1, selected: 0 })
            const stateBefore = autoselectTypeahead.state
            autoselectTypeahead.handleKeyDown({ preventDefault: () => {}, keyCode: 40 })
            expect(autoselectTypeahead.state).to.equal(stateBefore)
          })
        })

        describe('2 or more option available', () => {
          it('on input, focuses second element', () => {
            autoselectTypeahead.setState({ menuOpen: true, options: ['France', 'Germany'], focused: -1, selected: 0 })
            autoselectTypeahead.handleKeyDown({ preventDefault: () => {}, keyCode: 40 })
            expect(autoselectTypeahead.state.focused).to.equal(1)
            expect(autoselectTypeahead.state.selected).to.equal(1)
          })
        })
      })
    })

    describe('escape key', () => {
      it('unfocuses component', () => {
        typeahead.setState({ menuOpen: true, options: ['France'], focused: -1 })
        typeahead.handleKeyDown({ preventDefault: () => {}, keyCode: 27 })
        expect(typeahead.state.menuOpen).to.equal(false)
        expect(typeahead.state.focused).to.equal(null)
      })
    })

    describe('enter key', () => {
      describe('on an option', () => {
        it('prevents default, closes the menu, sets the query, focuses the input', () => {
          let preventedDefault = false
          typeahead.setState({ menuOpen: true, options: ['France'], focused: 0, selected: 0 })
          typeahead.handleKeyDown({ preventDefault: () => { preventedDefault = true }, keyCode: 13 })
          expect(typeahead.state.menuOpen).to.equal(false)
          expect(typeahead.state.query).to.equal('France')
          expect(typeahead.state.focused).to.equal(-1)
          expect(typeahead.state.selected).to.equal(-1)
          expect(preventedDefault).to.equal(true)
        })
      })

      describe('on the input', () => {
        describe('with menu opened', () => {
          it('prevents default, does nothing', () => {
            let preventedDefault = false
            typeahead.setState({ menuOpen: true, options: [], query: 'asd', focused: -1, selected: -1 })
            const stateBefore = typeahead.state
            typeahead.handleKeyDown({ preventDefault: () => { preventedDefault = true }, keyCode: 13 })
            expect(typeahead.state).to.equal(stateBefore)
            expect(preventedDefault).to.equal(true)
          })
        })

        describe('with menu closed', () => {
          it('bubbles, does not prevent default', () => {
            let preventedDefault = false
            typeahead.setState({ menuOpen: false, options: ['France'], focused: -1, selected: -1 })
            const stateBefore = typeahead.state
            typeahead.handleKeyDown({ preventDefault: () => { preventedDefault = true }, keyCode: 13 })
            expect(typeahead.state).to.equal(stateBefore)
            expect(preventedDefault).to.equal(false)
          })
        })

        describe('autoselect', () => {
          it('closes the menu, selects the first option, keeps input focused', () => {
            autoselectTypeahead.setState({ menuOpen: true, options: ['France'], focused: -1, selected: 0 })
            autoselectTypeahead.handleKeyDown({ preventDefault: () => {}, keyCode: 13 })
            expect(autoselectTypeahead.state.menuOpen).to.equal(false)
            expect(autoselectTypeahead.state.query).to.equal('France')
            expect(autoselectTypeahead.state.focused).to.equal(-1)
            expect(autoselectTypeahead.state.selected).to.equal(-1)
          })
        })
      })
    })
  })
})
