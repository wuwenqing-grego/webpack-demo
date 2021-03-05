const common  = require('./webpack.config.js')

module.exports = {
  mode: 'development',
  ...common,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      ...common.module.rules
    ],
  },
};