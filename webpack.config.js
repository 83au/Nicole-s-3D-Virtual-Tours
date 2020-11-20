const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {  
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js' 
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {from: 'src/assets', to: 'assets/'},
        {from: 'src/index.html', to: 'index.html'},
        {from: 'src/services.html', to: 'services.html'},
        {from: 'src/gallery.html', to: 'gallery.html'},
        {from: 'src/contact.html', to: 'contact.html'},
        {from: 'src/about.html', to: 'about.html'},
        {from: 'src/reviews.html', to: 'reviews.html'},
        {from: 'src/setup.html', to: 'setup.html'},
        {from: 'src/lib/', to: 'lib/'},
      ]
    }),
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
      {
        test: /\.(svg|png|jpe?g|gif|webp)$/i,
        loader: 'url-loader',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}