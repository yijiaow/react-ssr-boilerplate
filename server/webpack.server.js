const path = require('path');
const Dotenv = require('dotenv-webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  target: 'node',
  entry: './src/index.js',
  externals: [webpackNodeExternals()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  plugins: [new Dotenv()],
};

module.exports = merge(baseConfig, config);
