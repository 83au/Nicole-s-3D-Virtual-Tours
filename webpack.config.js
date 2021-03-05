const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    services: "./src/services.js",
    gallery: "./src/gallery.js",
    about: "./src/about.js",
    reviews: "./src/reviews.js",
    setup: "./src/setup.js",
    promotions: "./src/promotions.js",
    contact: "./src/contact.js",
    global: "./src/global.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },

  optimization: {
    splitChunks: {
      chunks: "all",
    },
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
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      filename: "services.html",
      template: "./src/services.html",
      chunks: ["services"],
    }),
    new HtmlWebpackPlugin({
      filename: "gallery.html",
      template: "./src/gallery.html",
      chunks: ["gallery"],
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/about.html",
      chunks: ["about"],
    }),
    new HtmlWebpackPlugin({
      filename: "reviews.html",
      template: "./src/reviews.html",
      chunks: ["reviews"],
    }),
    new HtmlWebpackPlugin({
      filename: "setup.html",
      template: "./src/setup.html",
      chunks: ["setup"],
    }),
    new HtmlWebpackPlugin({
      filename: "promotions.html",
      template: "./src/promotions.html",
      chunks: ["promotions"],
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "./src/contact.html",
      chunks: ["contact"],
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
        use: [
          {
            loader: "url-loader",
            options: {
              limit: false,
            },
          },
        ],
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
