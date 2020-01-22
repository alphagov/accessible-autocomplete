/* global after, describe, before, beforeEach, expect, it */
import { createElement, render } from 'preact' /** @jsx createElement */
import Autocomplete from '../../src/autocomplete'
import Status from '../../src/status'

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

describe('Autocomplete', () => {
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
        render(<Autocomplete />, scratch)

        expect(scratch.innerHTML).to.contain('input')
        expect(scratch.innerHTML).to.contain('class="autocomplete__input')
        expect(scratch.innerHTML).to.contain('class="autocomplete__menu')
        expect(scratch.innerHTML).to.contain('name="input-autocomplete"')
      })

      it('renders an input with a required attribute', () => {
        render(<Autocomplete required />, scratch)

        expect(scratch.innerHTML).to.contain('required')
      })

      it('renders an input without a required attribute', () => {
        render(<Autocomplete required={false} />, scratch)

        expect(scratch.innerHTML).to.not.contain('required')
      })

      it('renders an input with a name attribute', () => {
        render(<Autocomplete name='bob' />, scratch)

        expect(scratch.innerHTML).to.contain('name="bob"')
      })

      it('renders an input with a custom CSS namespace', () => {
        render(<Autocomplete cssNamespace='bob' />, scratch)

        expect(scratch.innerHTML).to.contain('class="bob__input')
        expect(scratch.innerHTML).to.contain('class="bob__menu')
      })

      it('renders with an aria-expanded attribute', () => {
        render(<Autocomplete required />, scratch)

        let wrapperElement = scratch.getElementsByClassName('autocomplete__wrapper')[0]
        let inputElement = wrapperElement.getElementsByTagName('input')[0]

        expect(inputElement.getAttribute('aria-expanded')).to.equal('false')
      })

      it('renders with an aria-describedby attribute', () => {
        render(<Autocomplete id='autocomplete-default' />, scratch)

        let wrapperElement = scratch.getElementsByClassName('autocomplete__wrapper')[0]
        let inputElement = wrapperElement.getElementsByTagName('input')[0]

        expect(inputElement.getAttribute('aria-describedby')).to.equal('autocomplete-default__assistiveHint')
      })

      describe('renders with an aria-autocomplete attribute', () => {
        it('of value "list", when autoselect is not enabled', () => {
          render(<Autocomplete required />, scratch)

          let wrapperElement = scratch.getElementsByClassName('autocomplete__wrapper')[0]
          let inputElement = wrapperElement.getElementsByTagName('input')[0]

          expect(inputElement.getAttribute('aria-autocomplete')).to.equal('list')
        })

        it('of value "both", when autoselect is enabled', () => {
          render(<Autocomplete required autoselect />, scratch)

          let wrapperElement = scratch.getElementsByClassName('autocomplete__wrapper')[0]
          let inputElement = wrapperElement.getElementsByTagName('input')[0]

          expect(inputElement.getAttribute('aria-autocomplete')).to.equal('both')
        })
      })

      it('renders with the correct roles', () => {
        render(<Autocomplete required />, scratch)

        let wrapperElement = scratch.getElementsByClassName('autocomplete__wrapper')[0]
        let inputElement = wrapperElement.getElementsByTagName('input')[0]
        let dropdownElement = wrapperElement.getElementsByTagName('ul')[0]

        expect(inputElement.getAttribute('role')).to.equal('combobox', 'input should have combobox role')
        expect(dropdownElement.getAttribute('role')).to.equal('listbox', 'menu should have listbox role')
      })
    })
  })

  describe('behaviour', () => {
    let autocomplete, autoselectAutocomplete, onConfirmAutocomplete, onConfirmTriggered,
      autoselectOnSelectAutocomplete, confirmOnBlurAutocomplete

    beforeEach(() => {
      autocomplete = new Autocomplete({
        ...Autocomplete.defaultProps,
        id: 'test',
        source: suggest
      })

      autoselectAutocomplete = new Autocomplete({
        ...Autocomplete.defaultProps,
        autoselect: true,
        id: 'test2',
        source: suggest
      })

      onConfirmTriggered = false
      onConfirmAutocomplete = new Autocomplete({
        ...Autocomplete.defaultProps,
        id: 'test3',
        onConfirm: () => { onConfirmTriggered = true },
        source: suggest
      })

      autoselectOnSelectAutocomplete = new Autocomplete({
        ...Autocomplete.defaultProps,
        autoselect: true,
        id: 'test4',
        onConfirm: () => { onConfirmTriggered = true },
        source: suggest
      })

      confirmOnBlurAutocomplete = new Autocomplete({
        ...Autocomplete.defaultProps,
        id: 'test5',
        onConfirm: () => { onConfirmTriggered = true },
        confirmOnBlur: false,
        source: suggest
      })
    })

    describe('typing', () => {
      it('searches for options', () => {
        autocomplete.handleInputChange({ target: { value: 'f' } })
        expect(autocomplete.state.menuOpen).to.equal(true)
        expect(autocomplete.state.options).to.contain('France')
      })

      it('hides menu when no options are available', () => {
        autocomplete.handleInputChange({ target: { value: 'aa' } })
        expect(autocomplete.state.menuOpen).to.equal(false)
        expect(autocomplete.state.options.length).to.equal(0)
      })

      it('hides menu when query becomes empty', () => {
        autocomplete.setState({ query: 'f', options: ['France'], menuOpen: true })
        autocomplete.handleInputChange({ target: { value: '' } })
        expect(autocomplete.state.menuOpen).to.equal(false)
      })

      it('removes the aria-describedby attribute when query is non empty', () => {
        expect(autocomplete.state.ariaHint).to.equal(true)
        autocomplete.handleInputChange({ target: { value: 'a' } })
        expect(autocomplete.state.ariaHint).to.equal(false)
        autocomplete.handleInputChange({ target: { value: '' } })
        expect(autocomplete.state.ariaHint).to.equal(true)
      })

      describe('with minLength', () => {
        beforeEach(() => {
          autocomplete = new Autocomplete({
            ...Autocomplete.defaultProps,
            id: 'test',
            source: suggest,
            minLength: 2
          })
        })

        it('doesn\'t search when under limit', () => {
          autocomplete.handleInputChange({ target: { value: 'f' } })
          expect(autocomplete.state.menuOpen).to.equal(false)
          expect(autocomplete.state.options.length).to.equal(0)
        })

        it('does search when over limit', () => {
          autocomplete.handleInputChange({ target: { value: 'fra' } })
          expect(autocomplete.state.menuOpen).to.equal(true)
          expect(autocomplete.state.options).to.contain('France')
        })

        it('hides results when going under limit', () => {
          autocomplete.setState({ menuOpen: true, query: 'fr', options: ['France'] })
          autocomplete.handleInputChange({ target: { value: 'f' } })
          expect(autocomplete.state.menuOpen).to.equal(false)
          expect(autocomplete.state.options.length).to.equal(0)
        })
      })
    })

    describe('focusing input', () => {
      describe('when no query is present', () => {
        it('does not display menu', () => {
          autocomplete.setState({ query: '' })
          autocomplete.handleInputFocus()
          expect(autocomplete.state.menuOpen).to.equal(false)
          expect(autocomplete.state.focused).to.equal(-1)
        })
      })

      describe('when a non-matched query is present (no matching options are present)', () => {
        it('does not display menu', () => {
          autocomplete.setState({ query: 'f' })
          autocomplete.handleInputFocus()
          expect(autocomplete.state.menuOpen).to.equal(false)
          expect(autocomplete.state.focused).to.equal(-1)
        })
      })

      describe('when a matched query is present (matching options exist)', () => {
        describe('and no user choice has yet been made', () => {
          it('displays menu', () => {
            autocomplete.setState({
              menuOpen: false,
              options: ['France'],
              query: 'fr',
              focused: null,
              selected: null,
              validChoiceMade: false
            })
            autocomplete.handleInputFocus()
            expect(autocomplete.state.focused).to.equal(-1)
            expect(autocomplete.state.menuOpen).to.equal(true)
            expect(autocomplete.state.selected).to.equal(-1)
          })
        })
        describe('and a user choice HAS been made', () => {
          it('does not display menu', () => {
            autocomplete.setState({
              menuOpen: false,
              options: ['France'],
              query: 'fr',
              focused: null,
              selected: null,
              validChoiceMade: true
            })
            autocomplete.handleInputFocus()
            expect(autocomplete.state.focused).to.equal(-1)
            expect(autocomplete.state.menuOpen).to.equal(false)
          })
        })
      })

      describe('with option selected', () => {
        it('leaves menu open, does not change query', () => {
          autocomplete.setState({ menuOpen: true, options: ['France'], query: 'fr', focused: 0, selected: 0 })
          autocomplete.handleInputFocus()
          expect(autocomplete.state.focused).to.equal(-1)
          expect(autocomplete.state.menuOpen).to.equal(true)
          expect(autocomplete.state.query).to.equal('fr')
        })
      })

      describe('with defaultValue', () => {
        beforeEach(() => {
          autocomplete = new Autocomplete({
            ...Autocomplete.defaultProps,
            defaultValue: 'France',
            id: 'test',
            source: suggest
          })
        })

        it('is prefilled', () => {
          expect(autocomplete.state.options.length).to.equal(1)
          expect(autocomplete.state.options[0]).to.equal('France')
          expect(autocomplete.state.query).to.equal('France')
        })
      })
    })

    describe('blurring input', () => {
      it('unfocuses component', () => {
        autocomplete.setState({ menuOpen: true, options: ['France'], query: 'fr', focused: -1, selected: -1 })
        autocomplete.handleInputBlur({ relatedTarget: null })
        expect(autocomplete.state.focused).to.equal(null)
        expect(autocomplete.state.menuOpen).to.equal(false)
        expect(autocomplete.state.query).to.equal('fr')
      })

      describe('with autoselect and onConfirm', () => {
        it('unfocuses component, updates query, triggers onConfirm', () => {
          autoselectOnSelectAutocomplete.setState({ menuOpen: true, options: ['France'], query: 'fr', focused: -1, selected: 0 })
          autoselectOnSelectAutocomplete.handleInputBlur({ target: 'mock', relatedTarget: 'relatedMock' }, 0)
          expect(autoselectOnSelectAutocomplete.state.focused).to.equal(null)
          expect(autoselectOnSelectAutocomplete.state.menuOpen).to.equal(false)
          expect(autoselectOnSelectAutocomplete.state.query).to.equal('France')
          expect(onConfirmTriggered).to.equal(true)
        })
      })

      describe('with confirmOnBlur false', () => {
        it('unfocuses component, does not touch query, does not trigger onConfirm', () => {
          confirmOnBlurAutocomplete.setState({ menuOpen: true, options: ['France'], query: 'fr', focused: -1, selected: 0 })
          confirmOnBlurAutocomplete.handleInputBlur({ target: 'mock', relatedTarget: 'relatedMock' }, 0)
          expect(confirmOnBlurAutocomplete.state.focused).to.equal(null)
          expect(confirmOnBlurAutocomplete.state.menuOpen).to.equal(false)
          expect(confirmOnBlurAutocomplete.state.query).to.equal('fr')
          expect(onConfirmTriggered).to.equal(false)
        })
      })
    })

    describe('focusing option', () => {
      it('sets the option as focused', () => {
        autocomplete.setState({ options: ['France'] })
        autocomplete.handleOptionFocus(0)
        expect(autocomplete.state.focused).to.equal(0)
      })
    })

    describe('focusing out option', () => {
      describe('with input selected', () => {
        it('unfocuses component, does not change query', () => {
          autocomplete.setState({ menuOpen: true, options: ['France'], query: 'fr', focused: 0, selected: -1 })
          autocomplete.handleOptionBlur({ target: 'mock', relatedTarget: 'relatedMock' }, 0)
          expect(autocomplete.state.focused).to.equal(null)
          expect(autocomplete.state.menuOpen).to.equal(false)
          expect(autocomplete.state.query).to.equal('fr')
        })
      })

      describe('with option selected', () => {
        describe('with confirmOnBlur true', () => {
          it('unfocuses component, updates query', () => {
            autocomplete.setState({ menuOpen: true, options: ['France'], query: 'fr', focused: 0, selected: 0 })
            autocomplete.handleOptionBlur({ target: 'mock', relatedTarget: 'relatedMock' }, 0)
            expect(autocomplete.state.focused).to.equal(null)
            expect(autocomplete.state.menuOpen).to.equal(false)
            expect(autocomplete.state.query).to.equal('France')
          })
        })
        describe('with confirmOnBlur false', () => {
          it('unfocuses component, does not update query', () => {
            confirmOnBlurAutocomplete.setState({ menuOpen: true, options: ['France'], query: 'fr', focused: 0, selected: 0 })
            confirmOnBlurAutocomplete.handleOptionBlur({ target: 'mock', relatedTarget: 'relatedMock' }, 0)
            expect(confirmOnBlurAutocomplete.state.focused).to.equal(null)
            expect(confirmOnBlurAutocomplete.state.menuOpen).to.equal(false)
            expect(confirmOnBlurAutocomplete.state.query).to.equal('fr')
          })
        })
      })
    })

    describe('hovering option', () => {
      it('sets the option as hovered, does not change focused, does not change selected', () => {
        autocomplete.setState({ options: ['France'], hovered: null, focused: -1, selected: -1 })
        autocomplete.handleOptionMouseEnter({}, 0)
        expect(autocomplete.state.hovered).to.equal(0)
        expect(autocomplete.state.focused).to.equal(-1)
        expect(autocomplete.state.selected).to.equal(-1)
      })
    })

    describe('hovering out option', () => {
      it('sets focus back on selected, sets hovered to null', () => {
        autocomplete.setState({ options: ['France'], hovered: 0, focused: -1, selected: -1 })
        autocomplete.handleListMouseLeave({ toElement: 'mock' }, 0)
        expect(autocomplete.state.hovered).to.equal(null)
        expect(autocomplete.state.focused).to.equal(-1)
        expect(autocomplete.state.selected).to.equal(-1)
      })
    })

    describe('up key', () => {
      it('focuses previous element', () => {
        autocomplete.setState({ menuOpen: true, options: ['France'], focused: 0 })
        autocomplete.handleKeyDown({ preventDefault: () => {}, keyCode: 38 })
        expect(autocomplete.state.focused).to.equal(-1)
      })
    })

    describe('down key', () => {
      describe('0 options available', () => {
        it('does nothing', () => {
          autocomplete.setState({ menuOpen: false, options: [], focused: -1 })
          const stateBefore = autocomplete.state
          autocomplete.handleKeyDown({ preventDefault: () => {}, keyCode: 40 })
          expect(autocomplete.state).to.equal(stateBefore)
        })
      })

      describe('1 option available', () => {
        it('focuses next element', () => {
          autocomplete.setState({ menuOpen: true, options: ['France'], focused: -1, selected: -1 })
          autocomplete.handleKeyDown({ preventDefault: () => {}, keyCode: 40 })
          expect(autocomplete.state.focused).to.equal(0)
          expect(autocomplete.state.selected).to.equal(0)
        })
      })

      describe('2 or more option available', () => {
        it('focuses next element', () => {
          autocomplete.setState({ menuOpen: true, options: ['France', 'Germany'], focused: 0, selected: 0 })
          autocomplete.handleKeyDown({ preventDefault: () => {}, keyCode: 40 })
          expect(autocomplete.state.focused).to.equal(1)
          expect(autocomplete.state.selected).to.equal(1)
        })
      })

      describe('autoselect', () => {
        describe('0 options available', () => {
          it('does nothing', () => {
            autoselectAutocomplete.setState({ menuOpen: false, options: [], focused: -1, selected: -1 })
            const stateBefore = autoselectAutocomplete.state
            autoselectAutocomplete.handleKeyDown({ preventDefault: () => {}, keyCode: 40 })
            expect(autoselectAutocomplete.state).to.equal(stateBefore)
          })
        })

        describe('1 option available', () => {
          it('does nothing', () => {
            autoselectAutocomplete.setState({ menuOpen: true, options: ['France'], focused: -1, selected: 0 })
            const stateBefore = autoselectAutocomplete.state
            autoselectAutocomplete.handleKeyDown({ preventDefault: () => {}, keyCode: 40 })
            expect(autoselectAutocomplete.state).to.equal(stateBefore)
          })
        })

        describe('2 or more option available', () => {
          it('on input, focuses second element', () => {
            autoselectAutocomplete.setState({ menuOpen: true, options: ['France', 'Germany'], focused: -1, selected: 0 })
            autoselectAutocomplete.handleKeyDown({ preventDefault: () => {}, keyCode: 40 })
            expect(autoselectAutocomplete.state.focused).to.equal(1)
            expect(autoselectAutocomplete.state.selected).to.equal(1)
          })
        })
      })
    })

    describe('escape key', () => {
      it('unfocuses component', () => {
        autocomplete.setState({ menuOpen: true, options: ['France'], focused: -1 })
        autocomplete.handleKeyDown({ preventDefault: () => {}, keyCode: 27 })
        expect(autocomplete.state.menuOpen).to.equal(false)
        expect(autocomplete.state.focused).to.equal(null)
      })
    })

    describe('enter key', () => {
      describe('on an option', () => {
        it('prevents default, closes the menu, sets the query, focuses the input, triggers onConfirm', () => {
          let preventedDefault = false
          onConfirmAutocomplete.setState({ menuOpen: true, options: ['France'], focused: 0, selected: 0 })
          onConfirmAutocomplete.handleKeyDown({ preventDefault: () => { preventedDefault = true }, keyCode: 13 })
          expect(onConfirmAutocomplete.state.menuOpen).to.equal(false)
          expect(onConfirmAutocomplete.state.query).to.equal('France')
          expect(onConfirmAutocomplete.state.focused).to.equal(-1)
          expect(onConfirmAutocomplete.state.selected).to.equal(-1)
          expect(preventedDefault).to.equal(true)
          expect(onConfirmTriggered).to.equal(true)
        })
      })

      describe('on the input', () => {
        describe('with menu opened', () => {
          it('prevents default, does nothing', () => {
            let preventedDefault = false
            autocomplete.setState({ menuOpen: true, options: [], query: 'asd', focused: -1, selected: -1 })
            const stateBefore = autocomplete.state
            autocomplete.handleKeyDown({ preventDefault: () => { preventedDefault = true }, keyCode: 13 })
            expect(autocomplete.state).to.equal(stateBefore)
            expect(preventedDefault).to.equal(true)
          })
        })

        describe('with menu closed', () => {
          it('bubbles, does not prevent default', () => {
            let preventedDefault = false
            autocomplete.setState({ menuOpen: false, options: ['France'], focused: -1, selected: -1 })
            const stateBefore = autocomplete.state
            autocomplete.handleKeyDown({ preventDefault: () => { preventedDefault = true }, keyCode: 13 })
            expect(autocomplete.state).to.equal(stateBefore)
            expect(preventedDefault).to.equal(false)
          })
        })

        describe('autoselect', () => {
          it('closes the menu, selects the first option, keeps input focused', () => {
            autoselectAutocomplete.setState({ menuOpen: true, options: ['France'], focused: -1, selected: 0 })
            autoselectAutocomplete.handleKeyDown({ preventDefault: () => {}, keyCode: 13 })
            expect(autoselectAutocomplete.state.menuOpen).to.equal(false)
            expect(autoselectAutocomplete.state.query).to.equal('France')
            expect(autoselectAutocomplete.state.focused).to.equal(-1)
            expect(autoselectAutocomplete.state.selected).to.equal(-1)
          })
        })
      })
    })

    describe('space key', () => {
      describe('on an option', () => {
        it('prevents default, closes the menu, sets the query, focuses the input, triggers onConfirm', () => {
          let preventedDefault = false
          onConfirmAutocomplete.setState({ menuOpen: true, options: ['France'], focused: 0, selected: 0 })
          onConfirmAutocomplete.handleKeyDown({ preventDefault: () => { preventedDefault = true }, keyCode: 32 })
          expect(onConfirmAutocomplete.state.menuOpen).to.equal(false)
          expect(onConfirmAutocomplete.state.query).to.equal('France')
          expect(onConfirmAutocomplete.state.focused).to.equal(-1)
          expect(onConfirmAutocomplete.state.selected).to.equal(-1)
          expect(preventedDefault).to.equal(true)
          expect(onConfirmTriggered).to.equal(true)
        })
      })
    })

    describe('an unrecognised key', () => {
      it('does nothing', () => {
        autocomplete.setState({ menuOpen: true, options: ['France'], focused: 0, selected: 0 })
        autocomplete.elementReferences[-1] = 'input element'
        autocomplete.handleKeyDown({ target: 'not the input element', keyCode: 4242 })
        expect(autocomplete.state.focused).to.equal(0)
        expect(autocomplete.state.selected).to.equal(0)
      })
    })

    describe('derived state', () => {
      it('initially assumes no valid choice on each new input', () => {
        autocomplete.handleInputChange({ target: { value: 'F' } })
        expect(autocomplete.state.validChoiceMade).to.equal(false)
      })

      describe('identifies that the user has made a valid choice', () => {
        it('when an option is actively clicked', () => {
          autocomplete.setState({ query: 'f', options: ['France'], validChoiceMade: false })
          autocomplete.handleOptionClick({}, 0)
          expect(autocomplete.state.validChoiceMade).to.equal(true)
        })

        it('when the input is blurred, autoselect is disabled, and the current query exactly matches an option', () => {
          autocomplete.setState({ query: 'France', options: ['France'], validChoiceMade: false })
          autocomplete.handleComponentBlur({})
          expect(autocomplete.state.validChoiceMade).to.equal(true)
        })

        it('when in the same scenario, but the match differs only by case sensitivity', () => {
          autocomplete.setState({ query: 'fraNCe', options: ['France'], validChoiceMade: false })
          autocomplete.handleComponentBlur({})
          expect(autocomplete.state.validChoiceMade).to.equal(true)
        })

        it('when the input is blurred, autoselect is enabled, and the current query results in at least one option', () => {
          autoselectAutocomplete.setState({ options: ['France'], validChoiceMade: false })
          autoselectAutocomplete.handleInputChange({ target: { value: 'France' } })
          autoselectAutocomplete.handleComponentBlur({})
          expect(autoselectAutocomplete.state.validChoiceMade).to.equal(true)
        })
      })

      describe('identifies that the user has not made a valid choice', () => {
        it('when the input is blurred, autoselect is disabled, and the current query does not match an option', () => {
          autocomplete.setState({ query: 'Fracne', options: ['France'], validChoiceMade: false })
          autocomplete.handleComponentBlur({})
          expect(autocomplete.state.validChoiceMade).to.equal(false)
        })

        it('when the input is blurred, autoselect is enabled, but no options exist for the current query', () => {
          autoselectAutocomplete.setState({ options: [], validChoiceMade: false })
          autoselectAutocomplete.handleInputChange({ target: { value: 'gpvx' } })
          autoselectAutocomplete.handleComponentBlur({})
          expect(autoselectAutocomplete.state.validChoiceMade).to.equal(false)
        })
      })

      describe('identifies that the valid choice situation has changed', () => {
        it('when the user amends a previously matched query such that it no longer matches an option', () => {
          autocomplete.setState({ query: 'France', options: ['France'], validChoiceMade: false })
          autocomplete.handleComponentBlur({})
          expect(autocomplete.state.validChoiceMade).to.equal(true)
          autocomplete.handleInputChange({ target: { value: 'Francey' } })
          autocomplete.handleComponentBlur({})
          expect(autocomplete.state.validChoiceMade).to.equal(false)
          autocomplete.handleInputChange({ target: { value: 'France' } })
          autocomplete.handleComponentBlur({})
          expect(autocomplete.state.validChoiceMade).to.equal(true)
          autocomplete.handleInputChange({ target: { value: 'Franc' } })
          autocomplete.handleComponentBlur({})
          expect(autocomplete.state.validChoiceMade).to.equal(false)
        })
      })
    })
  })
})

describe('Status', () => {
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

    it('renders a pair of aria live regions', () => {
      render(<Status />, scratch)
      expect(scratch.innerHTML).to.contain('div')

      let wrapperElement = scratch.getElementsByTagName('div')[0]
      let ariaLiveA = wrapperElement.getElementsByTagName('div')[0]
      let ariaLiveB = wrapperElement.getElementsByTagName('div')[1]

      expect(ariaLiveA.getAttribute('role')).to.equal('status', 'first aria live region should be marked as role=status')
      expect(ariaLiveA.getAttribute('aria-atomic')).to.equal('true', 'first aria live region should be marked as atomic')
      expect(ariaLiveA.getAttribute('aria-live')).to.equal('polite', 'first aria live region should be marked as polite')
      expect(ariaLiveB.getAttribute('role')).to.equal('status', 'second aria live region should be marked as role=status')
      expect(ariaLiveB.getAttribute('aria-atomic')).to.equal('true', 'second aria live region should be marked as atomic')
      expect(ariaLiveB.getAttribute('aria-live')).to.equal('polite', 'second aria live region should be marked as polite')
    })

    describe('behaviour', () => {
      describe('silences aria live announcement', () => {
        it('when a valid choice has been made and the input has focus', (done) => {
          let status = new Status({
            ...Status.defaultProps,
            validChoiceMade: true,
            isInFocus: true
          })
          status.componentWillMount()
          status.render()

          setTimeout(() => {
            expect(status.state.silenced).to.equal(true)
            done()
          }, 1500)
        })

        it('when the input no longer has focus', (done) => {
          let status = new Status({
            ...Status.defaultProps,
            validChoiceMade: false,
            isInFocus: false
          })
          status.componentWillMount()
          status.render()

          setTimeout(() => {
            expect(status.state.silenced).to.equal(true)
            done()
          }, 1500)
        })
      })
      describe('does not silence aria live announcement', () => {
        it('when a valid choice has not been made and the input has focus', (done) => {
          let status = new Status({
            ...Status.defaultProps,
            validChoiceMade: false,
            isInFocus: true
          })
          status.componentWillMount()
          status.render()

          setTimeout(() => {
            expect(status.state.silenced).to.equal(false)
            done()
          }, 1500)
        })
      })
    })
  })
})
