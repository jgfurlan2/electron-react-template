const { MakerDeb } = require('@electron-forge/maker-deb')
const { MakerRpm } = require('@electron-forge/maker-rpm')
const { MakerSquirrel } = require('@electron-forge/maker-squirrel')
const { MakerZIP } = require('@electron-forge/maker-zip')
const { WebpackPlugin } = require('@electron-forge/plugin-webpack')
const path = require('node:path')

const { name, productName } = require('./package.json')

const APP_NAME = productName
const EXEC_NAME = name.split('/').pop()

/** @type import('@electron-forge/shared-types').ForgeConfig */
module.exports = {
  packagerConfig: {
    name: APP_NAME,
    executableName: EXEC_NAME
  },
  rebuildConfig: {},
  makers: [
    new MakerSquirrel({ name: APP_NAME }),
    new MakerZIP({}, ['darwin']),
    new MakerRpm({ options: { bin: EXEC_NAME } }),
    new MakerDeb({ options: { bin: EXEC_NAME } })
  ],
  plugins: [
    new WebpackPlugin({
      port: 3001,
      loggerPort: 9001,
      mainConfig: path.resolve(__dirname, 'webpack.main.js'),
      devContentSecurityPolicy: "default-src 'self' 'unsafe-eval' 'unsafe-inline' static: http: https: ws:",
      renderer: {
        config: path.resolve(__dirname, 'webpack.renderer.js'),
        entryPoints: [
          {
            html: path.resolve(__dirname, 'public', 'index.html'),
            js: path.resolve(__dirname, 'src', 'index.tsx'),
            name: 'main_window',
            preload: {
              js: path.resolve(__dirname, 'electron', 'preload.ts')
            }
          }
        ]
      }
    })
  ]
}
