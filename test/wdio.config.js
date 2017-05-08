require('babel-register')
require('dotenv').config()
const webpackConfig = require('../webpack.config.babel.js')
const staticServerPort = process.env.PORT || 4567
const services = ['webpack', 'static-server']

const sauceEnabled = process.env.SAUCE_ENABLED === 'true'
const sauceUser = process.env.SAUCE_USERNAME
const sauceKey = process.env.SAUCE_ACCESS_KEY
const buildNumber = process.env.TRAVIS_BUILD_NUMBER
const sauceConfig = sauceEnabled
  ? {
    user: sauceUser,
    key: sauceKey,
    capabilities: [
      {
        browserName: 'chrome',
        build: buildNumber,
        platform: 'Windows 10'
      },
      {
        browserName: 'firefox',
        build: buildNumber,
        platform: 'Linux'
      },
      {
        browserName: 'internet explorer',
        build: buildNumber,
        platform: 'Windows 10',
        version: '11.103'
      },
      {
        browserName: 'internet explorer',
        build: buildNumber,
        platform: 'Windows 7',
        version: '10'
      },
      {
        browserName: 'internet explorer',
        build: buildNumber,
        platform: 'Windows 7',
        version: '9'
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
  mochaOpts: { timeout: 30 * 1000 },
  webpackConfig,
  staticServerFolders: [
    { mount: '/', path: './examples' },
    { mount: '/dist/', path: './dist' }
  ],
  staticServerPort
}, sauceConfig)
