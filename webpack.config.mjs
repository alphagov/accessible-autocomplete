import { join } from 'path'
import { cwd } from 'process'

import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import webpack from 'webpack'

const {
  NODE_ENV = 'development',
  PORT = 8080
} = process.env

/**
 * Base webpack build mode
 */
const mode = ['development', 'test'].includes(NODE_ENV)
  ? 'development'
  : 'production'

/**
 * Base webpack config
 *
 * @satisfies {WebpackConfiguration}
 */
const config = {
  bail: mode === 'production',
  context: join(cwd(), 'src'),

  devtool: mode === 'development'
    ? 'inline-source-map'
    : 'source-map',

  externalsType: 'umd',
  mode,

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
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
    emitOnErrors: mode === 'production',
    minimize: mode === 'production',
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
    static: [
      {
        directory: join(cwd(), 'examples'),
        publicPath: '/dist',
        watch: true
      }
    ]
  },

  entry: {
    'accessible-autocomplete': {
      import: [
        join(cwd(), 'src/autocomplete.css'),
        join(cwd(), 'src/wrapper.js')
      ],
      filename: '[name].min.js',
      library: {
        export: 'default',
        name: 'accessibleAutocomplete',
        type: 'umd'
      }
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.COMPONENT_LIBRARY': '"PREACT"',
      'process.env.NODE_ENV': `"${mode}"`
    }),
    new MiniCssExtractPlugin({
      filename: '[name].min.css'
    })
  ]
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

    // Support `window.preact` when not bundled
    // e.g. with all dependencies included via unpkg.com
    globalObject: 'this'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.COMPONENT_LIBRARY': '"PREACT"',
      'process.env.NODE_ENV': `"${mode}"`
    })
  ]
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
    preact: {
      amd: 'react',
      commonjs: 'react',
      commonjs2: 'react',
      root: 'React'
    }
  },

  output: {
    ...config.output,

    // Support extending `window.React` when not bundled
    // e.g. with all dependencies included via unpkg.com
    globalObject: 'this'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.COMPONENT_LIBRARY': '"REACT"',
      'process.env.NODE_ENV': `"${mode}"`
    })
  ]
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
