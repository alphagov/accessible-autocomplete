const autoprefixer = require('autoprefixer')

/**
 * PostCSS config
 */
module.exports = {
  plugins: [
    // Add vendor prefixes
    autoprefixer({ env: 'stylesheets' })
  ]
}
