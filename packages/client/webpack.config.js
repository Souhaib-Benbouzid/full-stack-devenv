const path = require('path');

// const UglifyJsPlugin = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// const BundleAnalyzerPlugin = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  console.log('build server with ' + env + ' mode');

  // VARIABLES
  const isProduction = env === 'production';
  const isDev = env === 'development';

  const config = {
    // create source map for debugging
    entry: './src/index.ts',
    output: {
      publicPath: 'public',
      filename: '[name].[hash].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    plugins: [
      // clean dist
      new CleanWebpackPlugin(),
      //  create index.html
      new HtmlWebpackPlugin({
        title: 'E-learning',
      }),
    ],
    module: {
      // loaders
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader'],
        },
        {
          test: /\.(csv|tsv)$/,
          use: ['csv-loader'],
        },
        {
          test: /\.xml$/,
          use: ['xml-loader'],
        },
      ],
    },
  };

  if (isDev) {
    config.mode = 'development';
    config.devtool = 'eval-source-map';
    config.devServer = {
      contentBase: path.join(__dirname, 'public'),
      port: 3000,
    };
  }

  if (isProduction) {
    config.mode = 'production';
  }

  return config;
};
