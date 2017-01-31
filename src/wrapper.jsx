import { h, render } from 'preact' /** @jsx h */
import Typeahead from './typeahead'

if (window) {
  window.AccessibleTypeahead = function ({
    cssNamespace,
    element,
    id,
    name,
    source
  }) {
    render(
      <Typeahead
        cssNamespace={cssNamespace}
        id={id}
        name={name}
        source={source}
      />,
      element
    )
  }
}
