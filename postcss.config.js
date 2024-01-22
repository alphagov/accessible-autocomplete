const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const cssnanoPresetDefault = require('cssnano-preset-default')

/**
 * PostCSS config
 */
module.exports = {
  plugins: [
    // Add vendor prefixes
    autoprefixer({ env: 'stylesheets' }),

    // Always minify CSS
    cssnano({ preset: [cssnanoPresetDefault] })
  ]
}
