import { h, Component } from 'preact' /** @jsx h */
import Status from './status'

const kc = {
  13: 'enter',
  27: 'escape',
  38: 'up',
  40: 'down'
}

let elementRefs = {}

export default class Typeahead extends Component {
  state = {
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

    this.handleOptionBlur = this.handleOptionBlur.bind(this)
    this.handleOptionFocus = this.handleOptionFocus.bind(this)
    this.handleOptionSelect = this.handleOptionSelect.bind(this)

    this.handleInputBlur = this.handleInputBlur.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInputFocus = this.handleInputFocus.bind(this)
  }

  componentDidUpdate (prevProps, prevState) {
    const { source } = this.props
    const { query, selected } = this.state

    const queryEmpty = query.length === 0
    const queryChanged = prevState.query.length !== query.length
    const searchForOptions = !queryEmpty && queryChanged
    if (searchForOptions) {
      source(query, (options) => {
        this.setState({
          menuOpen: options.length > 0,
          options
        })
      })
    }

    const componentLostFocus = selected === null
    const selectedChanged = prevState.selected !== selected
    const focusDifferentElement = selectedChanged && !componentLostFocus
    if (focusDifferentElement) {
      elementRefs[selected].focus()
    }
  }

  handleComponentBlur () {
    this.setState({
      menuOpen: false,
      selected: null
    })
  }

  handleOptionBlur (evt, idx) {
    const { selected } = this.state
    // Safari triggers blur before click, so check if the target of the blur
    // is the currently hovered/focused element.
    const focusingOutsideComponent = evt.relatedTarget === null
    const selectingAnotherOption = selected !== idx
    if (focusingOutsideComponent || !selectingAnotherOption) {
      this.handleComponentBlur()
    }
  }

  handleInputBlur (evt) {
    const selectingAnOption = this.state.selected !== -1
    if (!selectingAnOption) {
      this.handleComponentBlur()
    }
  }

  handleInputChange (evt) {
    const query = evt.target.value
    this.setState({
      menuOpen: query.length > 0,
      query
    })
  }

  handleInputFocus (evt) {
    const componentWasNotFocused = this.state.selected === null
    const queryEmpty = this.state.query.length === 0
    const openTheMenu = componentWasNotFocused && !queryEmpty
    this.setState({
      menuOpen: openTheMenu,
      selected: -1
    })
  }

  handleOptionFocus (idx) {
    this.setState({ selected: idx })
  }

  handleOptionSelect (evt, idx = this.state.selected) {
    this.setState({
      menuOpen: false,
      query: this.state.options[idx],
      selected: -1
    })
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
    evt.preventDefault()
    this.handleOptionSelect(evt)
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
    const { id = 'typeahead' } = this.props
    const { menuOpen, options, query, selected } = this.state

    const Wrapper = ({ children }) =>
      <div
        onKeyDown={this.handleKeyDown}
        style={{ 'position': 'relative' }}
      >
        { children }
      </div>

    const Input = () =>
      <input
        aria-activedescendant={selected !== -1 ? `${id}__option--${selected}` : ''}
        aria-expanded={options.length > 0}
        aria-owns={`${id}__listbox`}
        className='form-control'
        id={id}
        onBlur={this.handleInputBlur}
        onFocus={this.handleInputFocus}
        onInput={this.handleInputChange}
        role='combobox'
        style={{ 'position': 'relative' }}
        type='text'
        value={query}
      />

    const Menu = ({ children }) =>
      <ul
        className='tt-menu'
        id={`${id}__listbox`}
        role='listbox'
        style={{
          'display': (menuOpen) ? 'block' : 'none',
          'left': '0',
          'position': 'absolute',
          'top': '100%',
          'zIndex': '100'
        }}
      >
        { children }
      </ul>

    const Option = ({ children, idx }) =>
      <li
        className='tt-suggestion'
        id={`${id}__option--${idx}`}
        onBlur={(evt) => this.handleOptionBlur(evt, idx)}
        onClick={(evt) => this.handleOptionSelect(evt, idx)}
        onMouseOver={() => this.handleOptionFocus(idx)}
        role='option'
        tabindex='-1'
      >
        { children }
      </li>

    return (
      <Wrapper>
        <Input
          ref={(inputEl) => { elementRefs[-1] = inputEl }}
        />
        <Menu>
          {options.map((optionText, idx) =>
            <Option
              idx={idx}
              ref={(optionEl) => { elementRefs[idx] = optionEl }}
            >
              { optionText }
            </Option>
          )}
        </Menu>
        <Status length={options.length} />
      </Wrapper>
    )
  }
}
