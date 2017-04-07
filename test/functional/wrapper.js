/* global describe, expect, it */
import Wrapper from '../../src/wrapper'

const injectSelectToEnhanceIntoDOM = (id) => {
  const options = {
    fr: 'France',
    de: 'Germany',
    gb: 'United Kingdom'
  }

  var $select = document.createElement('select')
  $select.id = id
  $select.name = id

  for (var optionKey in options) {
    var option = document.createElement('option')
    option.value = optionKey
    option.text = options[optionKey]
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
    const id = 'location-picker'
    injectSelectToEnhanceIntoDOM(id)

    window.AccessibleTypeahead.enhanceSelectElement({
      selectElement: document.querySelector('#' + id)
    })

    const typeaheadInstances = document.querySelectorAll('.typeahead__wrapper')
    expect(typeaheadInstances.length).to.equal(1)

    const typeaheadInstance = typeaheadInstances[0]
    expect(typeaheadInstance.innerHTML).to.contain(`id="${id}"`)
    expect(typeaheadInstance.innerHTML).to.contain(`name="${id}"`)
  })
})
