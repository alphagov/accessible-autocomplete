# CHANGELOG

## [Unreleased]

_(add items here for easier creation of next log entry)_

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
