const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

// console.log(process.env.NODE_ENV);

module.exports = {
  // mode: 'development',
  mode: 'production',
  cache: {
    type: 'filesystem',
    version: '1.0'
  },
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js'
    filename: '[name]-[contenthash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    // new webpack.DefinePlugin({
    //   'process.env.SITE_ENV': JSON.stringify('development')
    // })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            },
          }
        ],
      }
    ],
  }
  // optimization: {
  //   moduleIds: 'deterministic',
  //   chunkIds: 'deterministic'
  // }
}
