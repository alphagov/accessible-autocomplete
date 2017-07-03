import { createElement, Component } from 'preact' /** @jsx createElement */
import Status from './status'

const IS_PREACT = process.env.COMPONENT_LIBRARY === 'PREACT'
const IS_REACT = process.env.COMPONENT_LIBRARY === 'REACT'

const keyCodes = {
  13: 'enter',
  27: 'escape',
  38: 'up',
  40: 'down'
}

// Based on https://github.com/ausi/Feature-detection-technique-for-pointer-events
const hasPointerEvents = (() => {
  const element = document.createElement('x')
  element.style.cssText = 'pointer-events:auto'
  return element.style.pointerEvents === 'auto'
})()

function isIosDevice () {
  return !!(navigator.userAgent.match(/(iPod|iPhone|iPad)/g) && navigator.userAgent.match(/AppleWebKit/g))
}

function isPrintableKeyCode (keyCode) {
  return (
    (keyCode > 47 && keyCode < 58) ||   // number keys
    keyCode === 32 || keyCode === 8 ||  // spacebar or backspace
    (keyCode > 64 && keyCode < 91) ||   // letter keys
    (keyCode > 95 && keyCode < 112) ||  // numpad keys
    (keyCode > 185 && keyCode < 193) || // ;=,-./` (in order)
    (keyCode > 218 && keyCode < 223)    // [\]' (in order)
  )
}

// Preact does not implement onChange on inputs, but React does.
function onChangeCrossLibrary (handler) {
  if (IS_PREACT) { return { onInput: handler } }
  if (IS_REACT) { return { onChange: handler } }
}

export default class Autocomplete extends Component {
  static defaultProps = {
    autoselect: false,
    cssNamespace: 'autocomplete',
    defaultValue: '',
    displayMenu: 'inline',
    minLength: 0,
    name: 'input-autocomplete',
    placeholder: '',
    onConfirm: () => {},
    confirmOnBlur: true,
    showNoOptionsFound: true,
    required: false
  }

  elementRefs = {}

  constructor (props) {
    super(props)

    this.state = {
      focused: null,
      hovered: null,
      menuOpen: false,
      options: props.defaultValue ? [props.defaultValue] : [],
      query: props.defaultValue,
      selected: null
    }

    this.handleComponentBlur = this.handleComponentBlur.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleUpArrow = this.handleUpArrow.bind(this)
    this.handleDownArrow = this.handleDownArrow.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
    this.handlePrintableKey = this.handlePrintableKey.bind(this)

    this.handleOptionBlur = this.handleOptionBlur.bind(this)
    this.handleOptionClick = this.handleOptionClick.bind(this)
    this.handleOptionFocus = this.handleOptionFocus.bind(this)
    this.handleOptionMouseDown = this.handleOptionMouseDown.bind(this)
    this.handleOptionMouseEnter = this.handleOptionMouseEnter.bind(this)
    this.handleOptionMouseOut = this.handleOptionMouseOut.bind(this)
    this.handleOptionTouchEnd = this.handleOptionTouchEnd.bind(this)

    this.handleInputBlur = this.handleInputBlur.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInputFocus = this.handleInputFocus.bind(this)

    this.pollInputElement = this.pollInputElement.bind(this)
    this.getDirectInputChanges = this.getDirectInputChanges.bind(this)
  }

  componentDidMount () {
    this.pollInputElement()
  }

  componentWillUnmount () {
    clearTimeout(this.$pollInput)
  }

  // Applications like Dragon NaturallySpeaking will modify the
  // `input` field by directly changing its `.value`. These events
  // don't trigger our JavaScript event listeners, so we need to poll
  // to handle when and if they occur.
  pollInputElement () {
    this.getDirectInputChanges()
    this.$pollInput = setTimeout(() => {
      this.pollInputElement()
    }, 100)
  }

  getDirectInputChanges () {
    const inputRef = this.elementRefs[-1]
    const queryHasChanged = inputRef.value !== this.state.query
    if (queryHasChanged) {
      this.handleInputChange({ target: { value: inputRef.value } })
    }
  }

  componentDidUpdate (prevProps, prevState) {
    const { focused } = this.state
    const componentLostFocus = focused === null
    const focusedChanged = prevState.focused !== focused
    const focusDifferentElement = focusedChanged && !componentLostFocus
    if (focusDifferentElement) {
      this.elementRefs[focused].focus()
    }
    const focusedInput = focused === -1
    const componentGainedFocus = focusedChanged && prevState.focused === null
    const selectAllText = focusedInput && componentGainedFocus
    if (selectAllText) {
      const inputEl = this.elementRefs[focused]
      inputEl.setSelectionRange(0, inputEl.value.length)
    }
  }

  hasAutoselect () {
    return isIosDevice() ? false : this.props.autoselect
  }

  // This template is used when converting from a state.options object into a state.query.
  templateInputValue (value) {
    const inputValueTemplate = this.props.templates && this.props.templates.inputValue
    return inputValueTemplate ? inputValueTemplate(value) : value
  }

  // This template is used when displaying results / suggestions.
  templateSuggestion (value) {
    const suggestionTemplate = this.props.templates && this.props.templates.suggestion
    return suggestionTemplate ? suggestionTemplate(value) : value
  }

  handleComponentBlur (newState) {
    const { options, query, selected } = this.state
    let newQuery
    if (this.props.confirmOnBlur) {
      newQuery = newState.query || query
      this.props.onConfirm(options[selected])
    } else {
      newQuery = query
    }
    this.setState({
      focused: null,
      menuOpen: newState.menuOpen || false,
      query: newQuery,
      selected: null
    })
  }

  handleOptionBlur (evt, idx) {
    const { focused, menuOpen, options, selected } = this.state
    const focusingOutsideComponent = evt.relatedTarget === null
    const focusingInput = evt.relatedTarget === this.elementRefs[-1]
    const focusingAnotherOption = focused !== idx && focused !== -1
    const blurComponent = focusingOutsideComponent || !(focusingAnotherOption || focusingInput)
    if (blurComponent) {
      const keepMenuOpen = menuOpen && isIosDevice()
      this.handleComponentBlur({
        menuOpen: keepMenuOpen,
        query: this.templateInputValue(options[selected])
      })
    }
  }

  handleInputBlur (evt) {
    const { focused, menuOpen, options, query, selected } = this.state
    const focusingAnOption = focused !== -1
    if (!focusingAnOption) {
      const keepMenuOpen = menuOpen && isIosDevice()
      const newQuery = isIosDevice() ? query : this.templateInputValue(options[selected])
      this.handleComponentBlur({
        menuOpen: keepMenuOpen,
        query: newQuery
      })
    }
  }

  handleInputChange (evt) {
    const { minLength, source } = this.props
    const autoselect = this.hasAutoselect()
    const query = evt.target.value
    const queryEmpty = query.length === 0
    const queryChanged = this.state.query.length !== query.length
    const queryLongEnough = query.length >= minLength

    this.setState({ query })

    const searchForOptions = !queryEmpty && queryChanged && queryLongEnough
    if (searchForOptions) {
      source(query, (options) => {
        const optionsAvailable = options.length > 0
        this.setState({
          menuOpen: optionsAvailable,
          options,
          selected: (autoselect && optionsAvailable) ? 0 : -1
        })
      })
    } else if (queryEmpty || !queryLongEnough) {
      this.setState({
        menuOpen: false,
        options: []
      })
    }
  }

  handleInputFocus (evt) {
    this.setState({
      focused: -1
    })
  }

  handleOptionFocus (idx) {
    this.setState({
      focused: idx,
      hovered: null,
      selected: idx
    })
  }

  handleOptionMouseEnter (evt, idx) {
    this.setState({
      hovered: idx
    })
  }

  handleOptionMouseOut (evt, idx) {
    this.setState({
      hovered: null
    })
  }

  handleOptionTouchEnd (evt, idx) {
    this.handleOptionClick(evt, idx)
  }

  handleOptionClick (evt, idx) {
    const selectedOption = this.state.options[idx]
    const newQuery = this.templateInputValue(selectedOption)
    this.props.onConfirm(selectedOption)
    this.setState({
      focused: -1,
      menuOpen: false,
      query: newQuery,
      selected: -1
    })
  }

  handleOptionMouseDown (evt) {
    // Safari triggers focusOut before click, but if you
    // preventDefault on mouseDown, you can stop that from happening.
    // If this is removed, clicking on an option in Safari will trigger
    // `handleOptionBlur`, which closes the menu, and the click will
    // trigger on the element underneath instead.
    // See: http://stackoverflow.com/questions/7621711/how-to-prevent-blur-running-when-clicking-a-link-in-jquery
    evt.preventDefault()
  }

  handleUpArrow (evt) {
    evt.preventDefault()
    const { menuOpen, selected } = this.state
    const isNotAtTop = selected !== -1
    const allowMoveUp = isNotAtTop && menuOpen
    if (allowMoveUp) {
      this.handleOptionFocus(selected - 1)
    }
  }

  handleDownArrow (evt) {
    evt.preventDefault()
    const { menuOpen, options, selected } = this.state
    const isNotAtBottom = selected !== options.length - 1
    const allowMoveDown = isNotAtBottom && menuOpen
    if (allowMoveDown) {
      this.handleOptionFocus(selected + 1)
    }
  }

  handleEnter (evt) {
    if (this.state.menuOpen) {
      evt.preventDefault()
      const hasSelectedOption = this.state.selected >= 0
      if (hasSelectedOption) {
        this.handleOptionClick(evt, this.state.selected)
      }
    }
  }

  handlePrintableKey (evt) {
    const inputEl = this.elementRefs[-1]
    const eventIsOnInput = evt.target === inputEl
    if (!eventIsOnInput) {
      // FIXME: This would be better if it was in componentDidUpdate,
      // but using setState to trigger that seems to not work correctly
      // in preact@8.1.0.
      inputEl.focus()
    }
  }

  handleKeyDown (evt) {
    switch (keyCodes[evt.keyCode]) {
      case 'up':
        this.handleUpArrow(evt)
        break
      case 'down':
        this.handleDownArrow(evt)
        break
      case 'enter':
        this.handleEnter(evt)
        break
      case 'escape':
        this.handleComponentBlur({
          query: this.state.query
        })
        break
      default:
        if (isPrintableKeyCode(evt.keyCode)) {
          this.handlePrintableKey(evt)
        }
        break
    }
  }

  render () {
    const { cssNamespace, displayMenu, id, minLength, name, placeholder, required } = this.props
    const { focused, hovered, menuOpen, options, query, selected } = this.state
    const autoselect = this.hasAutoselect()

    const inputFocused = focused === -1
    const noOptionsAvailable = options.length === 0
    const queryNotEmpty = query.length !== 0
    const queryLongEnough = query.length >= minLength
    const showNoOptionsFound = this.props.showNoOptionsFound &&
      inputFocused && noOptionsAvailable && queryNotEmpty && queryLongEnough

    const wrapperClassName = `${cssNamespace}__wrapper`

    const inputClassName = `${cssNamespace}__input`
    const componentIsFocused = focused !== null
    const inputModFocused = componentIsFocused ? ` ${inputClassName}--focused` : ''
    const optionFocused = focused !== -1 && focused !== null

    const menuClassName = `${cssNamespace}__menu`
    const menuModDisplayMenu = `${menuClassName}--${displayMenu}`
    const menuIsVisible = menuOpen || showNoOptionsFound
    const menuModVisibility = `${menuClassName}--${(menuIsVisible) ? 'visible' : 'hidden'}`

    const optionClassName = `${cssNamespace}__option`

    const hintClassName = `${cssNamespace}__hint`
    const selectedOptionText = this.templateInputValue(options[selected])
    const optionBeginsWithQuery = selectedOptionText &&
      selectedOptionText.toLowerCase().indexOf(query.toLowerCase()) === 0
    const hintValue = (optionBeginsWithQuery && autoselect)
      ? query + selectedOptionText.substr(query.length)
      : ''
    const showHint = hasPointerEvents && hintValue

    return (
      <div className={wrapperClassName} onKeyDown={this.handleKeyDown}>
        <Status
          length={options.length}
          queryLength={query.length}
          minQueryLength={minLength}
          selectedOption={this.templateInputValue(options[selected])}
        />

        {showHint && (
          <span><input className={hintClassName} readonly tabIndex='-1' value={hintValue} /></span>
        )}

        <input
          aria-activedescendant={optionFocused ? `${id}__option--${focused}` : false}
          aria-expanded={menuOpen}
          aria-owns={`${id}__listbox`}
          autoComplete='off'
          className={`${inputClassName}${inputModFocused}`}
          id={id}
          onBlur={this.handleInputBlur}
          {...onChangeCrossLibrary(this.handleInputChange)}
          onFocus={this.handleInputFocus}
          name={name}
          placeholder={placeholder}
          ref={(inputEl) => { this.elementRefs[-1] = inputEl }}
          role='combobox'
          type='text'
          required={required}
          value={query}
        />

        <ul
          className={`${menuClassName} ${menuModDisplayMenu} ${menuModVisibility}`}
          id={`${id}__listbox`}
          role='listbox'
        >
          {options.map((opt, idx) => {
            const showFocused = focused === -1 ? selected === idx : focused === idx
            const optionModFocused = showFocused && hovered === null ? ` ${optionClassName}--focused` : ''
            const optionModOdd = (idx % 2) ? ` ${optionClassName}--odd` : ''

            return (
              <li
                aria-selected={focused === idx}
                className={`${optionClassName}${optionModFocused}${optionModOdd}`}
                dangerouslySetInnerHTML={{ __html: this.templateSuggestion(opt) }}
                id={`${id}__option--${idx}`}
                key={idx}
                onBlur={(evt) => this.handleOptionBlur(evt, idx)}
                onClick={(evt) => this.handleOptionClick(evt, idx)}
                onMouseDown={this.handleOptionMouseDown}
                onMouseEnter={(evt) => this.handleOptionMouseEnter(evt, idx)}
                onMouseOut={(evt) => this.handleOptionMouseOut(evt, idx)}
                onTouchEnd={(evt) => this.handleOptionTouchEnd(evt, idx)}
                ref={(optionEl) => { this.elementRefs[idx] = optionEl }}
                role='option'
                tabIndex='-1'
              />
            )
          })}

          {showNoOptionsFound && (
            <li className={`${optionClassName} ${optionClassName}--no-results`}>No results found</li>
          )}
        </ul>
      </div>
    )
  }
}
