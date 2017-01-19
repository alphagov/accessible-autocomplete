> WARNING: This project is still experimental / under development. Do not use in production.

# Accessible Typeahead

[![Build Status](https://travis-ci.org/tvararu/typeahead.svg?branch=master)](https://travis-ci.org/developit/preact-boilerplate)

`accessible-typeahead` is a JavaScript typeahead built from the ground up to be accessible. The design goals are:

- **Accessibility**: Following WAI-ARIA best practices and testing with assistive technologies.
- **User experience**: Supporting a wide variety of browsers, devices, and user needs.
- **Compatibility**: It aims to be easy to integrate into existing services, and uses progressive enhancement. It comes in a zero dependency version that weighs `6.1kb` minified and gzipped.

## Installation / Usage

### Plain JS

You can include the standalone build by referencing it in your page:

```html
<script src="https://unpkg.com/accessible-typeahead@1.0.0"></script>
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

Coming soon.

## Why another typeahead?

`accessible-typeahead` was built after studying many existing solutions and prototyping patches to fix user experience or accessibility issues. It draws heavy inspiration from the following (and a lot of others):

- [ljwatson/design-patterns](http://ljwatson.github.io/design-patterns/autocomplete/index.html): great accessible experience
- [corejavascript/corejs-typeahead](https://github.com/corejavascript/typeahead.js): flexible typeahead/suggestion engine architecture
- [JamieAppleseed/selectToAutocomplete](https://github.com/JamieAppleseed/selectToAutocomplete): ease of use

## License

MIT.
