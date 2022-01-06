require('dotenv').config()
const puppeteer = require('puppeteer')
const staticServerPort = process.env.PORT || 4567
const services = [
  ['static-server', {
    folders: [
      { mount: '/', path: './examples' },
      { mount: '/dist/', path: './dist' }
    ],
    port: staticServerPort
  }]
]

const sauceEnabled = process.env.SAUCE_ENABLED === 'true'
const sauceUser = process.env.SAUCE_USERNAME
const sauceKey = process.env.SAUCE_ACCESS_KEY
const buildNumber = process.env.SAUCE_BUILD_NUMBER
const sauceConfig = sauceEnabled
  ? {
    user: sauceUser,
    key: sauceKey,
    capabilities: [
      {
        browserName: 'chrome',
        platformName: 'Windows 10',
        'sauce:options': {
          build: buildNumber
        }
      },
      {
        browserName: 'firefox',
        browserVersion: '55',
        platformName: 'Windows 10',
        'sauce:options': {
          build: buildNumber
        }
      },
      {
        browserName: 'internet explorer',
        browserVersion: '11.285',
        platformName: 'Windows 10',
        'sauce:options': {
          build: buildNumber
        }
      },
      {
        browserName: 'internet explorer',
        browserVersion: '10',
        platformName: 'Windows 7',
        'sauce:options': {
          build: buildNumber
        }
      },
      /* IE9 on Sauce Labs needs to use legacy JSON Wire Protocol */
      {
        browserName: 'internet explorer',
        version: '9',
        platform: 'Windows 7',
        build: buildNumber
      }
    ],
    services: services.concat([['sauce', { sauceConnect: true }]])
  }
  : {}

exports.config = Object.assign({
  outputDir: './logs/',
  specs: ['./test/integration/**/*.js'],
  capabilities: [
    // { browserName: 'firefox' },
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
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
  mochaOpts: { timeout: 30 * 1000 }
}, sauceConfig)
