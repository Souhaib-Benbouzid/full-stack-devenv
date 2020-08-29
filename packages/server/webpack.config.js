const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => {
  console.log('build server with ' + env + ' mode');
  const config = {
    // create source map for debugging
    entry: './src/index.ts',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    plugins: [
      // clean dist
      new CleanWebpackPlugin(),
    ],
    module: {
      // loaders
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
        },
      ],
    },
  };

  if (env === 'development') {
    config.mode = 'development';
    config.devtool = 'source-map';
  }

  if (env === 'production') {
    config.mode = 'production';
    config.devtool = 'source-map';
  }

  return config;
};
