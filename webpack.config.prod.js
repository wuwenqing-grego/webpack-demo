const common  = require('./webpack.config.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

common.plugins.push(
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css'
  })
)

module.exports = {
  mode: 'production',
  ...common,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};