# CHANGELOG

## [Unreleased]

_(add items here for easier creation of next log entry)_

- Add touchEnd handler for iOS and touch devices, fixes custom suggestions.

## 0.4.1 - 2017-04-26

- Minify `styled.css` for production.

## 0.4.0 - 2017-04-11

- [Breaking] Don't focus suggestions when hovering them, add `:hover` CSS class.
- Add `showNoOptionsFound` property to allow users to disable this behaviour.
- Pass through unrecognised key events to input, allowing users to continue typing when they are focusing an option.

## 0.3.5 - 2017-04-06

- Don't prepopulate `defaultValue` in `enhanceSelectElement`.

## 0.3.4 - 2017-04-06

- Pass actual selected object into `onSelect`.
- Add `selectOnBlur` property to allow users to disable this behaviour.
- Add `placeholder` property.

## 0.3.3 - 2017-04-04

- Add `templates.inputValue` and `templates.suggestion` properties. These allow users to override how the suggestions are displayed.

## 0.3.2 - 2017-04-03

- Add `AccessibleTypeahead.enhanceSelectElement` function.
- Add `onSelect` property.

## 0.3.1 - 2017-03-09

- Add ability to specify a `defaultValue` to prefill the input.
- When user has selected an option with the keyboard, blurring will select.
- When user has no selected but autoselect is on, blurring will select.
- Hovering no longer selects, just focuses.
- When hovering out of component, focus returns to selected.
- Allow enter to submit forms when menu isn't opened.
- Hide results when going under minLength.

## 0.3.0 - 2017-03-09

- [Breaking] Add `displayMenu` property. The default is `inline` which was not the previous default.
- CSS colour changes, and more properties moved away from inline styles.
- Turn off native browser autocomplete so it doesn't interfere with typeahead overlay.
- Change the content and styling of the 'No results found' feature.

## 0.2.4 - 2017-03-02

- Display "No options found" when there are no results.
- Add `autoselect` property. This refactors the `:focused` CSS class to `--focused`, but because previous styling should still work as before, is not a breaking change.
- Poll the input element periodically to pick up value changes. This makes it more resilient to direct modifications from applications like Dragon, or from interventions from other JavaScript snippets.

## 0.2.3 - 2017-02-21

- Add `minLength` property, which:
  - Tells the aria region to display text that the user should type in more characters;
  - Doesn't call the `source` until that lower limit is reached.
- Select text only when component is unfocused.

## 0.2.2 - 2017-02-16

- Fix focus/blur events on IE11.
- Fix value of `aria-expanded` attribute to be based on `menuOpen`.
- Remove `aria-activedescendant` attribute when no option selected.
- Set `aria-selected` on options when they are focused.
- Fix clicking on options on Safari.
- Use a darker blue in the styled example for better contrast ratios.
- Don't close menu when blurring options or input on iOS, to allow VoiceOver users the ability to select from the available options.
- Autoselect entire text region when focusing into the input.

## 0.2.1 - 2017-02-03

- Don't close menu when closing the keyboard on iOS, to allow VoiceOver users the ability to select from the available options.
- Add ability to set `name` attribute on input.

## 0.2.0 - 2017-01-31

- [Breaking] Change the CSS classes to our own instead of the jQuery typeahead ones.
- Allow importing styling from file in `examples/styled.css`.
- Tweak the styled example to fix two Safari bugs:
  - fix scroll bar appearing in menu where none is necessary;
  - fix weird margin separating the input from the menu.

## 0.1.3 - 2017-01-31

- Don't apply focused CSS on hover, change handler to MouseOver instead of MouseMove.
- (WIP) Make enter select first option if `autoselect` is enabled. This feature is not finished yet.
- Close results when focusing out of component after hovering an element.
- Update styled example:
  - unbold results;
  - make height of options consistent with input;
  - remove top border from results menu;
  - remove default focus outline on options.
- Don't display the menu when there are no options.
- Prevent accidental form submission by `preventDefault`ing on enter key.
- Add form around basic example.

## 0.1.2 - 2017-01-20

- Don't specify typeahead menu width inline. Allows custom CSS to override it.

## 0.1.0 - 2017-01-19

- Initial release.
- Basic functionality, minimal styling, only two examples, incomplete tests.
