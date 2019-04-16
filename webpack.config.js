const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const babel = require("./webpack/babel");
const devserver = require("./webpack/devserver");
const files = require("./webpack/file");
const sass = require("./webpack/sass");

const common = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "app"),
    filename: "bundle_[hash].js"
  },
  resolve: {
    extensions: [".js"],
    modules: ["node_modules"],
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@data": path.resolve(__dirname, "src/data"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@actions": path.resolve(__dirname, "src/redux/actions"),
      "@reducers": path.resolve(__dirname, "src/redux/reducers")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
};


module.exports = () => {
  return (
    merge([
      common,
      babel,
      files,
      devserver,
      sass,
    ])
  );
};
