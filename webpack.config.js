const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },

  resolve: {
    extensions: [".js", ".jsx", ".css"]
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "../public/index.html",
      filename: "./index.html"
    })
  ]
};
