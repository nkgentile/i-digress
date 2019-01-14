module.exports = {
  outputDir: "www",
  css: {
    loaderOptions: {
      sass: {
        test: /\.scss$/,
        loader: "sass-loader"
      },
      stylus: {
        test: /\.styl$/,
        loader: "stylus-loader"
      }
    }
  }
};
