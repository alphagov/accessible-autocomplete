/* global before, beforeEach, after, describe, expect, it */
import Wrapper from '../../src/wrapper'

const injectSelectToEnhanceIntoDOM = (element, id, name, options, selectedOption) => {
  var $select = document.createElement('select')
  if (id) {
    $select.id = id
  }
  if (name) {
    $select.name = name
  }

  for (var optionKey in options) {
    var option = document.createElement('option')
    option.value = optionKey
    option.text = options[optionKey]
    option.selected = (selectedOption === optionKey)
    $select.appendChild(option)
  }

  element.appendChild($select)
}

describe('Wrapper', () => {
  let scratch
  before(() => {
    scratch = document.createElement('div');
    (document.body || document.documentElement).appendChild(scratch)
  })

  beforeEach(() => {
    scratch.innerHTML = ''
  })

  after(() => {
    scratch.parentNode.removeChild(scratch)
    scratch = null
  })

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
    injectSelectToEnhanceIntoDOM(scratch, id, name, options, selectedOption)

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

  it('can enhance a select element no name', () => {
    const id = false
    const name = false
    const options = {
      fr: 'France',
      de: 'Germany',
      gb: 'United Kingdom'
    }
    injectSelectToEnhanceIntoDOM(scratch, id, name, options)

    window.AccessibleTypeahead.enhanceSelectElement({
      selectElement: document.querySelector('select')
    })

    const typeaheadInstances = document.querySelectorAll('.typeahead__wrapper')
    expect(typeaheadInstances.length).to.equal(1)

    const typeaheadInstance = typeaheadInstances[0]
    expect(typeaheadInstance.innerHTML).to.contain(`id=""`)
    expect(typeaheadInstance.innerHTML).to.contain(`name=""`)
  })

  it('can overwrite selectedOption with defaultValue', () => {
    const id = 'location-picker-id'
    const name = 'location-picker-name'
    const options = {
      fr: 'France',
      de: 'Germany',
      gb: 'United Kingdom'
    }
    const selectedOption = 'gb'
    injectSelectToEnhanceIntoDOM(scratch, id, name, options, selectedOption)

    window.AccessibleTypeahead.enhanceSelectElement({
      defaultValue: 'France',
      selectElement: document.querySelector('#' + id)
    })

    const typeaheadInstances = document.querySelectorAll('.typeahead__wrapper')
    const typeaheadInstance = typeaheadInstances[0]
    const typeaheadOption = typeaheadInstance.querySelector('.typeahead__option')
    expect(typeaheadOption.textContent).to.equal('France')
  })

  it('has all options when typing', (done) => {
    const id = 'location-picker-id'
    const name = 'location-picker-name'
    const options = {
      fr: 'France',
      de: 'Germany',
      gb: 'United Kingdom'
    }
    injectSelectToEnhanceIntoDOM(scratch, id, name, options)

    window.AccessibleTypeahead.enhanceSelectElement({
      selectElement: document.querySelector('#' + id)
    })

    const typeaheadInstances = document.querySelectorAll('.typeahead__wrapper')
    const typeaheadInstance = typeaheadInstances[0]
    const typeaheadInput = typeaheadInstance.querySelector('.typeahead__input')
    const typeaheadOption = typeaheadInstance.querySelector('.typeahead__option')

    // Using setTimeouts here since changes in values take a while to reflect in lists
    typeaheadInput.value = 'Fran'
    expect(typeaheadOption.textContent).to.equal('France')
    typeaheadInput.value = 'Ger'
    setTimeout(() => {
      expect(typeaheadOption.textContent).to.equal('Germany')
      typeaheadInput.value = 'United'
      setTimeout(() => {
        expect(typeaheadOption.textContent).to.equal('United Kingdom')
        done()
      }, 250)
    }, 250)
  })

  it('onSelect updates original select', (done) => {
    const id = 'location-picker-id'
    const name = 'location-picker-name'
    const options = {
      fr: 'France',
      de: 'Germany',
      gb: 'United Kingdom'
    }
    const selectedOption = 'gb'
    injectSelectToEnhanceIntoDOM(scratch, id, name, options, selectedOption)

    window.AccessibleTypeahead.enhanceSelectElement({
      defaultValue: 'de',
      selectElement: document.querySelector('#' + id)
    })

    const typeaheadInstances = document.querySelectorAll('.typeahead__wrapper')
    const typeaheadInstance = typeaheadInstances[0]
    const typeaheadInput = typeaheadInstance.querySelector('.typeahead__input')
    const typeaheadOption = typeaheadInstance.querySelector('.typeahead__option')

    const originalSelectElement = document.querySelector(`#${id}-select`)
    // Check the defaultValue has been reflected on the original selectElement
    expect(originalSelectElement.value).to.equal('de')
    // Using setTimeouts here since changes in values take a while to reflect in lists
    typeaheadInput.value = 'United'
    setTimeout(() => {
      expect(typeaheadOption.textContent).to.equal('United Kingdom')
      typeaheadOption.click()
      expect(originalSelectElement.value).to.equal('gb')
      done()
    }, 250)
  })
})
