const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js'
    filename: '[name]-[contenthash].js',
  },
  target: 'web',
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],// other stuff
    fallback: {
      // "fs": false,
      // "crypto": false,
      "stream": false,
      "buffer": false,
      "crypto": require.resolve("crypto-browserify")
      // "crypto-browserify": require.resolve("crypto-browserify")
    }
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ]
            },
          }
        ],
      }
    ],
  }
}
