module.exports = {
  baseUrl: './',
  outputDir: 'www',
  css: {
    loaderOptions: {
      sass: {
        test: /\.scss$/,
        loader: 'sass-loader',
      },
    },
  },
};
