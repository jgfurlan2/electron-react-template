const path = require('node:path')

const rules = require('./webpack.rules')

/** @types import('webpack').Configuration */
module.exports = {
  entry: path.resolve(__dirname, 'electron', 'main.ts'),
  resolve: {
    extensions: ['.js', '.ts', '.json']
  },
  module: { rules }
}
