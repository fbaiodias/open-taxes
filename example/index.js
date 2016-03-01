'use strict'

const schema = require('./schema')

const calculate = (value, callback) => {
  if (value.status === 'single') {
    return callback(null, value * 0.7)
  } else {
    return callback(null, value * 0.6)
  }
}

module.exports = {
  schema: schema,
  calculate: calculate
}
