# Contributing

Contributions welcome, please raise a pull request.

If you want to help and want to get more familiar with the codebase, try starting with the ["good for beginners"](https://github.com/alphagov/accessible-autocomplete/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+for+beginners%22) issues. Feel free to request more guidance in the issue comments.

## Requirements

You will need a recent version of Node and npm installed:

```bash
$ node -v
v7.10.0
$ npm -v
v5.0.0
```

If you want to run the selenium tests, you will also need a local copy of the Java Development Kit:

```bash
$ java -version
java version "1.8.0_131"
Java(TM) SE Runtime Environment (build 1.8.0_131-b11)
Java HotSpot(TM) 64-Bit Server VM (build 25.131-b11, mixed mode)
```

To install Node (with npm) and Java locally on macOS, you can use [brew](https://brew.sh/):

```bash
brew install node
brew cask install java
```

## Project structure

```
$ ls
coverage/    # Gets outputted by the tests, `open html/src/index.html` to see latest coverage reports.
dist/        # The compiled and ready to distribute build artefacts.
screenshots/ # Gets outputted by the end to end tests when something goes wrong.
examples/    # GitHub pages examples of using the autocomplete.
scripts/     # Build scripts that don't fit in `package.json`.
src/         # The source code for the library.
test/        # The tests for the library.
```

## Build tasks

To develop locally:

```bash
npm install
npm run dev
```

Contributions will need to pass the linter and tests. To run everything once:

```bash
npm test
```

To run the linter on its own:

```bash
npm run standard
```

To run the functional tests in dev mode (automatically reruns when a file changes):

```bash
npm run karma:dev
```

To run the integration tests locally with Chrome (specified in [wdio.config.js](test/wdio.config.js)):

```bash
npm run wdio
```

To run the integration tests on [Sauce Labs](https://saucelabs.com/), create a `.env` file with the following:

```bash
SAUCE_ENABLED="true"
SAUCE_USERNAME="XXXXXXXX"
SAUCE_ACCESS_KEY="YYYYYYYY"
```

And run the same command:

```bash
npm run wdio
```

Failed integration tests should output screenshots to the `./screenshots/` folder.

## Prepush checks

When you push to a branch, git will run a `npm run prepush` [script](scripts/check-staged.js) that will compile the build on your behalf to the `dist/` folder. If it then finds unstaged files in `dist/`, it will fail your push.

The solution is to commit the files, preferably as part of a separate commit:

```bash
git add dist/
git commit -m "Rebuild dist"
```

## PR nice to haves

- Tests for your feature or fix
- Updates to the README.md when necessary
- A 1 line update in CHANGELOG.md describing your changes

## Cutting a new release

Assuming you have access to the `npm` account, `git pull --rebase` and then run:

```bash
vim CHANGELOG.md # Update changelog, put all unreleased changes under new heading.
git commit -am "Update changelog"
npm version <major|minor|patch>
npm publish
```
