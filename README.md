# Accessible autocomplete

The accessible autocomplete is a component that helps users choose answers from a list you provide. You can also use it to make the answers you get from users more consistent.

If you're asking users to provide their country or territory, the [govuk-country-and-territory-autocomplete](https://github.com/alphagov/govuk-country-and-territory-autocomplete/blob/main/README.md) might be more appropriate.

[![npm version](https://img.shields.io/npm/v/accessible-autocomplete.svg)](http://npm.im/accessible-autocomplete)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![gzip size](http://img.badgesize.io/https://unpkg.com/accessible-autocomplete/dist/accessible-autocomplete.min.js?compression=gzip)](https://unpkg.com/accessible-autocomplete/dist/accessible-autocomplete.min.js)

[![Sauce Labs Build Status](https://saucelabs.com/browser-matrix/tvararu-alphagov.svg)](https://saucelabs.com/u/tvararu-alphagov)

`accessible-autocomplete` is a JavaScript autocomplete built from the ground up to be accessible. The design goals are:

- **Accessibility**: Following WAI-ARIA best practices and testing with assistive technologies.
- **User experience**: Supporting a wide variety of user needs.
- **Compatibility**: Working with [recommended browsers](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices#browsers-to-test-in) and [assistive technologies](https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies#which-assistive-technologies-to-test-with).

[Try out the examples!](https://alphagov.github.io/accessible-autocomplete/examples/)

---

## Support

The GOV.UK Design System team maintains the accessible autocomplete as a standalone component. However, we’re only able to put in minimal work to support it.

[Read about our plans to maintain this component](https://github.com/alphagov/accessible-autocomplete/issues/532).

[Read more about the types of support we can provide](https://github.com/alphagov/accessible-autocomplete/issues/430).

---

## Installation / usage

### Using npm and a module system

Install it by running:

```bash
npm install --save accessible-autocomplete
```

The `accessibleAutocomplete` function will render an autocomplete `<input>` and its accompanying suggestions and `aria-live` region. Your page should provide a `<label>` and a container element:

```html
<label for="my-autocomplete">Select your country</label>
<div id="my-autocomplete-container"></div>
```

Then import it using a module system like Browserify / Webpack / Rollup, and call the `accessibleAutocomplete` function, providing an array of values:

```js
import accessibleAutocomplete from 'accessible-autocomplete'

const countries = [
  'France',
  'Germany',
  'United Kingdom'
]

accessibleAutocomplete({
  element: document.querySelector('#my-autocomplete-container'),
  id: 'my-autocomplete', // To match it to the existing <label>.
  source: countries
})
```

If you want to use it as a replacement for a `<select>` element, read the [Progressive enhancement](#progressive-enhancement) section.

### As a plain JavaScript module

You can copy the [dist/accessible-autocomplete.min.js](dist/accessible-autocomplete.min.js) file to your JavaScript folder and import it into the browser:

```html
<script type="text/javascript" src="assets/js/accessible-autocomplete.min.js"></script>
```

### Styling the autocomplete

A stylesheet is included with the package at [dist/accessible-autocomplete.min.css](dist/accessible-autocomplete.min.css).

You can copy it to your stylesheets folder and import it into the browser:

```html
<link rel="stylesheet" href="assets/css/accessible-autocomplete.min.css" />
```

You can also import it using Sass:

```css
@import "accessible-autocomplete";
```

> [!NOTE]
>
> When styling the `.autocomplete__input` element, be aware that the `autoselect` option will render a second `.autocomplete__hint` input element for suggestion text. Both elements should be styled to ensure suggestions exactly align with the typed input text.

### Using with Preact

If you already use Preact in your application, you can import a bundle that will use that:

```js
import preact from 'preact'
import Autocomplete from 'accessible-autocomplete/preact'

preact.render(
  <Autocomplete id='autocomplete' source={suggest} />,
  document.querySelector('#container')
)
```

[Try out the Preact example!](https://alphagov.github.io/accessible-autocomplete/examples/preact/)

#### Preact versions

Preact v8.5.3 has been tested to work with the Accessible Autocomplete - although make sure to check out [documented issues](https://github.com/alphagov/accessible-autocomplete/issues).

Preact 10.19.6 has been incompletely tested with the Accessible Autocomplete. No issues were found in Chrome and Firefox, but our automated tests for picking an option using the keyboard failed in Internet Explorer 11 (an issue we could not replicate when testing manually, though). 

We recommend you carry out thorough testing if you wish to use this or later versions of Preact. 

### Using with React

If you already use React in your application, you can import a bundle that will use that:

```js
import React from 'react'
import ReactDOM from 'react-dom'
import Autocomplete from 'accessible-autocomplete/react'

ReactDOM.render(
  <Autocomplete id='autocomplete' source={suggest} />,
  document.querySelector('#container')
)
```

[Try out the React example!](https://alphagov.github.io/accessible-autocomplete/examples/react/)

#### React versions

React v15.5.4 has been tested to work with the Accessible Autocomplete - although make sure to check
out [documented issues](https://github.com/alphagov/accessible-autocomplete/issues).

React v15.6.2, v16.14.0, v17.0.2, and v18.2.0 have been incompletely tested with the Accessible Autocomplete. No undocumented issues were found (though be aware that [React 18 dropped support for Internet Explorer](https://react.dev/blog/2022/03/08/react-18-upgrade-guide#dropping-support-for-internet-explorer))

We recommend you carry out thorough testing if you wish to use this or later versions of React.

## API documentation

### Required options

#### `element`

Type: `HTMLElement`

The container element in which the autocomplete will be rendered in.

#### `id`

Type: `string`

The `id` to assign to the autocomplete input field, to use with a `<label for=id>`. Not required if using `enhanceSelectElement`.

#### `source`

Type: `Array | Function`

An array of values to search when the user types in the input field, or a function to take what the user types and call a callback function with the results to be displayed.

An example of an array of values:

```js
const countries = [
  'France',
  'Germany',
  'United Kingdom'
]
```

If `source` is a function, the arguments are: `query: string, populateResults: Function`

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

#### `inputClasses` (default: `null`)

Type: `string | null`

Adds custom html classes to the generated `input` element.

If [`autoselect`](#autoselect) is set to `true`, the option [`hintClasses`](#hintClasses) can be configured separately or it will default to the `inputClasses` value.

#### `hintClasses` (default: `null`)

Type: `string | null`

Adds custom html classes to the additional `input` element that appears when what the user typed matches the start of a suggestion.

If [`autoselect`](#autoselect) is set to `true`, the option [`inputClasses`](#inputClasses) will be used as the default value unless `hintClasses` is set to an empty string `''`.

#### `menuAttributes` (default: `{}`)

Type: `Object`

Sets html attributes and their values on the generated `ul` menu element. Useful for adding `aria-labelledby` and setting to the value of the `id` attribute on your existing label, to provide context to an assistive technology user.

> [!NOTE]
>
> To maintain assistive technology support, menu attributes `id`, `role` and `onMouseLeave` cannot be overridden using `menuAttributes`. Setting `className` will append to the component default and [`menuClasses`](#menuClasses) values.


#### `menuClasses` (default: `null`)

Type: `string | null`

Adds custom html classes to the generated `ul` menu element.

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

We think [placeholders have usability issues](http://adamsilver.io/articles/placeholders-are-problematic/) and that there are [better alternatives to input placeholder text](https://design-system.service.gov.uk/components/text-input/#hint-text), so we do not recommend using this option.

#### `required` (default: `false`)

Type: `Boolean`

The input field will be rendered with a `required` attribute, see [W3C `required` attribute definition](https://www.w3.org/TR/html5/forms.html#the-required-attribute).

#### `showAllValues` (default: `false`)

Type: `Boolean`

If this is set to `true`, all values are shown when the user clicks the input. This is similar
to a default dropdown, so the autocomplete is rendered with a dropdown arrow to convey
this behaviour.

#### `showNoOptionsFound` (default: `true`)

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

`suggestion` is a function that receives one argument, a suggestion to be displayed. It is used when rendering suggestions, and should return a string, which can contain HTML.

:warning: **Caution:** because this function allows you to output arbitrary HTML, you should [make sure it's trusted](https://en.wikipedia.org/wiki/Cross-site_scripting), and accessible.

If your template includes child elements with defined foreground or background colours, check they display correctly in forced colors modes. For example, Windows high contrast mode.

#### `dropdownArrow` (default: A triangle pointing down)

Type: `Function`

A function that gets passed an object with the property `className` (`{ className: '' }`) and should return a string of HTML or a (P)React element. :warning: **Caution:** because this function allows you to output arbitrary HTML, you should [make sure it's trusted](https://en.wikipedia.org/wiki/Cross-site_scripting), and accessible.

### Internationalization

#### `tNoResults` (default: `() => 'No results found'`)

Type: `Function`

A function that receives no arguments and returns the text used in the dropdown to indicate that there are no results.

#### `tStatusQueryTooShort` (default: `` (minQueryLength) => `Type in ${minQueryLength} or more characters for results` ``)

Type: `Function`

A function that receives one argument that indicates the minimal amount of characters needed for the dropdown to trigger and returns the text used in the accessibility hint to indicate that the query is too short.

#### `tStatusNoResults` (default: `() => 'No search results'`)

Type: `Function`

A function that receives no arguments and returns the text that is used in the accessibility hint to indicate that there are no results.

#### `tStatusSelectedOption` (default: `` (selectedOption, length, index) => `${selectedOption} ${index + 1} of ${length} is highlighted` ``)

Type: `Function`

A function that receives three arguments -
the selectedOption, the count of available options, and the (zero-based) index of the selected option -
and returns the text used in the accessibility hint to indicate which option is selected.

#### `tStatusResults`

Default:

```js
(length, contentSelectedOption) => {
  const words = {
    result: (length === 1) ? 'result' : 'results',
    is: (length === 1) ? 'is' : 'are'
  }

  return <span>{length} {words.result} {words.is} available. {contentSelectedOption}</span>
}
```

Type: `Function`

A function that receives two arguments - the count of available options and the return value of `tStatusSelectedOption` - and returns the text used in the accessibility hint to indicate which options are available and which is selected.

#### `tAssistiveHint` (default: `() => 'When autocomplete results are available use up and down arrows to review and enter to select.  Touch device users, explore by touch or with swipe gestures.'`)

Type: `Function`

A function that receives no arguments and returns the text to be assigned as the aria description of the html `input` element, via the `aria-describedby` attribute.
This text is intended as an initial instruction to the assistive tech user. The `aria-describedby` attribute is automatically removed once user input is detected, in order to reduce screen reader verbosity.


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

### Null options

If your `<select>` element has a "null" option - a default option with no value - then you can pass a `defaultValue` option to `enhanceSelectElement` which will replace the label of this option when it is selected.

With the following HTML:

```html
<select id="location-picker">
  <option value="">Select a country</option>
  <option value="fr">France</option>
  <option value="de">Germany</option>
  <option value="gb">United Kingdom</option>
</select>
```

Then passing a `defaultValue` option of `''` will then leave the autocomplete blank if the null option is selected.

```js
accessibleAutocomplete.enhanceSelectElement({
  defaultValue: '',
  selectElement: document.querySelector('#location-picker')
})
```

Any null options will also be filtered out of the options used to populate the `source` of the autocomplete element. To preserve options with no value in the autocomplete, then pass a `preserveNullOptions` flag of `true` to `enhanceSelectElement`.

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
