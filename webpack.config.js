var path = require('path');

module.exports = {
  entry: {
    'vendor': [
      'zone.js',
      'reflect-metadata',
      'rxjs',
      '@angular/core'
    ],
    'app': './app/main'
  },
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: '[name].js',
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
  }
};