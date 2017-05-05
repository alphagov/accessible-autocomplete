require('babel-register')
require('dotenv').config()
const webpackConfig = require('../webpack.config.babel.js')
const staticServerPort = process.env.PORT || 4567
const services = ['webpack', 'static-server']

const sauceEnabled = process.env.SAUCE_ENABLED === 'true'
const sauceUser = process.env.SAUCE_USERNAME
const sauceKey = process.env.SAUCE_ACCESS_KEY
const sauceConfig = sauceEnabled
  ? {
    user: sauceUser,
    key: sauceKey,
    capabilities: [
      {
        browserName: 'chrome',
        build: process.env.TRAVIS_BUILD_NUMBER
      }
    ],
    services: services.concat(['sauce']),
    sauceConnect: true
  }
  : {}

exports.config = Object.assign({
  specs: ['./test/integration/**/*.js'],
  capabilities: [
    { browserName: 'phantom' }
  ],
  baseUrl: 'http://localhost:' + staticServerPort,
  screenshotPath: './screenshots/',
  services: services.concat(['phantomjs']),
  reporters: ['spec'],
  framework: 'mocha',
  webpackConfig,
  staticServerFolders: [
    { mount: '/', path: './examples' },
    { mount: '/dist/', path: './dist' }
  ],
  staticServerPort
}, sauceConfig)
