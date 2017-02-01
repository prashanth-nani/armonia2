const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'vendor': [
      'zone.js',
      'reflect-metadata',
      'rxjs'
    ],
    'app': './app/main'
  },
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: '[name]-bundle.js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  plugins: [
      new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        path.join(__dirname, 'app'), // location of your src
        { }
      )
  ]
};