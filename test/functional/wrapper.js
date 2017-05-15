/* global before, beforeEach, after, describe, expect, it */
import accessibleAutocomplete from '../../src/wrapper'

const injectSelectToEnhanceIntoDOM = (element, id, name, options, selectedOption) => {
  var $select = document.createElement('select')
  if (id) {
    $select.id = id
  }
  if (name) {
    $select.name = name
  }

  Object.keys(options)
    .map(optionKey => {
      const option = document.createElement('option')
      option.value = optionKey
      option.text = options[optionKey]
      option.selected = (selectedOption === optionKey)
      return option
    })
    .forEach(option => $select.appendChild(option))

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

  it('throws an error when called on nonexistent element', () => {
    expect(
      accessibleAutocomplete.bind(null, {
        element: document.querySelector('#nothing-container'),
        id: 'scratch',
        source: () => {}
      })
    ).to.throw('element is not defined')
  })

  it('throws an error when called without an id ', () => {
    expect(
      accessibleAutocomplete.bind(null, {
        element: scratch,
        source: () => {}
      })
    ).to.throw('id is not defined')
  })

  it('throws an error when called on nonexistent source', () => {
    expect(
      accessibleAutocomplete.bind(null, {
        element: scratch,
        id: 'scratch'
      })
    ).to.throw('source is not defined')
  })

  it('throws an error when called on nonexistent selectElement', () => {
    expect(
      accessibleAutocomplete.enhanceSelectElement.bind(null, {
        selectElement: document.querySelector('#nothing')
      })
    ).to.throw('selectElement is not defined')
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

    accessibleAutocomplete.enhanceSelectElement({
      selectElement: document.querySelector('#' + id)
    })

    const autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper')
    expect(autocompleteInstances.length).to.equal(1)

    const autocompleteInstance = autocompleteInstances[0]
    expect(autocompleteInstance.innerHTML).to.contain(`id="${id}"`)

    const autocompleteOption = autocompleteInstance.querySelector('.autocomplete__option')
    expect(autocompleteOption.textContent).to.equal(options[selectedOption])
    const autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input')
    expect(autocompleteInput.name).to.equal('')
  })

  it('can define a name for the autocomplete element', () => {
    const id = 'location-picker-id'
    const name = 'location-picker-name'
    const options = {
      fr: 'France',
      de: 'Germany',
      gb: 'United Kingdom'
    }
    injectSelectToEnhanceIntoDOM(scratch, id, name, options)

    accessibleAutocomplete.enhanceSelectElement({
      name: 'location-picker-autocomplete',
      selectElement: document.querySelector('#' + id)
    })

    const autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper')

    const autocompleteInstance = autocompleteInstances[0]

    const autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input')
    expect(autocompleteInput.name).to.equal('location-picker-autocomplete')
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

    accessibleAutocomplete.enhanceSelectElement({
      defaultValue: 'France',
      selectElement: document.querySelector('#' + id)
    })

    const autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper')
    const autocompleteInstance = autocompleteInstances[0]
    const autocompleteOption = autocompleteInstance.querySelector('.autocomplete__option')
    expect(autocompleteOption.textContent).to.equal('France')
  })

  it('can overwrite selectedOption with an empty defaultValue', () => {
    const id = 'location-picker-id'
    const name = 'location-picker-name'
    const options = {
      fr: 'France',
      de: 'Germany',
      gb: 'United Kingdom'
    }
    const selectedOption = 'gb'
    injectSelectToEnhanceIntoDOM(scratch, id, name, options, selectedOption)

    accessibleAutocomplete.enhanceSelectElement({
      defaultValue: '',
      selectElement: document.querySelector('#' + id)
    })

    const autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper')
    const autocompleteInstance = autocompleteInstances[0]
    const autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input')
    expect(autocompleteInput.value).to.equal('')
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

    accessibleAutocomplete.enhanceSelectElement({
      selectElement: document.querySelector('#' + id)
    })

    const autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper')
    const autocompleteInstance = autocompleteInstances[0]
    const autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input')
    const autocompleteOption = autocompleteInstance.querySelector('.autocomplete__option')

    // Using setTimeouts here since changes in values take a while to reflect in lists
    autocompleteInput.value = 'Fran'
    expect(autocompleteOption.textContent).to.equal('France')
    autocompleteInput.value = 'Ger'
    setTimeout(() => {
      expect(autocompleteOption.textContent).to.equal('Germany')
      autocompleteInput.value = 'United'
      setTimeout(() => {
        expect(autocompleteOption.textContent).to.equal('United Kingdom')
        done()
      }, 250)
    }, 250)
  })

  it('onConfirm updates original select', (done) => {
    const id = 'location-picker-id'
    const name = 'location-picker-name'
    const options = {
      fr: 'France',
      de: 'Germany',
      gb: 'United Kingdom'
    }
    const selectedOption = 'gb'
    injectSelectToEnhanceIntoDOM(scratch, id, name, options, selectedOption)

    accessibleAutocomplete.enhanceSelectElement({
      defaultValue: 'de',
      selectElement: document.querySelector('#' + id)
    })

    const autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper')
    const autocompleteInstance = autocompleteInstances[0]
    const autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input')
    const autocompleteOption = autocompleteInstance.querySelector('.autocomplete__option')

    const originalSelectElement = document.querySelector(`#${id}-select`)
    // Check the defaultValue has been reflected on the original selectElement
    expect(originalSelectElement.value).to.equal('de')
    // Using setTimeouts here since changes in values take a while to reflect in lists
    autocompleteInput.value = 'United'
    setTimeout(() => {
      expect(autocompleteOption.textContent).to.equal('United Kingdom')
      autocompleteOption.click()
      expect(originalSelectElement.value).to.equal('gb')
      done()
    }, 250)
  })
})
