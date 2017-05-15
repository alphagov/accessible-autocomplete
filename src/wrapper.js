import { h, render } from 'preact' /** @jsx h */
import Autocomplete from './autocomplete'

function accessibleAutocomplete (opts) {
  if (!opts.element) { throw new Error('element is not defined') }
  if (!opts.id) { throw new Error('id is not defined') }
  if (!opts.source) { throw new Error('source is not defined') }

  render(<Autocomplete {...opts} />, opts.element)
}

const createSimpleEngine = results => (query, syncResults) => {
  const filteredResults = query
    ? results.filter(r => r.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    : []
  syncResults(filteredResults)
}

accessibleAutocomplete.enhanceSelectElement = (opts) => {
  if (!opts.selectElement) { throw new Error('selectElement is not defined') }

  // Set defaults.
  if (!opts.source) {
    let availableOptions = [].filter.call(opts.selectElement.options, o => (o.value || opts.preserveNullOptions))
    availableOptions = availableOptions.map(o => o.innerHTML)
    opts.source = createSimpleEngine(availableOptions)
  }
  opts.onConfirm = opts.onConfirm || (query => {
    const requestedOption = [].filter.call(opts.selectElement.options, o => o.innerHTML === query)[0]
    if (requestedOption) { requestedOption.selected = true }
  })

  if (opts.selectElement.value || opts.defaultValue === undefined) {
    opts.defaultValue = opts.selectElement.options[opts.selectElement.options.selectedIndex].innerHTML
  }

  opts.name = opts.name || ''
  opts.id = opts.id || opts.selectElement.id || ''
  opts.autoselect = opts.autoselect || true

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
