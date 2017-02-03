import { h, render } from 'preact' /** @jsx h */
import Typeahead from './typeahead'

if (window) {
  window.AccessibleTypeahead = function ({
    autoselect,
    cssNamespace,
    element,
    id,
    minLength,
    name,
    source
  }) {
    render(
      <Typeahead
        autoselect={autoselect}
        cssNamespace={cssNamespace}
        id={id}
        minLength={minLength}
        name={name}
        source={source}
      />,
      element
    )
  }
}
