> :warning: WARNING: This project is still experimental / under development. Do not use in production. :warning:

# Accessible Typeahead

[![Build Status](https://travis-ci.org/alphagov/accessible-typeahead.svg?branch=master)](https://travis-ci.org/alphagov/accessible-typeahead)

`accessible-typeahead` is a JavaScript typeahead built from the ground up to be accessible. The design goals are:

- **Accessibility**: Following WAI-ARIA best practices and testing with assistive technologies.
- **User experience**: Supporting a wide variety of browsers, devices, and user needs.
- **Compatibility**: It aims to be easy to integrate into existing services, and uses progressive enhancement. It comes in a zero dependency version that weighs `6.4kb` minified and gzipped.

[Try out the examples!](https://alphagov.github.io/accessible-typeahead/examples/)

## Installation / Usage

### Plain JS

You can include the standalone build by referencing it in your page:

```html
<script src="https://unpkg.com/accessible-typeahead@0.2.3"></script>
```

You can use the [stylesheet from the "styled" example](examples/styled.css) by adding this to your `<head>`:

```html
<link rel="stylesheet" src="https://unpkg.com/accessible-typeahead@0.2.3/examples/styled.css"></script>
```

To use it, call the `window.AccessibleTypeahead` function, providing a suggestion engine:

```js
function suggest (query, syncResults) {
  var results = [
    'France',
    'Germany',
    'United Kingdom'
  ]
  syncResults(query
    ? results.filter(function (result) {
        return result.toLowerCase().indexOf(query.toLowerCase()) !== -1
      })
    : []
  )
}

AccessibleTypeahead({
  element: document.querySelector('#my-typeahead-container')
  id: 'my-typeahead',
  source: suggest
})
```

## API Documentation

> :warning: WARNING: This is a work in progress and will change significantly. :warning:

### `autoselect: boolean` (optional, default: `false`)

Set to true to highlight the first option when the user types in something and receives results. Pressing enter will select it.

### `cssNamespace: String` (optional, default: `'typeahead'`)

The default CSS classes use [BEM](http://getbem.com/) with `typeahead` as the block name. If you already have CSS rules for `.typeahead--menu` or any of the other default classes, you can use this property to rename them and prevent clashes.

TODO: Better styling docs.

### `element: HTMLElement`

The container element in which the typeahead will be rendered in.

### `id: String` (optional, default: `'typeahead'`)

The `id` for the typeahead input field, to use with a `<label for=id>`. Required if you're instantiating more than one typeahead in one page.

### `minLength: Number` (optional, default: `0`)

The minimum number of characters that should be entered before the typeahead will attempt to suggest options. When the query length is under this, the aria status region will also provide helpful text to the user informing them they should type in more.

### `name: String` (optional, default: `'input-typeahead'`)

The `name` for the typeahead input field, to use with a parent `<form>`.

### `source: Function`

Arguments: `query: string, syncResults: Function`

Similar to the [`source` argument for typeahead.js](https://github.com/corejavascript/typeahead.js/blob/47d46b40cb834d8285ac9328c4b436e5eccf7197/doc/jquery_typeahead.md#datasets), a backing data source for suggestions. `query` is what gets typed into the input field, which will callback to `syncResults` synchronously with the array of string results to display in the menu.

An example of a simple suggestion engine:

```js
function suggest (query, syncResults) {
  var results = [
    'France',
    'Germany',
    'United Kingdom'
  ]
  syncResults(query
    ? results.filter(function (result) {
        return result.toLowerCase().indexOf(query.toLowerCase()) !== -1
      })
    : []
  )
}
```

## Why another typeahead?

`accessible-typeahead` was built after studying many existing solutions and prototyping patches to fix user experience or accessibility issues. It draws heavy inspiration from the following (and a lot of others):

- [ljwatson/design-patterns](http://ljwatson.github.io/design-patterns/autocomplete/index.html): great accessible experience
- [corejavascript/corejs-typeahead](https://github.com/corejavascript/typeahead.js): flexible typeahead/suggestion engine architecture
- [JamieAppleseed/selectToAutocomplete](https://github.com/JamieAppleseed/selectToAutocomplete): ease of use

## License

[MIT](LICENSE.txt).
