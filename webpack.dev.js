const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

require('dotenv').config();

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    onListening: function (server) {
      const port = server.listeningApp.address().port;
      console.log('Listening on port:', port, '\n');
      console.log('URL:', `http://localhost:${port} \n`);
    },
    compress: true,
    port: process.env.PORT || 9000,
    open: process.env.OPEN_BROWSER || false,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader', // Creates `style` nodes from JS strings
          'css-loader', // Translates CSS into CommonJS
        ],
      },

      {
        test: /\.scss$/i,
        use: [
          'style-loader', // Creates `style` nodes from JS strings
          'css-loader', // Translates CSS into CommonJS
          'sass-loader', // Compiles Sass to CSS
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
});
