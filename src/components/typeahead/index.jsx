import { h, Component } from 'preact'
import PropTypes from 'proptypes'

function serialize (str) {
  return str.replace(/\W/, '-')
}

export default class Typeahead extends Component {
  static propTypes = {
    id: PropTypes.string,
    source: PropTypes.func.isRequired
  }

  state = {
    options: [],
    query: ''
  }

  constructor (props) {
    super(props)

    this.handleQueryChange = this.handleQueryChange.bind(this)
  }

  handleQueryChange (evt) {
    const query = evt.target.value
    this.props.source(query, (options) => {
      this.setState({ options, query })
    })
  }

  render ({ id = '' }, { options, query }) {
    return <div>
      <input
        aria-owns={ `${id}-typeahead__listbox` }
        id={ id }
        onInput={ this.handleQueryChange }
        role='combobox'
        type='text'
        value={ query }
      />
      <ul
        id={ `${id}-typeahead__listbox` }
        role='listbox'
      >
        { options.map(option =>
            <li
              id={ `${id}-typeahead__option--${serialize(option)}` }
              role='option'
              tabindex='-1'
            >
              { option }
            </li>
          )
        }
      </ul>
    </div>
  }
}
