require('@babel/register')({
  rootMode: 'upward'
})

const puppeteer = require('puppeteer')
const webpack = require('../webpack.config.mjs').default[0]

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

    webpack,
    webpackMiddleware: {
      logLevel: 'error',
      stats: 'errors-only'
    }
  })
}
