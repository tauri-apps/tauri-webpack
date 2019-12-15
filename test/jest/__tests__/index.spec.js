// eslint-disable-next-line node/no-missing-require
const Chainer = require('plugins/tauri-require.js').plugin

describe('index.js', () => {
  it('is a proper function', () => {
    const test = typeof Chainer
    expect(test).toBe('function')
  })
  /*
  it('has a function', () => {
    const test = new Chainer({ automaticStart: true })
    expect(test).toBe('object')
  })
  */
})
