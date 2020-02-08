const getTauriConfig = require('tauri/dist/helpers/tauri-config').default

const chainWebpack = function (chain, config) {
  const dev = process.env.NODE_ENV !== 'production'
  const tauriConfig = getTauriConfig({
    ctx: {
      dev,
      prod: !dev
    }
  })

  if (config && config.automaticStart) {
    const WebpackShellPlugin = require('webpack-shell-plugin')
    chain.plugin('webpack-shell-plugin')
      .use(WebpackShellPlugin, [{
        onBuildEnd: [process.env.NODE_ENV === 'production' ? 'tauri build' : 'tauri dev']
      }])
  }

  if (!(dev && tauriConfig.build.devPath.startsWith('http')) && !tauriConfig.tauri.embeddedServer.active) {
    const TauriRequirePlugin = require('./plugins/tauri-require').plugin
    chain.plugin('tauri-require')
      .use(TauriRequirePlugin)
  }
}

module.exports.chain = chainWebpack

module.exports.config = function (config) {
  const WebpackChain = require('webpack-chain')
  const chain = new WebpackChain()
  chainWebpack(chain, config)
  return chain.toConfig()
}
