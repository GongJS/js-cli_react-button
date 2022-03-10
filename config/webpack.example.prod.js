const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const common = require('./webpack.example.common')
const { resolveApp } = require("./paths");
module.exports = merge(common, {
  mode: 'production',
  entry: {
    index: resolveApp('example/index.tsx'),
  },
  output: {
    filename: '[name].bundle.js',
    path: resolveApp('example/dist'),
    clean: true
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          minSize: 0,
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
})