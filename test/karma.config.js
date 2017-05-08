require('babel-register')
var webpack = require('../webpack.config.babel.js')
var path = require('path')

webpack.module.rules.push({
  test: /\.js?$/,
  include: path.resolve(__dirname, '../src'),
  loader: 'isparta-loader'
})

module.exports = function (config) {
  config.set({
    basePath: '../',
    frameworks: ['mocha', 'chai-sinon'],
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      reporters: [
        {
          type: 'text-summary'
        },
        {
          type: 'html',
          dir: 'coverage',
          subdir: '.'
        }
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
    webpackMiddleware: { noInfo: true }
  })
}
