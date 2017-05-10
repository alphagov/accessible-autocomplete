import webpack from 'webpack'
import ReplacePlugin from 'replace-bundle-webpack-plugin'
import path from 'path'
import V8LazyParseWebpackPlugin from 'v8-lazy-parse-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
const ENV = process.env.NODE_ENV || 'development'

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: ['./wrapper.js'],

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'accessible-autocomplete.min.js',
    library: 'accessibleAutocomplete',
    libraryTarget: 'umd'
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

  plugins: ([
    new webpack.NoEmitOnErrorsPlugin(),
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
  ] : [
    new CopyWebpackPlugin([
      { from: './autocomplete.css', to: 'accessible-autocomplete.min.css' }
    ])
  ]),

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
    publicPath: '/dist/',
    contentBase: ['./examples', './src'],
    historyApiFallback: true,
    open: true,
    watchContentBase: true,
    disableHostCheck: true
  }
}
