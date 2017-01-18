import { h, render } from 'preact' /** @jsx h */
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
