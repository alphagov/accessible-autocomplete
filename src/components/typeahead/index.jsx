import { h, Component } from 'preact'
import PropTypes from 'proptypes'
import Status from './status'

const kc = {
  13: 'enter',
  38: 'up',
  40: 'down'
}

let elementRefs = {}

export default class Typeahead extends Component {
  static propTypes = {
    id: PropTypes.string,
    source: PropTypes.func.isRequired
  }

  state = {
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
    this.handleFocus = this.handleFocus.bind(this)
    this.handleOptionClick = this.handleOptionClick.bind(this)
  }

  handleQueryChange (evt) {
    const query = evt.target.value
    this.props.source(query, (options) => {
      this.setState({
        options,
        query,
        selected: -1
      })
    })
  }

  handleOptionClick (evt, idx) {
    this.handleSelect(evt, idx)
  }

  handleSelect (evt, idx = this.state.selected) {
    this.setState({
      query: this.state.options[idx]
    }, () => this.handleFocus(-1))
  }

  handleFocus (selectedIdx) {
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
      this.handleFocus(selected - 1)
    }
  }

  handleDownArrow (evt) {
    evt.preventDefault()
    const selected = this.state.selected
    const isNotAtBottom = selected !== this.state.options.length - 1
    if (isNotAtBottom) {
      this.handleFocus(selected + 1)
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
        this.handleSelect(evt)
        break
      default:
        break
    }
  }

  render ({ id = '' }, { options, query, selected }) {
    return <div
      onKeyDown={ this.handleKeyDown }
      style={{
        'display': 'inline-block',
        'position': 'relative',
        'width': '100%'
      }}
    >
      <input
        aria-activedescendant={ selected ? `${id}-typeahead__option--${selected}` : '' }
        aria-expanded={ options.length > 0 }
        aria-owns={ `${id}-typeahead__listbox` }
        className='form-control'
        id={ id }
        onInput={ this.handleQueryChange }
        ref={ inputEl => { elementRefs[-1] = inputEl }}
        role='combobox'
        style={{
          'position': 'relative',
          'verticalAlign': 'top'
        }}
        type='text'
        value={ query }
      />
      <ul
        className='tt-menu'
        id={ `${id}-typeahead__listbox` }
        role='listbox'
        style={{
          'display': (options.length) ? 'block' : 'none',
          'left': '0px',
          'position': 'absolute',
          'top': '100%',
          'width': '100%',
          'zIndex': '100'
        }}
      >
        { options.map((option, idx) =>
            <li
              className='tt-suggestion'
              id={ `${id}-typeahead__option--${idx}` }
              onClick={ (evt) => this.handleOptionClick(evt, idx) }
              ref={ optionEl => { elementRefs[idx] = optionEl }}
              role='option'
              tabindex='-1'
            >
              { option }
            </li>
          )
        }
      </ul>
      <Status length={ options.length } />
    </div>
  }
}
