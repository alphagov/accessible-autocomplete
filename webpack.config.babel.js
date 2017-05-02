import webpack from 'webpack'
import ReplacePlugin from 'replace-bundle-webpack-plugin'
import path from 'path'
import V8LazyParseWebpackPlugin from 'v8-lazy-parse-webpack-plugin'
const ENV = process.env.NODE_ENV || 'development'

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './wrapper.jsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'accessible-typeahead.min.js'
  },

  resolve: {
    extensions: ['', '.jsx', '.js'],
    modulesDirectories: [
      path.resolve(__dirname, 'node_modules'),
      'node_modules'
    ]
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, 'src'),
        loader: 'source-map'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  plugins: ([
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV)
    })
  ]).concat(ENV === 'production' ? [
    new V8LazyParseWebpackPlugin(),
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
  ] : []),

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
    port: process.env.PORT || 8080,
    host: 'localhost',
    colors: true,
    publicPath: '/dist/',
    contentBase: './examples',
    historyApiFallback: true,
    open: true,
    watchContentBase: true
  }
}
