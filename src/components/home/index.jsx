import { h, Component } from 'preact'
import style from './style'
import Typeahead from '../typeahead'

function suggest (query, syncResults) {
  const results = [
    'United Kingdom',
    'Germany',
    'France'
  ]
  syncResults(query ? results : [])
}

export default class Home extends Component {
  render () {
    return (
      <div class={style.home}>
        <h1>Home</h1>
        <p>This is the Home component.</p>
        <label htmlFor='autocomplete'>Country</label>
        <div>
          <Typeahead
            id='autocomplete'
            source={ suggest }
          />
        </div>
      </div>
    )
  }
}
