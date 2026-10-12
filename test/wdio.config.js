require('dotenv').config()
require('@babel/register')({
  rootMode: 'upward'
})

const { join } = require('path')
const { cwd } = require('process')

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
      // Chrome won't run on CI unless the `--no-sandbox` and `--disable-setuid-sandbox` flags are applied
      // otherwise, it runs into the same kind of issue as Karma and Puppeteer:
      // https://github.com/Googlechrome/puppeteer/issues/290
      args: [
        '--headless=new',
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
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
const config = {
  baseUrl: `http://localhost:${PORT}`,

  capabilities: capabilitiesLocal,

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
    }]
  ],

  specs: [join(cwd(), 'test/integration/**/*.js')],
  waitforTimeout: 30 * 10000
}

if (SAUCE_ENABLED === 'true') {
  config.user = SAUCE_USERNAME
  config.key = SAUCE_ACCESS_KEY
  config.capabilities = capabilitiesSauce
  config.services.push([
    'sauce', { sauceConnect: true }
  ])
}

exports.config = config

/**
 * @typedef {import('@wdio/types').Options.Testrunner} Testrunner
 * @typedef {import('@wdio/types').Capabilities.RemoteCapabilities} RemoteCapabilities
 * @typedef {import('@wdio/static-server-service').StaticServerOptions} StaticServerOptions
 * @typedef {import('@wdio/sauce-service').SauceServiceConfig} SauceServiceConfig
 */
