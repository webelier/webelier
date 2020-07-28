const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

const config = {
  lintOnSave: true,
  transpileDependencies: ['vuetify'],
  configureWebpack: (config) => {
    config.devtool = 'eval-source-map'
    config.plugins.push(new VuetifyLoaderPlugin())
  }
}

module.exports = config
