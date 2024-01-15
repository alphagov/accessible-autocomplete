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

const config = {
  context: join(cwd(), 'src'),

  optimization: {
    minimize: ENV === 'production',
    minimizer: [new TerserPlugin({
      extractComments: true,
      sourceMap: true,
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

  resolve: {
    extensions: ['.js'],
    modules: [
      join(cwd(), 'node_modules'),
      'node_modules'
    ]
  },

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

  stats: { colors: true },

  node: {
    global: true,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
    setImmediate: false
  },

  mode: ENV === 'production' ? 'production' : 'development',
  devtool: ENV === 'production' ? 'source-map' : 'cheap-module-eval-source-map'
}

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
    'accessible-autocomplete.min': './wrapper.js'
  },
  output: {
    path: join(cwd(), 'dist'),
    publicPath: '/dist',
    filename: '[name].js',
    library: 'accessibleAutocomplete',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  plugins: plugins
    .concat([new webpack.DefinePlugin({
      'process.env.COMPONENT_LIBRARY': '"PREACT"'
    })])
}

const bundlePreact = {
  ...config,
  entry: {
    'lib/accessible-autocomplete.preact.min': './autocomplete.js'
  },
  output: {
    path: join(cwd(), 'dist'),
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
}

const bundleReact = {
  ...config,
  entry: {
    'lib/accessible-autocomplete.react.min': './autocomplete.js'
  },
  output: {
    path: join(cwd(), 'dist'),
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
}

export default [
  bundleStandalone,
  bundlePreact,
  bundleReact
]
