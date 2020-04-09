const test = require('ava')
const index = require('../..')

test('methods should be unique', t => {
  const methods = []
  for (const key in index) {
    for (const method in index[key]) {
      methods.push(method)
    }
  }
  t.truthy(methods.length === new Set(methods).size)
})
