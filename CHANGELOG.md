# CHANGELOG

## Unreleased

## 3.0.1 - 2024-09-12

### Fixes

- [Pull request #727: Add `aria-controls` to aria props](https://github.com/alphagov/accessible-autocomplete/pull/727)
- [Pull request #724: Add accessibility controls to 'No results' list item](https://github.com/alphagov/accessible-autocomplete/pull/724)
- [Pull request #729: Move `aria-labelledby` into computed menu props](https://github.com/alphagov/accessible-autocomplete/pull/729)

## 3.0.0 - 2024-04-19

### Breaking changes

#### Verify your code does not rely on removed polyfills

Following on from [our previous announcement](https://github.com/alphagov/design-system-team-internal/issues/561), the accessible autocomplete code is no longer transpiled and polyfilled to support IE8-10.

However, because the polyfills create or extend global objects, you might have other code in your service unintentionally relying on the inclusion of these polyfills. You might need to introduce your own polyfills or rewrite your JavaScript to avoid using the polyfilled features.

This change was introduced in [pull request #612: Update packages, configs + Node.js 20](https://github.com/alphagov/accessible-autocomplete/pull/612).

#### Check for minor visual changes in the rendering of the component

We've made some style adjustments to the stylesheet shipped with the component to make its colours, height, line-height and padding match those of the latest version of GOV.UK Frontend's `<input>`.

If you're using this stylesheet:
- check if our style update affects the rendering of the component in your service, and adjust if necessary
- if you were adding to the default style's to match GOV.UK Frontend's input,
look for CSS declarations you may now be able to remove

This change was introduced in [pull request #644: Align CSS styles with GOV.UK Frontend](https://github.com/alphagov/accessible-autocomplete/pull/644).

### New features

#### Options to add classes to parts of the component

Use these new options to add your own classes to parts of the component:
- `inputClasses` for the `input` element
- `hintClasses` for the suggestion hint (`input` element appearing when the text typed by the user matches the start of an option)
- `menuClasses` for the `ul` element listing the options

You can also add custom classes to the `ul` listing the options through the new `menuAttributes` option, providing a `className` or `class` property.

This change was introduced in:
- [pull request #602: Add `inputClasses` option](https://github.com/alphagov/accessible-autocomplete/pull/602). Thanks to @andreyyudin for contributing this change.
- [pull request #649: Update options for styling component inputs](https://github.com/alphagov/accessible-autocomplete/pull/649)
- [pull request #650: Update ways of configuring menu attributes](https://github.com/alphagov/accessible-autocomplete/pull/650)

#### New class on the component's status

Use the new `autocomplete__status` class in your CSS (or `<CSS_NAMESPACE>__status` if you set [the `cssNamespace` option](https://github.com/alphagov/accessible-autocomplete?tab=readme-ov-file#cssnamespace-default-autocomplete)) to customise the styles of the component's status element (hidden element that makes announcements to assistive technologies).

This change was introduced in [pull request #620: Add className attribute to status component](https://github.com/alphagov/accessible-autocomplete/pull/620). Thanks to @lennym for contributing this change.

### Fixes

- [Pull request #621: Handle query change when the text length does not change](https://github.com/alphagov/accessible-autocomplete/pull/621). Thanks to @archferns for contributing this change.
- [Pull request #591: Add `menuAttributes` to fix Axe's 'aria-input-field-name' error](https://github.com/alphagov/accessible-autocomplete/pull/591). Thanks to @mchughbri for contributing this change.
- [Pull request #600: Fix null aria attributes](https://github.com/alphagov/accessible-autocomplete/pull/600). Thanks to @mark-roberts-ho for contributing this change.
- [Pull request #606: Correct description of tStatusSelectedOption i18n option in README and tweak some wording for consistency with other parts of the README](https://github.com/alphagov/accessible-autocomplete/pull/606). Thanks to @ellamdav for contributing this change.

## 2.0.4 - 2022-02-07

### Fixes

- [Pull request #512: Make sure highlighted option is distinguishable in forced colors mode](https://github.com/alphagov/accessible-autocomplete/pull/512)

## 2.0.3 - 2020-07-01

### Fixes

- [Pull request #415: Make React bundle work server-side in a NodeJS environment](https://github.com/alphagov/accessible-autocomplete/pull/415)

## 2.0.2 - 2020-01-30

### Fixes

- [Pull request #388: Set aria-selected as a string instead of a boolean to avoid being dropped](https://github.com/alphagov/accessible-autocomplete/pull/388).
- [Pull request #400: Remove pointer events check](https://github.com/alphagov/accessible-autocomplete/pull/400).
- [Pull request #406: Make hint padding match input padding](https://github.com/alphagov/accessible-autocomplete/pull/406).
- [Pull request #407: Use a div element to wrap enhanced component](https://github.com/alphagov/accessible-autocomplete/pull/407).
- [Pull request #410: Fix long clicks not selecting options](https://github.com/alphagov/accessible-autocomplete/pull/410).

## 2.0.1 - 2019-10-07

### Fixes

- [Pull request #379: Ensure multiple autocompletes on one page do not have conflicting id attributes](https://github.com/alphagov/accessible-autocomplete/pull/379)

## 2.0.0 - 2019-09-26

We recommend you update to the latest release using npm:

`npm install accessible-autocomplete@latest`

### Breaking changes

You must make the following change when you migrate to this release, or your service may break.

#### Migrate to the new accessible focus state

The focus state [now meets the new WCAG 2.1 level AA requirements](https://designnotes.blog.gov.uk/2019/07/29/weve-made-the-gov-uk-design-system-more-accessible/).

You do not need to do anything if you’re using Sass.

If you’ve previously copied CSS from our code into your project, you must copy all the CSS from our [`accessible-autocomplete.min.css` file](https://github.com/alphagov/accessible-autocomplete/blob/v2.0.0/dist/accessible-autocomplete.min.css) into your CSS file.

If you’ve created custom CSS, you should check that your component meets WCAG 2.1 level AA requirements. You can [read how we made the GOV.UK Design System focus states accessible](https://design-system.service.gov.uk/get-started/focus-states/).

[Pull request #360: Update focus styles to meet WCAG 2.1 level AA non-text contrast requirements](https://github.com/alphagov/accessible-autocomplete/pull/360).

### Fixes

#### Better compatibility with screen readers

The input field is now visible to all screen readers, because the input field now meets the Accessible Rich Internet Applications (ARIA) 1.0 standard instead of ARIA 1.1. ARIA 1.0 is better supported by the current versions of most screen readers.

Screen readers will now consistently tell users:

- when users have entered too few characters in the input field
- the correct number of search results, and what the results are
- which result users have highlighted
- how to use autocomplete in different screen readers - by reading hidden hint text

Screen readers will also now avoid telling users information they do not need to know after they highlight an option.

Thanks to [Mark Hunter](https://github.com/markhunter27), Chris Moore and everyone at HMRC who worked on these improvements.

[Pull request #355: Refinements to address accessibility issues](https://github.com/alphagov/accessible-autocomplete/pull/355)

## 1.6.2 - 2018-11-13

- Update all packages and add `@babel/preset-env` for browser polyfills. Updates Preact and avoids React 16 `onFocusOut` warnings - thanks [@colinrotherham](https://github.com/colinrotherham)
  ([#316](https://github.com/alphagov/accessible-autocomplete/pull/316))

- Fix mouse event issues in IE9-11 including looping `mouseout` and click event being prevented on child elements (e.g. bold text) - thanks [@colinrotherham](https://github.com/colinrotherham)
  ([#310](https://github.com/alphagov/accessible-autocomplete/pull/310))

- Fix position being incorrectly reported as '1 of n' regardless of actual
  position in list – thanks [@PRGfx](https://github.com/PRGfx)
  ([#291](https://github.com/alphagov/accessible-autocomplete/pull/291))

- Fix spacebar input not being registered when seeing 'No results found'
  message – thanks [@AdenFraser](https://github.com/AdenFraser)
  ([#287](https://github.com/alphagov/accessible-autocomplete/pull/287))

- Update following dependencies (from "Current" to "Wanted"). This fixes failing WebdriverIO tests and updates JS Standard to use eslint 4.

| Package                                  | Current | Wanted | Latest |
|------------------------------------------|---------|--------|--------|
| babel-eslint                             | 8.0.0   | 8.2.6  | 8.2.6  |
| babel-loader                             | 7.1.0   | 7.1.5  | 7.1.5  |
| babel-plugin-transform-decorators-legacy | 1.3.4   | 1.3.5  | 1.3.5  |
| babel-register                           | 6.24.1  | 6.26.0 | 6.26.0 |
| babel-runtime                            | 6.23.0  | 6.26.0 | 6.26.0 |
| chai                                     | 4.0.2   | 4.1.2  | 4.1.2  |
| chalk                                    | 2.0.1   | 2.4.1  | 2.4.1  |
| copy-webpack-plugin                      | 4.0.1   | 4.5.2  | 4.5.2  |
| coveralls                                | 2.13.1  | 2.13.3 | 3.0.2  |
| cross-env                                | 5.0.1   | 5.2.0  | 5.2.0  |
| csso-cli                                 | 1.0.0   | 1.1.0  | 1.1.0  |
| husky                                    | 0.14.1  | 0.14.3 | 0.14.3 |
| karma                                    | 1.7.0   | 1.7.1  | 2.0.4  |
| karma-coverage                           | 1.1.1   | 1.1.2  | 1.1.2  |
| karma-mocha-reporter                     | 2.2.3   | 2.2.5  | 2.2.5  |
| karma-webpack                            | 2.0.3   | 2.0.13 | 3.0.0  |
| mocha                                    | 3.4.2   | 3.5.3  | 5.2.0  |
| npm-run-all                              | 4.0.2   | 4.1.3  | 4.1.3  |
| phantomjs-prebuilt                       | 2.1.14  | 2.1.16 | 2.1.16 |
| preact                                   | 8.1.0   | 8.2.9  | 8.2.9  |
| sinon-chai                               | 2.11.0  | 2.14.0 | 3.2.0  |
| source-map-loader                        | 0.2.1   | 0.2.3  | 0.2.3  |
| standard                                 | 10.0.2  | 11.0.1 | 11.0.1 |
| wdio-mocha-framework                     | 0.5.10  | 0.5.13 | 0.6.2  |
| wdio-sauce-service                       | 0.4.0   | 0.4.10 | 0.4.10 |
| wdio-selenium-standalone-service         | 0.0.8   | 0.0.10 | 0.0.10 |
| wdio-spec-reporter                       | 0.1.0   | 0.1.5  | 0.1.5  |
| webdriverio                              | 4.8.0   | 4.13.1 | 4.13.1 |
| webpack                                  | 3.0.0   | 3.12.0 | 4.16.1 |
| webpack-dev-server                       | 2.5.0   | 2.11.2 | 3.1.4  |
| webpack-sources                          | 1.0.1   | 1.1.0  | 1.1.0  |

## 1.6.1 - 2017-09-25

- Fix role attr by moving `role='combobox'` to wrapper and adding `role='textbox'` to the input. By [@tobias-g](https://github.com/tobias-g)
- Fix examples page by removing unrequired npm package `v8-lazy-parse-webpack-plugin`
- Fix scrolling on iOS by reverting #85, new issue raised to find better fix for clicking custom suggestions #177
- Fix selection and timeout race condition. By [@tobias-g](https://github.com/tobias-g)
- Fix dropdown on IE to ensure it isn't focusable. By [@tobias-g](https://github.com/tobias-g)

## 1.6.0 - 2017-07-20

- [Feature] Allow customization of the dropdown arrow. By [@sventschui](https://github.com/sventschui).

## 1.5.0 - 2017-07-18

- [Feature] Add ability to translate texts. Relates to #96. By [@sventschui](https://github.com/sventschui).

## 1.4.2 - 2017-07-18

- Allow space to confirm an option, fixes #98.
- Add support for navigating lists on IE9, 10 and 11, fixes #193.

## 1.4.1 - 2017-07-06

- Fix use of HTML entities in enhanced select options. #151. By [@dracos](https://github.com/dracos).

## 1.4.0 - 2017-07-04

- [Feature] Add option to show all values on dropdown.  By [@joelanman](https://github.com/joelanman).

## 1.3.2 - 2017-07-03

- Redirect keypresses on an option to input, fixes #179.

## 1.3.1 - 2017-06-08

- Fix `autoselect: false` not working when using `enhanceSelectElement`.

## 1.3.0 - 2017-06-02

- [Feature] Add support for passing an array of strings to `source`. By [@joelanman](https://github.com/joelanman).

## 1.2.1 - 2017-05-24

- Fix progressive enhancement in FireFox < 48. By [@revilossor](https://github.com/revilossor).

## 1.2.0 - 2017-05-23

- [Feature] Export Preact and React bundles.

## 1.1.0 - 2017-05-18

- [Feature] Add `required` option. By [@samtsai](https://github.com/samtsai).

## 1.0.6 - 2017-05-17

- Update preact dependency to v8.1.0.

## 1.0.5 - 2017-05-16

- Add support for handling null/placeholder options when using `enhanceSelectElement`. Use `preserveNullOptions: true` to include options with `value=''` in the autocomplete results when enhancing a select element. By @lennym.

## 1.0.4 - 2017-05-15 (deprecated)

- This release does not contain any changes compared to the previous one and is due to a mistake in our build scripts.

## 1.0.3 - 2017-05-15

- Do not copy `name` attribute when using `enhanceSelectElement`. By [@lennym](https://github.com/lennym).

## 1.0.2 - 2017-05-12

- Add support for an empty `defaultValue` when enhancing a select element. By [@lennym](https://github.com/lennym).

## 1.0.1 - 2017-05-12

- Update `style` property in package.json to reflect updated filename. By [@lennym](https://github.com/lennym).

## 1.0.0 - 2017-05-10

- [Breaking] Default `autoselect` to `true` when using `enhanceSelectElement`.
- [Breaking] Make `id` a required attribute.
- [Breaking] Rename `onSelect` to `onConfirm`.
- [Breaking] Rename `selectOnBlur` to `confirmOnBlur`.
- Fix an issue where users couldn't click on custom suggestions on Chrome.

## 0.6.0 - 2017-05-10

- [Breaking] Rename component from `accessible-typeahead` to `accessible-autocomplete`.
- Default `defaultValue` when progressively enhancing.
- Throw an error when `enhanceSelectElement` is called without a `selectElement`.
- Throw errors when `accessibleAutocomplete` is called without `element` or `source`.

## 0.5.0 - 2017-05-09

- Test the typeahead with end to end tests.
- Don't display hints on browsers that don't support pointer-events.
- [Breaking] Rename `dist/styled.min.css` to `dist/accessible-typeahead.min.css`.
- [Breaking] Rename library main export from `AccessibleTypeahead` to `accessibleTypeahead`.
- Fix aria status region to more reliably trigger when the number of results stay the same.
- Fix hint rendering and being picked up by assistive technologies.
- More aria status region above input so it's more easily picked while navigating.

## 0.4.2 - 2017-05-03

- Add touchEnd handler for iOS and touch devices, fixes custom suggestions.
- Add `style` declaration in package.json
- Add support for UMD/commonjs module definition.

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
