const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'browser.mjs'),

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Axios Browser Test'
    })
  ],

  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    port: 8080
  }
};