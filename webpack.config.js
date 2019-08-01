const path = require('path');
const slsw = require('serverless-webpack');
var nodeExternals = require('webpack-node-externals');
module.exports = {
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  entry: slsw.lib.entries,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  externals: [
    'amqp-connection-manager',
    'amqplib',
    'cache-manager',
    'class-transformer',
    'class-transformer',
    'grpc',
    'mqtt',
    'nats',
    'redis',
  ],
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  target: 'node',
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' },
    ],
  },
  optimization: {
    minimize: false,
  },
};
