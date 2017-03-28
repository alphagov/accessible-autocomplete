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
  source
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
      source={source}
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

AccessibleTypeahead.enhanceSelectElement = ({
  autoselect,
  cssNamespace,
  displayMenu,
  minLength,
  selectElement,
  source
}) => {
  if (!source) {
    const availableOptions = Array.prototype.map.call(selectElement.options, o => o.innerHTML)
    source = createSimpleEngine(availableOptions)
  }

  const selectedOption = Array.prototype.filter.call(selectElement.options, o => o.selected)[0]
  const defaultValue = selectedOption ? selectedOption.innerHTML : ''

  const name = ''

  const id = selectElement.id

  const element = document.createElement('span')
  selectElement.insertAdjacentElement('afterend', element)

  const onSelect = (query) => {
    const requestedOption = Array.prototype.filter.call(selectElement.options, o => o.innerHTML === query)[0]
    if (requestedOption) { requestedOption.selected = true }
  }

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
      source={source}
    />,
    element
  )

  selectElement.style.display = 'none'
  selectElement.id = selectElement.id + '-select'
}

if (window) {
  window.AccessibleTypeahead = AccessibleTypeahead
}
