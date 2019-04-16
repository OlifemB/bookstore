module.exports = {
  module: {
    rules: [{
      test: /\.svg$/,
      use: [
        "@svgr/webpack",
        {
          loader: "file-loader",
          options: {
            name: "[name]_[hash].[ext]",
            outputPath: "images/svg/"
          }
        }
      ]
    }
    ]
  }
};