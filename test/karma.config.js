require('@babel/register')({
  cwd: require('path').resolve(__dirname, '../')
})
const puppeteer = require('puppeteer')
const webpack = require('webpack')

// Use Chrome headless
process.env.CHROME_BIN = puppeteer.executablePath()

module.exports = function (config) {
  config.set({
    basePath: '../',
    frameworks: ['mocha', 'chai-sinon', 'webpack'],
    reporters: ['mocha'],

    browsers: ['ChromeHeadless'],

    files: [
      { pattern: 'test/functional/**/*.js', watched: false }
    ],

    preprocessors: {
      'test/**/*.js': ['webpack'],
      'src/**/*.js': ['webpack'],
      '**/*.js': ['sourcemap']
    },

    webpack: {
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
        ]
      },
      plugins: [
        new webpack.DefinePlugin({ 'process.env.COMPONENT_LIBRARY': '"PREACT"' })
      ]
    }
  })
}
