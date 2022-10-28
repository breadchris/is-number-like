'use strict'

// Adapted from: https://github.com/lodash/lodash/blob/2f79053d7bc7c9c9561a30dda202b3dcd2b72b90/isNumber.js

const toString = Object.prototype.toString

function getTag (value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString.call(value)
}

function isObjectLike (value) {
  return typeof value === 'object' && value !== null
}

module.exports = function isNumber (value) {
  return typeof value === 'number' ||
    (isObjectLike(value) && getTag(value) === '[object Number]')
}
