const path = require('path')

module.exports = {
  // mode: mode,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sc|c)ss$/i,
        use: ['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: './dist'
    }
  }
}
