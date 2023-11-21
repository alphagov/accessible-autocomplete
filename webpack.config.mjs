import { join } from 'path'
import { cwd } from 'process'

import TerserPlugin from 'terser-webpack-plugin'
import webpack from 'webpack'

const ENV = process.env.NODE_ENV || 'development'
const PORT = process.env.PORT || 8080

const plugins = [
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(ENV)
  })
]

/**
 * Base webpack config
 *
 * @satisfies {WebpackConfiguration}
 */
const config = {
  context: join(cwd(), 'src'),

  devtool: ENV === 'development'
    ? 'inline-source-map'
    : 'source-map',

  externalsType: 'umd',

  mode: ENV === 'development'
    ? 'development'
    : 'production',

  module: {
    rules: [
      {
        test: /\.js$/,
        include: join(cwd(), 'src'),
        enforce: 'pre',
        loader: 'source-map-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            rootMode: 'upward'
          }
        }
      }
    ]
  },

  node: {
    global: true,
    __filename: false,
    __dirname: false
  },

  optimization: {
    minimize: ENV === 'production',
    minimizer: [new TerserPlugin({
      extractComments: true,
      terserOptions: {
        format: { comments: false },

        // Include sources content from dependency source maps
        sourceMap: {
          includeSources: true
        },

        // Compatibility workarounds
        safari10: true
      }
    })]
  },

  output: {
    path: join(cwd(), 'dist'),
    publicPath: '/dist'
  },

  stats: {
    colors: true
  }
}

/**
 * Bundle standalone 'accessible-autocomplete'
 *
 * @satisfies {WebpackConfiguration}
 */
const bundleStandalone = {
  ...config,

  devServer: {
    allowedHosts: 'all',
    host: '0.0.0.0',
    open: '/dist',
    port: PORT,
    proxy: {
      '/dist/accessible-autocomplete.min.css': {
        target: `http://0.0.0.0:${PORT}`,
        pathRewrite: () => '/dist/autocomplete.css'
      }
    },
    static: [
      {
        directory: join(cwd(), 'src'),
        publicPath: '/dist',
        watch: true
      },
      {
        directory: join(cwd(), 'examples'),
        publicPath: '/dist',
        watch: true
      }
    ]
  },

  entry: {
    'accessible-autocomplete': {
      import: join(cwd(), 'src/wrapper.js'),
      filename: '[name].min.js',
      library: {
        export: 'default',
        name: 'accessibleAutocomplete',
        type: 'umd'
      }
    }
  },

  plugins: plugins
    .concat([new webpack.DefinePlugin({
      'process.env.COMPONENT_LIBRARY': '"PREACT"'
    })])
}

/**
 * Bundle for Preact 'accessible-autocomplete/preact.js'
 *
 * @satisfies {WebpackConfiguration}
 */
const bundlePreact = {
  ...config,

  entry: {
    'accessible-autocomplete.preact': {
      import: join(cwd(), 'src/autocomplete.js'),
      filename: 'lib/[name].min.js',
      library: {
        name: 'Autocomplete',
        type: 'umd',
        umdNamedDefine: true
      }
    }
  },

  externals: {
    preact: 'preact'
  },

  output: {
    ...config.output,
    globalObject: 'window'
  },

  plugins: plugins
    .concat([new webpack.DefinePlugin({
      'process.env.COMPONENT_LIBRARY': '"PREACT"'
    })])
}

/**
 * Bundle for React 'accessible-autocomplete/react.js'
 *
 * @satisfies {WebpackConfiguration}
 */
const bundleReact = {
  ...config,

  entry: {
    'accessible-autocomplete.react': {
      import: join(cwd(), 'src/autocomplete.js'),
      filename: 'lib/[name].min.js',
      library: {
        name: 'Autocomplete',
        type: 'umd',
        umdNamedDefine: true
      }
    }
  },

  externals: {
    preact: 'React'
  },

  output: {
    ...config.output,
    globalObject: 'window'
  },

  plugins: plugins
    .concat([new webpack.DefinePlugin({
      'process.env.COMPONENT_LIBRARY': '"REACT"'
    })])
}

/**
 * Multiple webpack config export
 */
export default [
  bundleStandalone,
  bundlePreact,
  bundleReact
]

/**
 * @typedef {import('webpack-dev-server').WebpackConfiguration} WebpackConfiguration
 */
