/**
 * Babel config
 *
 * @type {import('@babel/core').ConfigFunction}
 */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        corejs: '3.33',
        loose: true,
        shippedProposals: true,
        useBuiltIns: 'usage'
      }
    ]
  ],

  plugins: [
    ['@babel/plugin-transform-react-jsx', { pragma: 'h' }]
  ],

  env: {
    test: {
      plugins: ['istanbul']
    }
  }
}
