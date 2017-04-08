/* global describe, expect, it */
import Wrapper from '../../src/wrapper'

const injectSelectToEnhanceIntoDOM = (id, name, options, selectedOption) => {
  var maybeCurrentInstance = document.getElementById(id)
  if (maybeCurrentInstance) {
    document.body.removeChild(maybeCurrentInstance)
  }

  var $select = document.createElement('select')
  $select.id = id
  $select.name = name

  for (var optionKey in options) {
    var option = document.createElement('option')
    option.value = optionKey
    option.text = options[optionKey]
    option.selected = (selectedOption === optionKey)
    $select.appendChild(option)
  }

  document.body.appendChild($select)
}

describe('Wrapper', () => {
  it('exposes global on window', () => {
    expect(typeof Wrapper).to.equal('object')
    expect(typeof window.AccessibleTypeahead).to.equal('function')
  })
  it('can enhance a select element', () => {
    const id = 'location-picker-id'
    const name = 'location-picker-name'
    const options = {
      fr: 'France',
      de: 'Germany',
      gb: 'United Kingdom'
    }
    const selectedOption = 'gb'
    injectSelectToEnhanceIntoDOM(id, name, options, selectedOption)

    window.AccessibleTypeahead.enhanceSelectElement({
      selectElement: document.querySelector('#' + id)
    })

    const typeaheadInstances = document.querySelectorAll('.typeahead__wrapper')
    expect(typeaheadInstances.length).to.equal(1)

    const typeaheadInstance = typeaheadInstances[0]
    expect(typeaheadInstance.innerHTML).to.contain(`id="${id}"`)
    expect(typeaheadInstance.innerHTML).to.contain(`name="${name}"`)

    const typeaheadOption = typeaheadInstance.querySelector('.typeahead__option')
    expect(typeaheadOption.textContent).to.equal(options[selectedOption])
  })
})
