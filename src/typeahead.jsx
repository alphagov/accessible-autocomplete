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
    displayMenu: 'inline',
    id: 'typeahead',
    minLength: 0,
    name: 'input-typeahead'
  }

  elementRefs = {}

  state = {
    focused: null,
    menuOpen: false,
    options: [],
    query: '',
    selected: null
  }

  constructor (props) {
    super(props)

    this.handleComponentBlur = this.handleComponentBlur.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleUpArrow = this.handleUpArrow.bind(this)
    this.handleDownArrow = this.handleDownArrow.bind(this)
    this.handleEnter = this.handleEnter.bind(this)

    this.handleOptionClick = this.handleOptionClick.bind(this)
    this.handleOptionFocusOut = this.handleOptionFocusOut.bind(this)
    this.handleOptionFocus = this.handleOptionFocus.bind(this)
    this.handleOptionMouseDown = this.handleOptionMouseDown.bind(this)

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

  handleComponentBlur (options) {
    this.setState({
      focused: null,
      menuOpen: !!(options && options.menuOpen),
      selected: null
    })
  }

  handleOptionFocusOut (evt, idx) {
    const { menuOpen, focused } = this.state
    const focusingOutsideComponent = evt.relatedTarget === null
    const focusingAnotherOption = focused !== idx
    const keepMenuOpen = menuOpen && isIosDevice()
    if (focusingOutsideComponent || !focusingAnotherOption) {
      this.handleComponentBlur({
        menuOpen: keepMenuOpen
      })
    }
  }

  handleInputBlur (evt) {
    const focusingAnOption = this.state.focused !== -1
    if (!focusingAnOption) {
      const keepMenuOpen = this.state.menuOpen && isIosDevice()
      this.handleComponentBlur({
        menuOpen: keepMenuOpen
      })
    }
  }

  handleInputChange (evt) {
    const { autoselect, minLength, source } = this.props
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
    } else if (queryEmpty) {
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

  handleOptionClick (evt, idx) {
    this.setState({
      focused: -1,
      menuOpen: false,
      query: this.state.options[idx],
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
    evt.preventDefault()
    const hasSelectedOption = this.state.selected >= 0

    if (this.state.menuOpen && hasSelectedOption) {
      this.handleOptionClick(evt, this.state.selected)
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
        this.handleComponentBlur(evt)
        break
      default:
        break
    }
  }

  render () {
    const { autoselect, cssNamespace, displayMenu, id, minLength, name } = this.props
    const { focused, menuOpen, options, query, selected } = this.state

    const inputFocused = focused === -1
    const noOptionsAvailable = options.length === 0
    const queryNotEmpty = query.length !== 0
    const queryLongEnough = query.length >= minLength
    const showNoOptionsFound = inputFocused && noOptionsAvailable && queryNotEmpty && queryLongEnough

    const Wrapper = ({ children }) =>
      <div
        className={`${cssNamespace}__wrapper`}
        onKeyDown={this.handleKeyDown}
      >
        { children }
      </div>

    const Hint = () => {
      const selectedOption = options[selected]
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

    const Option = ({ children, idx }) => {
      const cn = `${cssNamespace}__option`
      const cnModFocused = (focused === idx || selected === idx) ? ` ${cn}--focused` : ''
      const cnModOdd = (idx % 2) ? ` ${cn}--odd` : ''
      const cns = `${cn}${cnModFocused}${cnModOdd}`
      return <li
        aria-selected={focused === idx}
        className={cns}
        id={`${id}__option--${idx}`}
        onClick={(evt) => this.handleOptionClick(evt, idx)}
        onFocusOut={(evt) => this.handleOptionFocusOut(evt, idx)}
        onMouseDown={this.handleOptionMouseDown}
        onMouseMove={() => this.handleOptionFocus(idx)}
        role='option'
        tabindex='-1'
      >
        { children }
      </li>
    }

    return (
      <Wrapper>
        <Hint />
        <Input
          ref={(inputEl) => { this.elementRefs[-1] = inputEl }}
        />
        <Menu>
          {options.map((optionText, idx) =>
            <Option
              idx={idx}
              ref={(optionEl) => { this.elementRefs[idx] = optionEl }}
            >
              { optionText }
            </Option>
          )}
          {showNoOptionsFound && <NoOptionsFound />}
        </Menu>
        <Status
          length={options.length}
          queryLength={query.length}
          minQueryLength={minLength}
          selectedOption={options[selected]}
        />
      </Wrapper>
    )
  }
}
