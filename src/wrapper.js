import { h, render } from 'preact' /** @jsx h */
import Typeahead from './typeahead'

function accessibleTypeahead (opts) {
  render(<Typeahead {...opts} />, opts.element)
}

const createSimpleEngine = results => (query, syncResults) => {
  const filteredResults = query
    ? results.filter(r => r.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    : []
  syncResults(filteredResults)
}

accessibleTypeahead.enhanceSelectElement = (opts) => {
  // Set defaults.
  if (!opts.source) {
    const availableOptions = Array.prototype.map.call(opts.selectElement.options, o => o.innerHTML)
    opts.source = createSimpleEngine(availableOptions)
  }
  opts.onSelect = opts.onSelect || (query => {
    const requestedOption = Array.prototype.filter.call(opts.selectElement.options, o => o.innerHTML === query)[0]
    if (requestedOption) { requestedOption.selected = true }
  })
  opts.name = opts.name || opts.selectElement.name || ''
  opts.id = opts.id || opts.selectElement.id || ''

  const element = document.createElement('span')
  opts.selectElement.insertAdjacentElement('afterend', element)

  accessibleTypeahead({
    ...opts,
    element: element
  })

  opts.selectElement.style.display = 'none'
  opts.selectElement.id = opts.selectElement.id + '-select'
}

module.exports = accessibleTypeahead
