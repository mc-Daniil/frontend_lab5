const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.mjs'),

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'PixiJS Rectangle Rotation'
    })
  ],

  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true
  }
};