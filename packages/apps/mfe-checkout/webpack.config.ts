/* eslint-disable import-helpers/order-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { ProvidePlugin } = require('webpack');

const packageJson = require('./package.json');

const isDevelopment = process.env.NODE_ENV !== 'production';

const hasJsxRuntime = (() => {
  if (process.env.DISABLE_NEW_JSX_TRANSFORM === 'true') {
    return false;
  }

  try {
    require.resolve('react/jsx-runtime');
    return true;
  } catch (e) {
    return false;
  }
})();

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3001,
    hot: true,
    open: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfeCheckout',
      remotes: {
        creditCard: 'creditCard@http://localhost:8082/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new ProvidePlugin({
      React: 'react',
    }),
    isDevelopment && new ReactRefreshPlugin(),
  ].filter(Boolean),
  optimization: {
    runtimeChunk: 'single',
    // Ensure `react-refresh/runtime` is hoisted and shared
    // Could be replicated via a vendors chunk
    splitChunks: {
      chunks: 'all',
      name(_, __, cacheGroupKey) {
        return cacheGroupKey;
      },
    },
  },
};
