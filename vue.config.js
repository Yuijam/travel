const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'styles': resolve('src/assets/styles'),
        'common': resolve('src/common')
      }
    }
  }
}