# Deprecated
This repo and its entire approach have been deprecated. Tauri no longer requires you to use webpack, and you should remove this module from your dependency tree.

# tauri-webpack

![](https://img.shields.io/npm/v/@tauri-apps/tauri-webpack.svg) ![](https://img.shields.io/github/workflow/status/tauri-apps/tauri-webpack/Sanity%20Test?label=tests
)

The webpack tools currently used by the Tauri `no-server` mode.

### Setup
```bash
yarn add @tauri-apps/tauri-webpack
```

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
Copyright (c) 2019 Tauri
MIT
