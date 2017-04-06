import { h, Component } from 'preact' /** @jsx h */
import Status from './status'

const kc = {
  13: 'enter',
  27: 'escape',
  38: 'up',
  40: 'down'
}

function isIosDevice () {
  return navigator.userAgent.match(/(iPod|iPhone|iPad)/g) && navigator.userAgent.match(/AppleWebKit/g)
}

export default class Typeahead extends Component {
  static defaultProps = {
    autoselect: false,
    cssNamespace: 'typeahead',
    defaultValue: '',
    displayMenu: 'inline',
    id: 'typeahead',
    minLength: 0,
    name: 'input-typeahead',
    placeholder: '',
    onSelect: () => {},
    selectOnBlur: true,
    showNoOptionsFound: true
  }

  elementRefs = {}

  constructor (props) {
    super(props)

    this.state = {
      focused: null,
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

    this.handleOptionClick = this.handleOptionClick.bind(this)
    this.handleOptionFocusOut = this.handleOptionFocusOut.bind(this)
    this.handleOptionFocus = this.handleOptionFocus.bind(this)
    this.handleOptionMouseDown = this.handleOptionMouseDown.bind(this)
    this.handleOptionMouseMove = this.handleOptionMouseMove.bind(this)
    this.handleOptionMouseOut = this.handleOptionMouseOut.bind(this)

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
    if (this.props.selectOnBlur) {
      newQuery = newState.query || query
      this.props.onSelect(options[selected])
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

  handleOptionFocusOut (evt, idx) {
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
      focused: -1,
      selected: -1
    })
  }

  handleOptionFocus (idx) {
    this.setState({
      focused: idx,
      selected: idx
    })
  }

  handleOptionMouseMove (idx) {
    this.setState({
      focused: idx
    })
  }

  handleOptionMouseOut (evt, idx) {
    const previousOption = this.elementRefs[idx - 1]
    const nextOption = this.elementRefs[idx + 1]
    const toElement = evt.toElement
    const movingToAnotherOption = toElement === previousOption || toElement === nextOption
    const focusBackOnSelectedOption = !movingToAnotherOption
    if (focusBackOnSelectedOption) {
      this.setState({
        focused: this.state.selected
      })
    }
  }

  handleOptionClick (evt, idx) {
    const selectedOption = this.state.options[idx]
    const newQuery = this.templateInputValue(selectedOption)
    this.props.onSelect(selectedOption)
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
    // `handleOptionFocusOut`, which closes the menu, and the click will
    // trigger on the element underneath instead.
    // See: http://stackoverflow.com/questions/7621711/how-to-prevent-blur-running-when-clicking-a-link-in-jquery
    evt.preventDefault()
  }

  handleUpArrow (evt) {
    evt.preventDefault()
    const { menuOpen, focused } = this.state
    const isNotAtTop = focused !== -1
    const allowMoveUp = isNotAtTop && menuOpen
    if (allowMoveUp) {
      this.handleOptionFocus(focused - 1)
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

  handleKeyDown (evt) {
    switch (kc[evt.keyCode]) {
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
        break
    }
  }

  render () {
    const { cssNamespace, displayMenu, id, minLength, name } = this.props
    const { focused, menuOpen, options, query, selected } = this.state
    const autoselect = this.hasAutoselect()

    const inputFocused = focused === -1
    const noOptionsAvailable = options.length === 0
    const queryNotEmpty = query.length !== 0
    const queryLongEnough = query.length >= minLength
    const showNoOptionsFound = this.props.showNoOptionsFound &&
      inputFocused && noOptionsAvailable && queryNotEmpty && queryLongEnough

    const Wrapper = ({ children }) =>
      <div
        className={`${cssNamespace}__wrapper`}
        onKeyDown={this.handleKeyDown}
      >
        { children }
      </div>

    const Hint = () => {
      const selectedOption = this.templateInputValue(options[selected])
      const optionBeginsWithQuery = selectedOption && selectedOption.toLowerCase().indexOf(query.toLowerCase()) === 0
      const hintValue = (optionBeginsWithQuery && autoselect)
        ? query + selectedOption.substr(query.length)
        : ''
      return <input
        className={`${cssNamespace}__hint`}
        readonly
        tabindex='-1'
        value={hintValue}
      />
    }

    const Input = () =>
      <input
        aria-activedescendant={focused !== -1 && focused !== null ? `${id}__option--${focused}` : false}
        aria-expanded={menuOpen}
        aria-owns={`${id}__listbox`}
        autocomplete='off'
        className={`${cssNamespace}__input`}
        id={id}
        name={name}
        onBlur={this.handleInputBlur}
        onFocus={this.handleInputFocus}
        onInput={this.handleInputChange}
        placeholder={this.props.placeholder}
        role='combobox'
        type='text'
        value={query}
      />

    const Menu = ({ children }) => {
      const cn = `${cssNamespace}__menu`
      const cnModDisplay = `${cn}--${(menuOpen || showNoOptionsFound) ? 'visible' : 'hidden'}`
      const cns = `${cn} ${cn}--${displayMenu} ${cnModDisplay}`
      return <ul
        className={cns}
        id={`${id}__listbox`}
        role='listbox'
      >
        { children }
      </ul>
    }

    const NoOptionsFound = () =>
      <li
        className={`${cssNamespace}__option ${cssNamespace}__option--no-results`}
      >
        No results found
      </li>

    const Option = ({ dangerouslySetInnerHTML, idx }) => {
      const cn = `${cssNamespace}__option`
      const showFocused = focused === -1 ? selected === idx : focused === idx
      const cnModFocused = showFocused ? ` ${cn}--focused` : ''
      const cnModOdd = (idx % 2) ? ` ${cn}--odd` : ''
      const cns = `${cn}${cnModFocused}${cnModOdd}`
      return <li
        aria-selected={focused === idx}
        className={cns}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        id={`${id}__option--${idx}`}
        onClick={(evt) => this.handleOptionClick(evt, idx)}
        onFocusOut={(evt) => this.handleOptionFocusOut(evt, idx)}
        onMouseDown={this.handleOptionMouseDown}
        onMouseMove={() => this.handleOptionMouseMove(idx)}
        onMouseOut={(evt) => this.handleOptionMouseOut(evt, idx)}
        role='option'
        tabindex='-1'
      />
    }

    return (
      <Wrapper>
        <Hint />
        <Input
          ref={(inputEl) => { this.elementRefs[-1] = inputEl }}
        />
        <Menu>
          {options.map((opt, idx) =>
            <Option
              dangerouslySetInnerHTML={{ __html: this.templateSuggestion(opt) }}
              idx={idx}
              ref={(optionEl) => { this.elementRefs[idx] = optionEl }}
            />
          )}
          {showNoOptionsFound && <NoOptionsFound />}
        </Menu>
        <Status
          length={options.length}
          queryLength={query.length}
          minQueryLength={minLength}
          selectedOption={this.templateInputValue(options[selected])}
        />
      </Wrapper>
    )
  }
}
