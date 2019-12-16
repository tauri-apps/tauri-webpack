const chainWebpack = function (chain, config) {
  const cfg = Object.assign({
    automaticStart: false,
    tauriLazyLoading: true
  }, config)

  if (cfg.automaticStart) {
    const WebpackShellPlugin = require('webpack-shell-plugin')
    chain.plugin('webpack-shell-plugin')
      .use(WebpackShellPlugin, [{
        onBuildEnd: [process.env.NODE_ENV === 'production' ? 'tauri build' : 'tauri dev']
      }])
  }

  if (cfg.tauriLazyLoading) {
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
  return chain.toString()
}
