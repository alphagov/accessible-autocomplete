const AAMin = require('./dist/lib/accessible-autocomplete.preact.min');

const AccessibleAutocomplete =
  typeof AAMin === 'function' ? AAMin : AAMin.default;

module.exports = {
  AccessibleAutocomplete,
};
