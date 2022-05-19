const path = require('path')


module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: './distx'
    }
  }
}
