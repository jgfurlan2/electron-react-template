const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('node:path')

const rules = require('./webpack.rules')

rules.push(
  {
    test: /\.(css)$/,
    use: ['style-loader', 'css-loader']
  },
  {
    test: /\.(s[c|a]ss)$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
  },
  {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }
)

/** @types import('webpack').Configuration */
module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public', 'assets'),
          to: path.resolve(__dirname, '.webpack/renderer', 'assets')
        }
      ]
    })
  ],
  module: { rules }
}
