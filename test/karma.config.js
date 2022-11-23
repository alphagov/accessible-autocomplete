require('@babel/register')({
  cwd: require('path').resolve(__dirname, '../')
})
const puppeteer = require('puppeteer')
const webpack = require('../webpack.config.babel.js')[0]

// Use Chrome headless
process.env.CHROME_BIN = puppeteer.executablePath()

module.exports = function (config) {
  config.set({
    basePath: '../',
    frameworks: ['mocha', 'chai-sinon'],
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
