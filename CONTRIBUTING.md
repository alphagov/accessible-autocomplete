# Contributing

Contributions welcome, please raise a pull request.

If you want to help and want to get more familiar with the codebase, try starting with the ["good for beginners"](https://github.com/alphagov/accessible-autocomplete/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+for+beginners%22) issues. Feel free to request more guidance in the issue comments.

## Requirements

You will need a recent version of Node and npm installed. Check the `.nvmrc` for a recommended version:

```bash
$ node -v
v14.21.3
$ npm -v
v6.14.18
```

To install Node (with npm) locally on macOS, we recommend [brew](https://brew.sh) with
[nvm](https://github.com/nvm-sh/nvm):

```bash
brew install nvm
nvm install
```

## Project structure

```
$ ls
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

To build the project for distribution:

```bash
npm run build
```

You should do this and commit it before you attempt to `git push`, otherwise the prepush checks will prevent you from pushing.

## Prepush checks

When you push to a branch, git will run a `npm run prepush` [script](scripts/check-staged.mjs) that will compile the build on your behalf to the `dist/` folder. If it then finds unstaged files in `dist/`, it will fail your push.

The solution is to commit the files, preferably as part of a separate commit:

```bash
npm run build
git add dist/
git commit -m "Rebuild dist"
git push
```

If you want to ignore the checks and push regardless:

```bash
git push --no-verify
```

## PR nice to haves

- Tests for your feature or fix
- Updates to the README.md when necessary
- A 1 line update in CHANGELOG.md describing your changes

## Publishing a new version of accessible-autocomplete

### Tagging a new release on GitHub

1. Check out the **main** branch and pull the latest changes.
```

2. Ensure you're running the version of NodeJS matching [`.nvmrc`](/.nvmrc).

   - If you use NVM, run `nvm use` to set up the right version
   - If you use another management system (like [`asdf`](https://asdf-vm.com/guide/getting-started.html)), compare the output of `node --version` and install the right one if necessary

3. Run `npm ci` to make sure you have the exact dependencies installed.

4. Pick a new version number according to the [versioning documentation](/docs/contributing/versioning.md) and apply it by running:

   ```shell
   npm version <NEW VERSION NUMBER> --no-git-tag-version --workspace govuk-frontend
   ```

   This step will update [`govuk-frontend`'s `package.json`](/packages/govuk-frontend/package.json) and project [`package-lock.json`](/package-lock.json) files.

   Do not commit the changes.

5. Create and check out a new branch (`release-[version]`)

   ```shell
   git switch -c "release-$(npm run version --silent --workspace govuk-frontend)"

6. Update the [`CHANGELOG.md`](/CHANGELOG.md) by:

   - changing the 'Unreleased' heading to the new version number and release type. For example, '3.11.0 (Feature release)'
   - adding a new 'Unreleased' heading above the new version number and release type, so users will know where to add PRs to the changelog
   - if the changelog has headings from [pre-releases](/docs/releasing/publishing-a-pre-release.md#publish-a-new-version-of-govuk-frontend), regroup the content under those headings in a single block
   - saving your changes

7. Commit the changes and push them to GitHub

```bash
git commit -m "Release v$(npm run version --silent --workspace govuk-frontend)"
git tag "v$(npm run version --silent --workspace govuk-frontend)"
git push --tags
```

8. Create a pull request and copy the changelog text.
   When reviewing the PR, check that the version numbers have been updated.

9. Once a reviewer approves the pull request, merge it to **main**.

### Publish the release to npm

1. Check out the **main** branch and pull the latest changes.
2. Sign in to npm (`npm login`), using the credentials for the govuk-patterns-and-tools npm user from Bitwarden.
3. Run `npm publish` to publish to npm.
4. Verify the presence of the release and its tag on [npm](https://www.npmjs.com/package/accessible-autocomplete?activeTab=versions)
5. Run `npm logout` to log out from npm in the command line. If you've logged in through your browser, remember to log out from <https://npmjs.com> there as well.

### Create a new release on GitHub

To create a new GitHub release, do the following:

1. Select the tag corresponding to the release in [the list of tags on GitHub](https://github.com/alphagov/govuk-frontend/tags)
2. Press **Create release from tag**
3. Set `v<VERSION_NUMBER>` as the title
4. Add release notes from [`CHANGELOG.md`](/CHANGELOG.md)
5. Publish release

  You do not need to manually attach source code files to the release on GitHub.

### Announce the new release

Post a short summary of the release in the cross-government and GDS #govuk-design-system Slack channels. For example:

> 🚀 We’ve just released Accessible Autocomplete v\<VERSION_NUMBER>. 
>
> * Summary of change 1
> * Summary of change 2
> * ...
>
> You can find more details about these changes in [the release’s changelog](https://github.com/alphagov/accessible-autocomplete/releases/tag/v<VERSION_NUMBER>), including how to adjust to the breaking changes.
>
> Thanks to @\<SLACK_NAME_OR_GITHUB_NAME> and @\<SLACK_NAME_OR_GITHUB_NAME> for helping with this release.
