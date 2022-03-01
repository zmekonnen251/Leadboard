const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
