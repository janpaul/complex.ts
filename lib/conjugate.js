'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.conjugate = void 0

var _ = require('.')

var conjugate = function conjugate(_ref) {
  var real = _ref.real,
    imaginary = _ref.imaginary
  return (0, _.create)(real)(imaginary * -1)
}

exports.conjugate = conjugate
