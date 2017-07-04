import { createElement, render } from 'preact' /** @jsx createElement */
import Autocomplete from './autocomplete'

function accessibleAutocomplete (opts) {
  if (!opts.element) { throw new Error('element is not defined') }
  if (!opts.id) { throw new Error('id is not defined') }
  if (!opts.source) { throw new Error('source is not defined') }
  if (Array.isArray(opts.source)) {
    opts.source = createSimpleEngine(opts.source)
  }
  render(<Autocomplete {...opts} />, opts.element)
}

const createSimpleEngine = (values) => (query, syncResults) => {
  var matches = values.filter(r => r.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  syncResults(matches)
}

accessibleAutocomplete.enhanceSelectElement = (opts) => {
  if (!opts.selectElement) { throw new Error('selectElement is not defined') }

  // Set defaults.
  if (!opts.source) {
    let availableOptions = [].filter.call(opts.selectElement.options, o => (o.value || opts.preserveNullOptions))
    opts.source = availableOptions.map(o => o.textContent || o.innerText)
  }
  opts.onConfirm = opts.onConfirm || (query => {
    const requestedOption = [].filter.call(opts.selectElement.options, o => (o.textContent || o.innerText) === query)[0]
    if (requestedOption) { requestedOption.selected = true }
  })

  if (opts.selectElement.value || opts.defaultValue === undefined) {
    const o = opts.selectElement.options[opts.selectElement.options.selectedIndex]
    opts.defaultValue = o.textContent || o.innerText
  }

  if (opts.name === undefined) opts.name = ''
  if (opts.id === undefined) {
    if (opts.selectElement.id === undefined) {
      opts.id = ''
    } else {
      opts.id = opts.selectElement.id
    }
  }
  if (opts.autoselect === undefined) opts.autoselect = true

  const element = document.createElement('span')

  opts.selectElement.parentNode.insertBefore(element, opts.selectElement)

  accessibleAutocomplete({
    ...opts,
    element: element
  })

  opts.selectElement.style.display = 'none'
  opts.selectElement.id = opts.selectElement.id + '-select'
}

module.exports = accessibleAutocomplete
