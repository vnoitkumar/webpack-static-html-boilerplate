module.exports = {
  entry: {
    index: './src/index.js',
  },
  module: {
    rules: [
      { test: /\.js$/i, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.(webp|svg|png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'static/media',
        },
      },
    ],
  },
};
