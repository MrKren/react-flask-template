const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: "babel-loader",
        exclude: /node-modules/,
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader", // Creates `style` tags from JS strings
          "css-loader", // Translates CSS into CommonJS
          "sass-loader", // Compiles Sass to CSS
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
