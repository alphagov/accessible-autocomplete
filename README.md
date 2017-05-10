# Accessible autocomplete

[![npm version](https://img.shields.io/npm/v/accessible-autocomplete.svg)](http://npm.im/accessible-autocomplete)
[![Build Status](https://travis-ci.org/alphagov/accessible-autocomplete.svg?branch=master)](https://travis-ci.org/alphagov/accessible-autocomplete)
[![Coverage Status](https://coveralls.io/repos/github/alphagov/accessible-autocomplete/badge.svg?branch=master)](https://coveralls.io/github/alphagov/accessible-autocomplete?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![gzip size](http://img.badgesize.io/https://unpkg.com/accessible-autocomplete/dist/accessible-autocomplete.min.js?compression=gzip)](https://unpkg.com/accessible-autocomplete/dist/accessible-autocomplete.min.js)

[![Sauce Labs Build Status](https://saucelabs.com/browser-matrix/tvararu-alphagov.svg)](https://saucelabs.com/u/tvararu-alphagov)

`accessible-autocomplete` is a JavaScript autocomplete built from the ground up to be accessible. The design goals are:

- **Accessibility**: Following WAI-ARIA best practices and testing with assistive technologies.
- **User experience**: Supporting a wide variety of user needs.
- **Compatibility**: Working with as many browsers, devices, and assistive technologies as possible.

[Try out the examples!](https://alphagov.github.io/accessible-autocomplete/examples/)

## Installation / usage

### Using npm

Install it by running:

```bash
npm install --save accessible-autocomplete
```

Import it using a module system like Webpack:

```js
import accessibleAutocomplete from 'accessible-autocomplete'
```

Or using a script tag:

```html
<script type="text/javascript" src="node_modules/accessible-autocomplete/dist/accessible-autocomplete.min.js"></script>
```

And then call the `accessibleAutocomplete` function, providing a suggestion engine:

```js
function suggest (query, populateResults) {
  const results = [
    'France',
    'Germany',
    'United Kingdom'
  ]
  const filteredResults = results.filter(result => result.indexOf(query) !== -1)
  populateResults(filteredResults)
}

accessibleAutocomplete({
  element: document.querySelector('#my-autocomplete-container'),
  id: 'my-autocomplete',
  source: suggest
})
```

Don't forget to include the stylesheet:

```html
<link rel="stylesheet" href="node_modules/accessible-autocomplete/dist/accessible-autocomplete.min.css" />
```

## API documentation

### Required options

#### `element`

Type: `HTMLElement`

The container element in which the autocomplete will be rendered in.

#### `id` (default: `'autocomplete'`)

Type: `string`

The `id` to assign to the autocomplete input field, to use with a `<label for=id>`. Not required if using `enhanceSelectElement`.

#### `source`

Type: `Function`

Arguments: `query: string, populateResults: Function`

Similar to the [`source` argument for typeahead.js](https://github.com/corejavascript/typeahead.js/blob/47d46b40cb834d8285ac9328c4b436e5eccf7197/doc/jquery_typeahead.md#datasets), a backing data source for suggestions. `query` is what gets typed into the input field, which will callback to `populateResults` synchronously with the array of string results to display in the menu.

An example of a simple suggestion engine:

```js
function suggest (query, populateResults) {
  const results = [
    'France',
    'Germany',
    'United Kingdom'
  ]
  const filteredResults = results.filter(result => result.indexOf(query) !== -1)
  populateResults(filteredResults)
}
```

### Other options

#### `autoselect` (default: `false`)

Type: `Boolean`

Set to true to highlight the first option when the user types in something and receives results. Pressing enter will select it.

#### `confirmOnBlur` (default: `true`)

Type: `Boolean`

The autocomplete will confirm the currently selected option when the user clicks outside of the component. Set to `false` to disable.

#### `cssNamespace` (default: `'autocomplete'`)

Type: `string`

Use this property to override the [BEM](http://getbem.com/) block name that the JavaScript component will use. You will need to rewrite the CSS class names to use your specified block name.

#### `defaultValue` (default: `''`)

Type: `string`

Specify a string to prefill the autocomplete with.

#### `displayMenu` (default: `'inline'`)

Type: `'inline' | 'overlay'`

You can set this property to specify the way the menu should appear, whether inline or as an overlay.

#### `minLength` (default: `0`)

Type: `number`

The minimum number of characters that should be entered before the autocomplete will attempt to suggest options. When the query length is under this, the aria status region will also provide helpful text to the user informing them they should type in more.

#### `name` (default: `'input-autocomplete'`)

Type: `string`

The `name` for the autocomplete input field, to use with a parent `<form>`.

#### `onConfirm` (default: `() => {}`)

Type: `Function`

Arguments: `confirmed: Object`

This function will be called when the user confirms an option, with the option they've confirmed.

#### `placeholder` (default: `''`) :warning: not recommended :warning:

Type: `string`

This option will populate the `placeholder` attribute on the input element.

We think [placeholders have usability issues](http://adamsilver.io/articles/placeholders-are-problematic/) and that there are [better alternatives to input placeholder text](https://govuk-elements.herokuapp.com/form-elements/#form-hint-text), so we do not recommend using this option.

#### `showNoResultsFound` (default: `true`)

Type: `Boolean`

The autocomplete will display a "No results found" template when there are no results. Set to `false` to disable.

#### `templates` (default: `undefined`)

Type:

```js
{
  inputValue: Function,
  suggestion: Function
}
```

This object defines templates (functions) that are used for displaying parts of the autocomplete.

`inputValue` is a function that receives one argument, the currently selected suggestion. It returns the string value to be inserted into the input.

`suggestion` is a function that receives one argument, a suggestion to be displayed. It is used when rendering suggestions, and should return a string, which can contain HTML. :warning: **Caution:** because this function allows you to output arbitrary HTML, you should [make sure it's trusted](https://en.wikipedia.org/wiki/Cross-site_scripting), and accessible.

## Progressive enhancement

If your autocomplete is meant to select from a small list of options (a few hundred), we strongly suggest that you render a `<select>` menu on the server, and use progressive enhancement.

If you have the following HTML:

```html
<select id="location-picker">
  <option value="fr">France</option>
  <option value="de">Germany</option>
  <option value="gb">United Kingdom</option>
</select>
```

You can use the `accessibleAutocomplete.enhanceSelectElement` function to enhance it into an autocomplete:

```js
accessibleAutocomplete.enhanceSelectElement({
  selectElement: document.querySelector('#location-picker')
})
```

This will:

- Place an autocomplete input field after the specified `<select>`
- Default the autocomplete `autoselect` to `true`
- Default the autocomplete `defaultValue` to the select's `option[selected]`
- Default the autocomplete `id` to the `<select>`'s `id`
- Default the autocomplete `name` attribute to `''` to prevent it being included in form submissions
- Default the autocomplete `source` to use existing `<option>`s from the `<select>`
- Hide the `<select>` using inline `display: none`
- Set the `<select>`'s `id` to `${id}-select` to decouple from any `<label>`
- Upon confirming a value in the autocomplete, update the original `<select>`

This function takes the same options as `accessibleAutocomplete`, with the only difference being that it uses `selectElement` instead of `element`, which needs to be an instance of `HTMLSelectElement`.

> **Note**: The `accessibleAutocomplete.enhanceSelectElement` function is fairly light and wraps the public API for `accessibleAutocomplete`. If your use case doesn't fit the above defaults, try [reading the source](src/wrapper.js) and seeing if you can write your own.

## Analytics and tracking

The following events get triggered on the input element during the life cycle of the autocomplete:

- `onConfirm` - This function will be called when the user confirms an option, with the option they've chosen.

Example usage:

```js
accessibleAutocomplete({
  // additional options
  onConfirm: (val) => {
    track(val)
  }
})
```

## Why another autocomplete?

`accessible-autocomplete` was built after studying many existing solutions and prototyping patches to fix user experience or accessibility issues. It draws heavy inspiration from the following (and a lot of others):

- [ljwatson/design-patterns](http://ljwatson.github.io/design-patterns/autocomplete/index.html): great accessible experience
- [corejavascript/corejs-typeahead](https://github.com/corejavascript/typeahead.js): flexible autocomplete/suggestion engine architecture
- [JamieAppleseed/selectToAutocomplete](https://github.com/JamieAppleseed/selectToAutocomplete): ease of use

## Developing locally

Check out the [CONTRIBUTING](CONTRIBUTING.md) guide for instructions.

If you want to help and want to get more familiar with the codebase, try starting with the ["good for beginners"](https://github.com/alphagov/accessible-autocomplete/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+for+beginners%22) issues.

## License

[MIT](LICENSE.txt).
