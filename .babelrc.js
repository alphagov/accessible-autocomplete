module.exports = {
  presets: [
    ['@babel/preset-env', {
      shippedProposals: true,
      useBuiltIns: 'usage',
      loose: true,
      corejs: 3
    }]
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-transform-react-jsx', { pragma: 'h' }],

    // Improve legacy IE compatibility
    ['@babel/plugin-transform-modules-commonjs', { loose: true }],
    '@babel/plugin-transform-member-expression-literals',
    '@babel/plugin-transform-property-literals'
  ],
  env: {
    test: {
      plugins: [
        'istanbul'
      ]
    }
  }
};
