require('dotenv').config()
require('@babel/register')({
  rootMode: 'upward'
})

const { join } = require('path')
const { cwd } = require('process')
const puppeteer = require('puppeteer')

const {
  PORT = 4567,
  SAUCE_ACCESS_KEY,
  SAUCE_BUILD_NUMBER,
  SAUCE_ENABLED,
  SAUCE_USERNAME
} = process.env

/**
 * Browsers for local tests
 *
 * @type {RemoteCapabilities}
 */
const capabilitiesLocal = [
  {
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: ['--headless=new'],
      binary: puppeteer.executablePath()
    }
  }
]

/**
 * Browsers for Sauce Labs tests
 *
 * @type {RemoteCapabilities}
 */
const capabilitiesSauce = [
  {
    browserName: 'chrome',
    browserVersion: 'latest',
    platformName: 'Windows 10',
    'sauce:options': {
      build: SAUCE_BUILD_NUMBER
    }
  },
  {
    browserName: 'firefox',
    browserVersion: '55',
    platformName: 'Windows 10',
    'sauce:options': {
      build: SAUCE_BUILD_NUMBER
    }
  },
  {
    browserName: 'internet explorer',
    browserVersion: 'latest',
    platformName: 'Windows 10',
    'sauce:options': {
      build: SAUCE_BUILD_NUMBER
    }
  }
]

/**
 * WebdriverIO config
 *
 * @type {Testrunner}
 */
exports.config = {
  user: SAUCE_USERNAME,
  key: SAUCE_ACCESS_KEY,

  // Use DevTools prototype for Puppeteer
  automationProtocol: SAUCE_ENABLED === 'true'
    ? 'webdriver'
    : 'devtools',

  baseUrl: `http://localhost:${PORT}`,

  capabilities: SAUCE_ENABLED === 'true'
    ? capabilitiesSauce
    : capabilitiesLocal,

  framework: 'mocha',
  outputDir: join(cwd(), 'logs'),
  reporters: ['spec'],

  services: [
    /**
     * Web server options
     *
     * @type {[string, StaticServerOptions]}
     */
    ['static-server', {
      folders: [
        { mount: '/', path: join(cwd(), 'examples') },
        { mount: '/dist/', path: join(cwd(), 'dist') }
      ],
      port: PORT
    }],

    /**
     * Browser testing options
     *
     * @type {[string, SauceServiceConfig]}
     */
    ['sauce', {
      // Optionally connect to Sauce Labs
      sauceConnect: SAUCE_ENABLED === 'true'
    }]
  ],

  specs: [join(cwd(), 'test/integration/**/*.js')],
  waitforTimeout: 30 * 10000
}

/**
 * @typedef {import('@wdio/types').Options.Testrunner} Testrunner
 * @typedef {import('@wdio/types').Capabilities.RemoteCapabilities} RemoteCapabilities
 * @typedef {import('@wdio/static-server-service').StaticServerOptions} StaticServerOptions
 * @typedef {import('@wdio/sauce-service').SauceServiceConfig} SauceServiceConfig
 */
