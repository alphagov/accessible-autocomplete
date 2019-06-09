import { createElement, render } from 'preact' /** @jsx createElement */
import Autocomplete from './autocomplete'

function accessibleAutocomplete (options) {
  if (!options.element) { throw new Error('element is not defined') }
  if (!options.id) { throw new Error('id is not defined') }
  if (!options.source) { throw new Error('source is not defined') }
  if (Array.isArray(options.source)) {
    options.source = createSimpleEngine(options.source)
  }
  render(<Autocomplete {...options} />, options.element)
}

const createSimpleEngine = (values) => (query, syncResults) => {
  var matches = values.filter(r => r.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  syncResults(matches)
}

accessibleAutocomplete.enhanceSelectElement = (configurationOptions) => {
  if (!configurationOptions.selectElement) { throw new Error('selectElement is not defined') }

  const selectElement = configurationOptions.selectElement
  const selectableOptions = [].filter.call(selectElement.options, option => (option.value || configurationOptions.preserveNullOptions))

  // Set defaults.
  if (!configurationOptions.source) {
    configurationOptions.source = selectableOptions.map(option => option.textContent || option.innerText)
  }

  if (selectElement.multiple) {
    configurationOptions.multiple = true
    configurationOptions.confirmOnBlur = false
    configurationOptions.showNoOptionsFound = false
    configurationOptions.selectedOptions = selectableOptions.filter(option => option.selected).map(option => option.textContent)
    configurationOptions.onRemove = configurationOptions.onRemove || (value => {
      const optionToRemove = [].filter.call(configurationOptions.selectElement.options, option => (option.textContent || option.innerText) === value)[0]
      if (optionToRemove) { optionToRemove.selected = false }
    })
  }

  configurationOptions.onConfirm = configurationOptions.onConfirm || (query => {
    const requestedOption = [].filter.call(selectableOptions, option => (option.textContent || option.innerText) === query)[0]
    if (requestedOption) { requestedOption.selected = true }
  })

  if (!configurationOptions.multiple && (selectElement.value || configurationOptions.defaultValue === undefined)) {
    const option = selectElement.options[selectElement.options.selectedIndex]
    if (option.textContent || option.innerText) {
      configurationOptions.defaultValue = option.textContent || option.innerText
    }
  }

  if (configurationOptions.name === undefined) configurationOptions.name = ''
  if (configurationOptions.id === undefined) {
    if (selectElement.id === undefined) {
      configurationOptions.id = ''
    } else {
      configurationOptions.id = selectElement.id
    }
  }
  if (configurationOptions.autoselect === undefined) configurationOptions.autoselect = true

  const element = document.createElement('span')

  selectElement.parentNode.insertBefore(element, selectElement)

  accessibleAutocomplete({
    ...configurationOptions,
    element: element
  })

  selectElement.style.display = 'none'
  selectElement.id = selectElement.id + '-select'
}

export default accessibleAutocomplete
