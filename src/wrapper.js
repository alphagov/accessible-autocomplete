import { h, render } from 'preact' /** @jsx h */
import Autocomplete from './autocomplete'

function accessibleAutocomplete (opts) {
  if (!opts.element) {
    throw new Error('element is not defined')
  }
  if (!opts.source) {
    throw new Error('source is not defined')
  }
  render(<Autocomplete {...opts} />, opts.element)
}

const createSimpleEngine = results => (query, syncResults) => {
  const filteredResults = query
    ? results.filter(r => r.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    : []
  syncResults(filteredResults)
}

accessibleAutocomplete.enhanceSelectElement = (opts) => {
  if (!opts.selectElement) {
    throw new Error('selectElement is not defined')
  }
  // Set defaults.
  if (!opts.source) {
    const availableOptions = Array.prototype.map.call(opts.selectElement.options, o => o.innerHTML)
    opts.source = createSimpleEngine(availableOptions)
  }
  opts.onConfirm = opts.onConfirm || (query => {
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

  accessibleAutocomplete({
    ...opts,
    element: element
  })

  opts.selectElement.style.display = 'none'
  opts.selectElement.id = opts.selectElement.id + '-select'
}

module.exports = accessibleAutocomplete
