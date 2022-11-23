import webpack from 'webpack'
import path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
const ENV = process.env.NODE_ENV || 'development'

const developmentPlugins = [
  new CopyWebpackPlugin({
    patterns: [
      { from: './autocomplete.css', to: 'accessible-autocomplete.min.css' }
    ]
  })
]

const config = {
  context: path.resolve(__dirname, 'src'),

  optimization: {
    minimize: ENV === 'production',
    minimizer: [new TerserPlugin({
      parallel: true,
      terserOptions: {
        compress: {
          negate_iife: false,
          properties: false,
          ie8: true
        },
        mangle: {
          ie8: true
        },
        output: {
          comments: false,
          ie8: true
        }
      }
    })],
    emitOnErrors: false,
    splitChunks: false
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  node: {
    global: true,
    __filename: false,
    __dirname: false
  },

  mode: ENV === 'production' ? 'production' : 'development',
  devtool: ENV === 'production' ? 'source-map' : 'eval-cheap-module-source-map',

  devServer: {
    port: process.env.PORT || 'auto',
    host: '0.0.0.0',
    devMiddleware: {
      publicPath: '/dist/'
    },
    static: 'examples',
    historyApiFallback: true,
    open: true,
    allowedHosts: 'all'
  }
}

const bundleStandalone = {
  ...config,
  name: 'standalone',
  entry: './wrapper.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: ENV == 'production' ? '/' : undefined,
    filename: 'accessible-autocomplete.min.js',
    library: 'accessibleAutocomplete',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.COMPONENT_LIBRARY': '"PREACT"'
    })
  ]
    .concat(ENV === 'development'
      ? developmentPlugins
      : []
    )
}

const bundlePreact = {
  ...config,
  name: 'preact',
  entry: './autocomplete.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: ENV == 'production' ? '/' : undefined,
    filename: 'lib/accessible-autocomplete.preact.min.js',
    library: 'Autocomplete',
    libraryTarget: 'umd'
  },
  externals: {
    preact: {
      amd: 'preact',
      commonjs: 'preact',
      commonjs2: 'preact',
      root: 'preact'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.COMPONENT_LIBRARY': '"PREACT"'
    })
  ]
    .concat(ENV === 'development'
      ? developmentPlugins
      : []
    )
}

const bundleReact = {
  ...config,
  name: 'react',
  entry: './autocomplete.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: ENV == 'production' ? '/' : undefined,
    filename: 'lib/accessible-autocomplete.react.min.js',
    library: 'Autocomplete',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  externals: {
    preact: {
      amd: 'react',
      commonjs: 'react',
      commonjs2: 'react',
      root: 'React'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.COMPONENT_LIBRARY': '"REACT"'
    })
  ]
    .concat(ENV === 'development'
      ? developmentPlugins
      : []
    )
}

module.exports = [
  bundleStandalone,
  bundlePreact,
  bundleReact
]
