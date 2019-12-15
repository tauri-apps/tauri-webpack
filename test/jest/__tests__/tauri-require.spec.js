// eslint-disable-next-line node/no-missing-require
const TauriRequirePlugin = require('plugins/tauri-require.js').plugin

describe('index.js', () => {
  it('is a function', () => {
    const test = typeof TauriRequirePlugin
    expect(test).toBe('function')
  })
  it('can use the `new` keyword', () => {
    const test = new TauriRequirePlugin()
    expect(typeof test).toBe('object')
  })
  it('is a proper object', async () => {
    const tauri = new TauriRequirePlugin({})
    try {
      await tauri.apply()
    } catch (e) {
      expect(e.message).toBe("Cannot read property 'plugin' of undefined")
    }
  })
  /*
  const compiler = (mock) => {
    return {
      plugin: (mock, cb) => {
        return cb(mock)
      }
    }
  }
  const mock = {
    mainTemplate: {
      hooks: {
        requireEnsure: {
          tap: () => {}
        }
      }
    }
  }
  it('is a proper object', () => {
    const test = new TauriRequirePlugin()
    test.apply(compiler(mock))
    expect(test.apply(compiler)).toBe('object')
  })
  */
})
