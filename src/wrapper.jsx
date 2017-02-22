import { h, render } from 'preact' /** @jsx h */
import Typeahead from './typeahead'

if (window) {
  window.AccessibleTypeahead = function ({
    cssNamespace,
    element,
    id,
    minLength,
    name,
    source,
    verbosity
  }) {
    render(
      <Typeahead
        cssNamespace={cssNamespace}
        id={id}
        minLength={minLength}
        name={name}
        source={source}
        verbosity={verbosity}
      />,
      element
    )
  }
}
