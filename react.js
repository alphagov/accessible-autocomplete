const AAMin = require('./dist/lib/accessible-autocomplete.react.min')

const AccessibleAutocomplete =
  typeof AAMin === 'function' ? AAMin : AAMin.default

module.exports = {
  AccessibleAutocomplete
}
