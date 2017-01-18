import { h, render } from 'preact' // eslint-disable-line
import Typeahead from './typeahead'

if (window) {
  window.AccessibleTypeahead = function ({
    element,
    id,
    source
  }) {
    render(
      <Typeahead
        id={id}
        source={source}
      />,
      element
    )
  }
}
