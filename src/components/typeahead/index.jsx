import { h, Component } from 'preact'
import Status from './status'

const kc = {
  13: 'enter',
  38: 'up',
  40: 'down'
}

let elementRefs = {}

export default class Typeahead extends Component {
  state = {
    menuOpen: false,
    options: [],
    query: '',
    selected: -1
  }

  constructor (props) {
    super(props)

    this.handleQueryChange = this.handleQueryChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleUpArrow = this.handleUpArrow.bind(this)
    this.handleDownArrow = this.handleDownArrow.bind(this)
    this.handleOptionClick = this.handleOptionClick.bind(this)
    this.handleOptionFocus = this.handleOptionFocus.bind(this)
    this.handleOptionSelect = this.handleOptionSelect.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
    this.handleInputFocus = this.handleInputFocus.bind(this)
  }

  handleInputBlur (evt) {
    console.log('blur')
  }

  handleInputFocus (evt) {
    console.log('focus')
  }

  handleQueryChange (evt) {
    const { source } = this.props
    const query = evt.target.value
    source(query, (options) => {
      this.setState({
        menuOpen: true,
        options,
        query,
        selected: -1
      })
    })
  }

  handleOptionClick (evt, idx) {
    this.handleOptionSelect(evt, idx)
  }

  handleOptionSelect (evt, idx = this.state.selected) {
    this.setState({
      query: this.state.options[idx]
    }, () => this.handleOptionFocus(-1))
  }

  handleOptionFocus (selectedIdx) {
    this.setState({
      selected: selectedIdx
    })
    elementRefs[selectedIdx].focus()
  }

  handleUpArrow (evt) {
    evt.preventDefault()
    const selected = this.state.selected
    const isNotAtTop = selected !== -1
    if (isNotAtTop) {
      this.handleOptionFocus(selected - 1)
    }
  }

  handleDownArrow (evt) {
    evt.preventDefault()
    const selected = this.state.selected
    const isNotAtBottom = selected !== this.state.options.length - 1
    if (isNotAtBottom) {
      this.handleOptionFocus(selected + 1)
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
        this.handleOptionSelect(evt)
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
        onKeyDown={ this.handleKeyDown }
        style={{ 'position': 'relative' }}
      >
        { children }
      </div>

    const Input = () =>
      <input
        aria-activedescendant={ selected !== -1 ? `${id}__option--${selected}` : '' }
        aria-expanded={ options.length > 0 }
        aria-owns={ `${id}__listbox` }
        className='form-control'
        id={ id }
        onBlur={ this.handleInputBlur }
        onFocus={ this.handleInputFocus }
        onInput={ this.handleQueryChange }
        role='combobox'
        style={{ 'position': 'relative' }}
        type='text'
        value={ query }
      />

    const Menu = ({ children }) =>
      <ul
        className='tt-menu'
        id={ `${id}__listbox` }
        role='listbox'
        style={{
          'display': (menuOpen) ? 'block' : 'none',
          'left': '0',
          'position': 'absolute',
          'top': '100%',
          'width': '100%',
          'zIndex': '100'
        }}
      >
        { children }
      </ul>

    const Option = ({ children, idx }) =>
      <li
        className='tt-suggestion'
        id={ `${id}__option--${idx}` }
        onClick={ (evt) => this.handleOptionClick(evt, idx) }

        role='option'
        tabindex='-1'
      >
        { children }
      </li>

    return (
      <Wrapper>
        <Input
          ref={ (inputEl) => { elementRefs[-1] = inputEl }}
        />
        <Menu>
          {options.map((optionText, idx) =>
            <Option
              idx={ idx }
              ref={ (optionEl) => { elementRefs[idx] = optionEl }}
            >
              { optionText }
            </Option>
          )}
        </Menu>
        <Status length={ options.length } />
      </Wrapper>
    )
  }
}
