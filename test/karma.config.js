require('@babel/register')({
  cwd: require('path').resolve(__dirname, '../')
})
var webpack = require('../webpack.config.babel.js')[0]

module.exports = function (config) {
  config.set({
    basePath: '../',
    frameworks: ['mocha', 'chai-sinon'],
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'text-summary' },
        { type: 'html', subdir: 'html' },
        { type: 'lcov', subdir: 'lcov' }
      ]
    },

    browsers: ['PhantomJS'],

    files: [
      'test/functional/**/*.js'
    ],

    preprocessors: {
      'test/**/*.js': ['webpack'],
      'src/**/*.js': ['webpack'],
      '**/*.js': ['sourcemap']
    },

    webpack: webpack,
    webpackMiddleware: {
      logLevel: 'error',
      stats: 'errors-only'
    }
  })
}
