require('dotenv').config()
require('@babel/register')({
  rootMode: 'upward'
})

const { join } = require('path')
const { cwd } = require('process')
const puppeteer = require('puppeteer')
const staticServerPort = process.env.PORT || 4567
const services = [
  ['static-server', {
    folders: [
      { mount: '/', path: join(cwd(), 'examples') },
      { mount: '/dist/', path: join(cwd(), 'dist') }
    ],
    port: staticServerPort
  }]
]

const sauceEnabled = process.env.SAUCE_ENABLED === 'true'
const sauceUser = process.env.SAUCE_USERNAME
const sauceKey = process.env.SAUCE_ACCESS_KEY
const buildNumber = process.env.SAUCE_BUILD_NUMBER

const sauceConfig = {
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
    }
  ],
  services: services.concat([['sauce', { sauceConnect: true }]])
}

const puppeteerConfig = {
  automationProtocol: 'devtools',
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
  services
}

exports.config = Object.assign({
  outputDir: join(cwd(), 'logs'),
  specs: [join(cwd(), 'test/integration/**/*.js')],
  baseUrl: `http://localhost:${staticServerPort}`,
  reporters: ['spec'],
  framework: 'mocha',
  mochaOpts: { timeout: 30 * 1000 }
}, sauceEnabled ? sauceConfig : puppeteerConfig)
