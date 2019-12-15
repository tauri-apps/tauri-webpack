# tauri-webpack

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

## License
Copyright (c) 2019 Tauri
MIT