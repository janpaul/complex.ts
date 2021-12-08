'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.flip = void 0

var _ = require('.')

var flip = function flip(_ref) {
  var real = _ref.real,
    imaginary = _ref.imaginary
  return (0, _.create)(imaginary)(real)
}

exports.flip = flip
