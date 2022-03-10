const { merge } = require('webpack-merge')
const common = require('./webpack.example.common')
const { resolveApp } = require("./paths");
module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  entry: {
    index: resolveApp('example/index.tsx'),
  },
})