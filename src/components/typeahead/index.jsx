import { h, Component } from 'preact'
import PropTypes from 'proptypes'

export default class Typeahead extends Component {
  static propTypes = {
    id: PropTypes.string
  }

  render ({ id }) {
    return (
      <input
        id={ id }
        type='text'
        role='combobox'
      />
    )
  }
}
