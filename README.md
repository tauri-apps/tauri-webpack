# tauri-webpack

![](https://img.shields.io/npm/v/@tauri-apps/tauri-webpack.svg) ![](https://img.shields.io/github/workflow/status/tauri-apps/tauri-webpack/Sanity%20Test?label=tests
)

The webpack tools currently used by the Tauri `no-server` mode.

### Install

```bash
yarn add @tauri-apps/tauri-webpack
```

### Usage

```js
const mode = process.env.NODE_ENV || 'development'
const devMode = mode !== 'production'
const tauriMode = !!process.env.TAURI

const webpackConfig = {
    entry: {
        bundle: ['./src-ui/index.js']
    },
    ... CONFIG HERE
}

if (tauriMode) {
    const merge = require('webpack-merge')
    const tauriWebpackConfig = require('@tauri-apps/tauri-webpack').config()
    module.exports = merge(webpackConfig, tauriWebpackConfig)
}
else {
    module.exports = webpackConfig
}
```

### Usage with webpack-chain

In your webpack config:
```js
chainWebpack (chain) {
  require('@tauri-apps/tauri-webpack').chain(chain)
}
```

In your `tauri.conf.js`
```js
tauri: {
  embeddedServer: {
    active: false
  }
}
```

## Please visit https://github.com/tauri-apps/tauri for details about contributing and community.

## License
Copyright (c) 2020 Tauri
MIT
