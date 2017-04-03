# Accessibility Acceptance Criteria

Authors: [Theodor Vararu](https://github.com/tvararu), [Léonie Watson](https://github.com/LJWatson).

## What's this?

This describes the necessary behaviours that a typeahead (referred in this document as an "autocomplete") needs to meet to be usable by assistive technologies.

They are useful if you are evaluating `accessible-typeahead`, or a different autocomplete solution.

## User story

> As an Assistive Technology (AT) user, I want to be able to search using autocomplete, so I can find and choose a matching result easily and accurately.

## Acceptance criteria

The field with autocomplete must:

- Be focusable with a keyboard
- Indicate when it has keyboard focus
- Inform the user that it is an editable field
- Inform the user that autocomplete is available
- Explain how to use autocomplete
- Inform the user that content has been expanded
- Inform the user that N number of matches have been displayed
- Inform the user as the number of matches changes
- Enable the user to navigate the available matches
- Inform the user when a match is selected
- Inform the user which number the currently selected match is (1 of 3 for example)
- Enable the user to confirm the selected match
- Return focus to the editable field when a selected match is confirmed
