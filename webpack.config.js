const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/index.js',
  output: {  
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js' 
  },

  plugins: [
    new MiniCssExtractPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => autoprefixer(),
            }
          },
          'sass-loader'
        ]
      },
    ]
  }
}