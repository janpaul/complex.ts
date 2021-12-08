'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.square = void 0

var _multiply = require('./multiply')

// uses multiply behind the scenes
var square = function square(c) {
  return (0, _multiply.multiply)(c)(c)
}

exports.square = square
