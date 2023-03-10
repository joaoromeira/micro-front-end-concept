/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { VueLoaderPlugin } = require('vue-loader');

const packageJson = require('./package.json');

const isDevelopment = process.env.NODE_ENV !== 'production';

exports.default = {
  mode: isDevelopment ? 'development' : 'production',
  output: {
    publicPath: 'http://localhost:8082/',
  },
  resolve: {
    extensions: ['.js', '.vue'],
  },
  devServer: {
    port: 8082,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'creditCard',
      filename: 'remoteEntry.js',
      exposes: {
        './CreditCard': './src/app',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new VueLoaderPlugin(),
  ],
};
