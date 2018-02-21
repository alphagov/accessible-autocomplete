import webpack from 'webpack'
import ReplacePlugin from 'replace-bundle-webpack-plugin'
import path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'
const ENV = process.env.NODE_ENV || 'development'

const plugins = [
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(ENV)
  })
]

const productionPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false
    },
    compress: {
      warnings: false,
      conditionals: true,
      unused: true,
      comparisons: true,
      sequences: true,
      dead_code: true,
      evaluate: true,
      if_return: true,
      join_vars: true,
      negate_iife: false
    }
  }),

  // strip out babel-helper invariant checks
  new ReplacePlugin([{
    // this is actually the property name https://github.com/kimhou/replace-bundle-webpack-plugin/issues/1
    partten: /throw\s+(new\s+)?[a-zA-Z]+Error\s*\(/g,
    replacement: () => 'return;('
  }])
]

const developmentPlugins = [
  new CopyWebpackPlugin([
    { from: './autocomplete.css', to: 'accessible-autocomplete.min.css' }
  ])
]

const config = {
  context: path.resolve(__dirname, 'src'),

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
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
    setImmediate: false
  },

  devtool: ENV === 'production' ? 'source-map' : 'cheap-module-eval-source-map',

  devServer: {
    setup (app) {
      app.get('/dist/:filename', (request, response) => {
        response.redirect('/' + request.params.filename)
      })
    },
    port: process.env.PORT || 8080,
    host: 'localhost',
    publicPath: '/dist/',
    contentBase: ['./examples', './src'],
    historyApiFallback: true,
    open: true,
    watchContentBase: true,
    disableHostCheck: true
  }
}

const bundleStandalone = {
  ...config,
  entry: ['./wrapper.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'accessible-autocomplete.min.js',
    library: 'accessibleAutocomplete',
    libraryTarget: 'umd'
  },
  plugins: plugins
    .concat([new webpack.DefinePlugin({
      'process.env.COMPONENT_LIBRARY': '"PREACT"'
    })])
    .concat(ENV === 'production'
      ? productionPlugins
      : developmentPlugins
    )
}

const bundlePreact = {
  ...config,
  entry: ['./autocomplete.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
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
  plugins: plugins
    .concat([new webpack.DefinePlugin({
      'process.env.COMPONENT_LIBRARY': '"PREACT"'
    })])
    .concat(ENV === 'production'
      ? productionPlugins
      : developmentPlugins
    )
}

const bundleReact = {
  ...config,
  entry: ['./autocomplete.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'lib/accessible-autocomplete.react.min.js',
    library: 'Autocomplete',
    libraryTarget: 'umd'
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
    .concat(ENV === 'production'
      ? productionPlugins
      : developmentPlugins
    )
}

module.exports = [
  bundleStandalone,
  bundlePreact,
  bundleReact
]
