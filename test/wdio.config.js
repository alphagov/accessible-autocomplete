require('@babel/register')({
  cwd: require('path').resolve(__dirname, '../')
})
require('dotenv').config()
const puppeteer = require('puppeteer')
const webpackConfig = require('../webpack.config.babel.js')
const webpackPort = webpackConfig[0].devServer.port
const staticServerPort = process.env.PORT || 4567
const services = ['webpack-dev-server', 'static-server']

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
        platform: 'Windows 10',
        version: '55.0'
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
    // { browserName: 'firefox' },
    {
      browserName: 'chrome',
      chromeOptions: {
        args: ['--headless'],
        binary: puppeteer.executablePath()
      }
    }
  ],
  baseUrl: 'http://localhost:' + staticServerPort,
  screenshotPath: './screenshots/',
  services: services.concat(['selenium-standalone']),
  reporters: ['spec'],
  framework: 'mocha',
  mochaOpts: { timeout: 30 * 1000 },
  webpackConfig,
  webpackPort,
  staticServerFolders: [
    { mount: '/', path: './examples' },
    { mount: '/dist/', path: './dist' }
  ],
  staticServerPort
}, sauceConfig)
