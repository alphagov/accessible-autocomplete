import webpack from 'webpack'
import path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
const ENV = process.env.NODE_ENV || 'development'

const plugins = [
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(ENV)
  })
]

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
    })]
  },

  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      'node_modules'
    ]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        enforce: 'pre',
        loader: 'source-map-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  stats: { colors: true },

  node: {
    global: true,
    __filename: false,
    __dirname: false
  },

  mode: ENV === 'production' ? 'production' : 'development',
  devtool: ENV === 'production' ? 'source-map' : false,

  devServer: {
    port: process.env.PORT || 'auto',
    host: '0.0.0.0',
    devMiddleware: {
      publicPath: '/dist/'
    },
    static: [path.join(__dirname, 'examples'), path.join(__dirname, 'src')],
    historyApiFallback: true,
    open: true,
    allowedHosts: 'all'
  }
}

const bundleStandalone = {
  ...config,
  entry: {
    'accessible-autocomplete.min': './wrapper.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
    library: 'accessibleAutocomplete',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  plugins: plugins
    .concat([new webpack.DefinePlugin({
      'process.env.COMPONENT_LIBRARY': '"PREACT"'
    })])
    .concat(ENV === 'development'
      ? developmentPlugins
      : []
    )
}

const bundlePreact = {
  ...config,
  entry: {
    'lib/accessible-autocomplete.preact.min': './autocomplete.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
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
  plugins: plugins
    .concat([new webpack.DefinePlugin({
      'process.env.COMPONENT_LIBRARY': '"PREACT"'
    })])
    .concat(ENV === 'development'
      ? developmentPlugins
      : []
    )
}

const bundleReact = {
  ...config,
  entry: {
    'lib/accessible-autocomplete.react.min': './autocomplete.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
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
  plugins: plugins
    .concat([new webpack.DefinePlugin({
      'process.env.COMPONENT_LIBRARY': '"REACT"'
    })])
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
