# Contributing

Contributions welcome, please raise a pull request.

To develop locally:

```bash
npm install
npm run dev
```

Contributions will need to pass the linter and tests. To run everything once:

```
npm test
```

To run the tests in dev mode (automatically reruns when a file changes):

```
npm run test:dev
```

## Cutting a new release

```bash
npm version <major|minor|patch>
vim CHANGELOG.md # Update changelog, put all unreleased changes under new heading.
vim README.md # Update readme, bump all hard-coded version numbers, file size if necessary.
git commit -am "Update readme and changelog"
git push
npm publish
```
