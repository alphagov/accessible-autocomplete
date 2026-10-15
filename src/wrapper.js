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
  const matches = values.filter(r => r.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  syncResults(matches)
}

const triggerChangeEvent = (element) => {
  let event
  try {
    event = new Event('change', { bubbles: true })
  } catch (e) {
    event = document.createEvent('Event')
    event.initEvent('change', true, false)
  }
  element.dispatchEvent(event)
}

accessibleAutocomplete.enhanceSelectElement = (configurationOptions) => {
  if (!configurationOptions.selectElement) { throw new Error('selectElement is not defined') }

  const element = document.createElement('div')
  configurationOptions.selectElement.parentNode.insertBefore(element, configurationOptions.selectElement)

  // Set defaults.
  if (!configurationOptions.source) {
    const availableOptions = [].filter.call(configurationOptions.selectElement.options, option => (option.value || configurationOptions.preserveNullOptions))
    configurationOptions.source = availableOptions.map(option => option.textContent || option.innerText)
  }

  const userOnConfirm = configurationOptions.onConfirm
  configurationOptions.onConfirm = (query) => {
    const select = configurationOptions.selectElement
    const requestedOption = Array.prototype.filter.call(select.options, option => (option.textContent || option.innerText) === query)[0]
    if (requestedOption) {
      const changed = !requestedOption.selected
      requestedOption.selected = true
      if (changed) {
        triggerChangeEvent(select)
      }
    } else {
      const input = element.querySelector('.autocomplete__input') || element.querySelector('input') || document.getElementById(configurationOptions.id)
      const isQueryEmpty = query === '' || ((query === undefined || query === null) && (!input || input.value === ''))
      if (isQueryEmpty) {
        const previousIndex = select.selectedIndex
        const previousValue = select.value
        const emptyOption = Array.prototype.filter.call(select.options, option => option.value === '')[0]
        if (emptyOption) {
          emptyOption.selected = true
        } else {
          select.selectedIndex = -1
          Array.prototype.forEach.call(select.options, option => {
            option.selected = false
          })
        }
        const changed = select.selectedIndex !== previousIndex || select.value !== previousValue
        if (changed) {
          triggerChangeEvent(select)
        }
      }
    }
    if (userOnConfirm) { userOnConfirm(query) }
  }

  if (configurationOptions.selectElement.value || configurationOptions.defaultValue === undefined) {
    const option = configurationOptions.selectElement.options[configurationOptions.selectElement.options.selectedIndex]
    if (option) {
      configurationOptions.defaultValue = option.textContent || option.innerText
    } else if (configurationOptions.defaultValue === undefined) {
      configurationOptions.defaultValue = ''
    }
  }

  if (configurationOptions.name === undefined) configurationOptions.name = ''
  if (configurationOptions.id === undefined) {
    if (configurationOptions.selectElement.id === undefined) {
      configurationOptions.id = ''
    } else {
      configurationOptions.id = configurationOptions.selectElement.id
    }
  }
  if (configurationOptions.autoselect === undefined) configurationOptions.autoselect = true

  accessibleAutocomplete({
    ...configurationOptions,
    element
  })

  configurationOptions.selectElement.style.display = 'none'
  configurationOptions.selectElement.id = configurationOptions.selectElement.id + '-select'
}

export default accessibleAutocomplete
