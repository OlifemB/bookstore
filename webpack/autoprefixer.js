module.exports = {
  loader: "postcss-loader",
  options: {
    plugins: [
      autoprefixer({
        browsers: ["ie >= 8", "last 4 version"]
      })
    ]
  }
};