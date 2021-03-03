const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "src/assets", to: "assets/" },
        { from: "src/lib/", to: "lib/" },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "services.html",
      template: "./src/services.html",
    }),
    new HtmlWebpackPlugin({
      filename: "gallery.html",
      template: "./src/gallery.html",
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "./src/contact.html",
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/about.html",
    }),
    new HtmlWebpackPlugin({
      filename: "reviews.html",
      template: "./src/reviews.html",
    }),
    new HtmlWebpackPlugin({
      filename: "setup.html",
      template: "./src/setup.html",
    }),
    new HtmlWebpackPlugin({
      filename: "promotions.html",
      template: "./src/promotions.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => autoprefixer(),
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(svg|png|jpe?g|gif|webp)$/i,
        loader: "url-loader",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
