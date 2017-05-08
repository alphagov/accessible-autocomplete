import { h, render } from 'preact' /** @jsx h */
import Typeahead from './typeahead'

function AccessibleTypeahead ({
  autoselect,
  cssNamespace,
  defaultValue,
  displayMenu,
  element,
  id,
  minLength,
  name,
  onSelect,
  placeholder,
  selectOnBlur,
  showNoOptionsFound,
  source,
  templates
}) {
  render(
    <Typeahead
      autoselect={autoselect}
      cssNamespace={cssNamespace}
      defaultValue={defaultValue}
      displayMenu={displayMenu}
      id={id}
      minLength={minLength}
      name={name}
      onSelect={onSelect}
      placeholder={placeholder}
      selectOnBlur={selectOnBlur}
      showNoOptionsFound={showNoOptionsFound}
      source={source}
      templates={templates}
    />,
    element
  )
}

const createSimpleEngine = results => (query, syncResults) => {
  const filteredResults = query
    ? results.filter(r => r.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    : []
  syncResults(filteredResults)
}

AccessibleTypeahead.enhanceSelectElement = (opts) => {
  // Set defaults.
  if (!opts.source) {
    const availableOptions = Array.prototype.map.call(opts.selectElement.options, o => o.innerHTML)
    opts.source = createSimpleEngine(availableOptions)
  }
  opts.onSelect = opts.onSelect || (query => {
    const requestedOption = Array.prototype.filter.call(opts.selectElement.options, o => o.innerHTML === query)[0]
    if (requestedOption) { requestedOption.selected = true }
  })
  if (!opts.defaultValue) {
    opts.defaultValue = opts.selectElement.options[opts.selectElement.options.selectedIndex].innerHTML
  } else {
    opts.selectElement.value = opts.defaultValue
  }
  opts.name = opts.name || opts.selectElement.name || ''
  opts.id = opts.id || opts.selectElement.id || ''

  const element = document.createElement('span')
  opts.selectElement.insertAdjacentElement('afterend', element)

  AccessibleTypeahead({
    ...opts,
    element: element
  })

  opts.selectElement.style.display = 'none'
  opts.selectElement.id = opts.selectElement.id + '-select'
}

module.exports = AccessibleTypeahead
