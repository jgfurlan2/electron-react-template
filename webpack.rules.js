/** @type import('webpack').ModuleOptions['rules'] */
module.exports = [
  {
    test: /\.([t|j]sx?)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
      }
    }
  }
]
