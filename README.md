> :warning: WARNING: This project is still experimental / under development. Do not use in production. :warning:

# Accessible Typeahead

[![Build Status](https://travis-ci.org/alphagov/accessible-typeahead.svg?branch=master)](https://travis-ci.org/alphagov/accessible-typeahead)

`accessible-typeahead` is a JavaScript typeahead built from the ground up to be accessible. The design goals are:

- **Accessibility**: Following WAI-ARIA best practices and testing with assistive technologies.
- **User experience**: Supporting a wide variety of browsers, devices, and user needs.
- **Compatibility**: It aims to be easy to integrate into existing services, and uses progressive enhancement. It comes in a zero dependency version that weighs `7.1kb` minified and gzipped.

[Try out the examples!](https://alphagov.github.io/accessible-typeahead/examples/)

## Installation / Usage

### Plain JS

You can include the standalone build by referencing it in your page:

```html
<script src="https://unpkg.com/accessible-typeahead@0.3.2"></script>
```

You can use the [stylesheet from the "styled" example](examples/styled.css) by adding this to your `<head>`:

```html
<link rel="stylesheet" href="https://unpkg.com/accessible-typeahead@0.3.2/examples/styled.css" />
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
  element: document.querySelector('#my-typeahead-container'),
  id: 'my-typeahead',
  source: suggest
})
```

## API Documentation

> :warning: WARNING: This is a work in progress and will change significantly. :warning:

### Required options

#### `element`

Type: `PropTypes.instanceOf(HTMLElement)`

The container element in which the typeahead will be rendered in.

#### `source`

Type: `PropTypes.func`

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

### Other options

#### `autoselect` (default: `false`)

Type: `PropTypes.bool`

Set to true to highlight the first option when the user types in something and receives results. Pressing enter will select it.

#### `cssNamespace` (default: `'typeahead'`)

Type: `PropTypes.string`

The default CSS classes use [BEM](http://getbem.com/) with `typeahead` as the block name. If you already have CSS rules for `.typeahead--menu` or any of the other default classes, you can use this property to rename them and prevent clashes.

TODO: Better styling docs.

#### `defaultValue` (default: `''`)

Type: `PropTypes.string`

Specify a string to prefill the typeahead with.

#### `displayMenu` (default: `'inline'`)

Type: `PropTypes.oneOf(['inline', 'overlay'])`

You can set this property to specify the way the menu should appear, whether inline or as an overlay.

#### `id` (default: `'typeahead'`)

Type: `PropTypes.string`

The `id` for the typeahead input field, to use with a `<label for=id>`. Required if you're instantiating more than one typeahead in one page.

#### `minLength` (default: `0`)

Type: `PropTypes.number`

The minimum number of characters that should be entered before the typeahead will attempt to suggest options. When the query length is under this, the aria status region will also provide helpful text to the user informing them they should type in more.

#### `name` (default: `'input-typeahead'`)

Type: `PropTypes.string`

The `name` for the typeahead input field, to use with a parent `<form>`.

#### `onSelect: Function` (default: `() => {}`)

Type: `PropTypes.func`

Arguments: `query: string`

This function will be called when the user selects an option, with the option they've selected.

## Progressive enhancement

If your typeahead is meant to select from a small list of options (a few hundreds), we strongly suggest that you render a `<select>` menu on the server, and use progressive enhancement.

If you have the following HTML:

```html
<select id="location-picker">
  <option value="fr">France</option>
  <option value="de">Germany</option>
  <option value="gb" selected>United Kingdom</option>
</select>
```

You can use the `AccessibleTypeahead.enhanceSelectElement` function to enhance it into a typeahead:

```js
AccessibleTypeahead.enhanceSelectElement({
  selectElement: document.querySelector('#location-picker')
})
```

This will:

- Place a typeahead input field adjacent to the specified `<select>`
- Set the typeahead `defaultValue` to the `option[selected]` if any
- Default the typeahead `id` to the `<select>`'s `id`
- Default the typeahead `name` attribute to `''` to prevent it being included in form submissions
- Default the typeahead `source` to a basic one that uses any existing `<option>`s from the `<select>`
- Hide the `<select>` using inline `display: none`
- Set the `<select>`'s id to `${id}-select` to decouple from any `<label>`
- Upon selecting a value in the typeahead, update the original `<select>`

This function takes the same options as `AccessibleTypeahead`, with two differences:

- `selectElement` is used instead of `element`
- `defaultValue` is not used, it's inferred from the `option[selected]` if any

> **Note**: The `AccessibleTypeahead.enhanceSelectElement` function is fairly light and wraps the public API for `AccessibleTypeahead`. If your use case doesn't fit the above defaults, try [reading the source](src/wrapper.jsx) and seeing if you can write your own.

## Why another typeahead?

`accessible-typeahead` was built after studying many existing solutions and prototyping patches to fix user experience or accessibility issues. It draws heavy inspiration from the following (and a lot of others):

- [ljwatson/design-patterns](http://ljwatson.github.io/design-patterns/autocomplete/index.html): great accessible experience
- [corejavascript/corejs-typeahead](https://github.com/corejavascript/typeahead.js): flexible typeahead/suggestion engine architecture
- [JamieAppleseed/selectToAutocomplete](https://github.com/JamieAppleseed/selectToAutocomplete): ease of use

## License

[MIT](LICENSE.txt).
