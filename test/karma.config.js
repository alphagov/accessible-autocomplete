require('@babel/register')({
  rootMode: 'upward'
})

const puppeteer = require('puppeteer')
const webpackConfig = require('../webpack.config.mjs')

// Use Chrome headless
process.env.CHROME_BIN = puppeteer.executablePath()

module.exports = function (config) {
  config.set({
    basePath: '../',
    frameworks: ['mocha', 'webpack'],
    reporters: ['mocha'],

    browsers: ['ChromeHeadless'],

    files: [
      'test/functional/**/*.js'
    ],

    preprocessors: {
      'test/**/*.js': ['webpack'],
      'src/**/*.js': ['webpack'],
      '**/*.js': ['sourcemap']
    },

    webpack: {
      // Use standalone webpack config [0] rather
      // than Preact [1] or React [2] configs
      ...webpackConfig.default[0],

      // Use Karma managed test entry points
      entry: undefined,

      // Use Karma default `os.tmpdir()` output
      output: undefined,

      // Suppress webpack performance warnings due to
      // Karma chunked output and inline source maps
      performance: { hints: false },
      stats: { preset: 'errors-only' }
    }
  })
}
