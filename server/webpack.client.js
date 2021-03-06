const Dotenv = require('dotenv-webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  plugins: [new Dotenv()],
};

module.exports = merge(baseConfig, config);
