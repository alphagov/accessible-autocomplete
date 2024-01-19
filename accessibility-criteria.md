# Accessibility Acceptance Criteria

Authors: [Theodor Vararu](https://github.com/tvararu), [Léonie Watson](https://github.com/LJWatson), [Ed Horsford](https://github.com/edwardhorsford).

## What's this?

This describes the necessary behaviours that an autocomplete needs to meet to be usable by assistive technologies.

They are useful if you are evaluating `accessible-autocomplete`, or a different autocomplete solution.

## User story

> As an Assistive Technology (AT) user, I want to be able to search using autocomplete, so I can find and choose a matching result easily and accurately.

## Acceptance criteria

The field with autocomplete must:

1. Be focusable with a keyboard
1. Indicate when it has keyboard focus
1. Inform the user that it is an editable field
1. Inform the user if there is a pre-filled value
1. Inform the user that autocomplete is available
1. Explain how to use autocomplete
1. Inform the user that content has been expanded
1. Inform the user when there are matches, or if there are no matches
1. (Optional) Inform the user how many matches are currently available
1. Inform the user as the number of matches changes
1. Enable the user to navigate the available matches, using just one input method (pointer, mouse, touch or keyboard)
1. Enable the user to navigate the available matches, with a single action at a time (no dragging movements or multi-key presses needed)
1. Inform the user when a match is selected
1. (Optional) Inform the user which number the currently selected match is (1 of 3 for example)
1. Inform the user if a match is pre-selected
1. Enable the user to confirm the selected match
1. Inform the user when a match is confirmed
1. Return focus to the editable field when a selected match is confirmed

Helpful definitions:

- `navigate`: When the user selects between matches
- `selected`: When one of the matches is highlighted, and ready to be confirmed, for example by pressing `enter`
- `pre-selected`: When an item is selected on the user's behalf without them navigating to it
- `confirmed`: When one of the matches has been confirmed, and will be submitted as a value of the parent form
