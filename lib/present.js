'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.real =
  exports.present_polar =
  exports.present =
  exports.is_real =
  exports.is_complex =
  exports.imaginary =
    void 0

var present = function present(_ref) {
  var r = _ref.real,
    i = _ref.imaginary

  if (r === 0 && i === 0) {
    return '0'
  }

  if (r === 0) {
    return ''.concat(i, 'i')
  }

  if (i === 0) {
    return ''.concat(r)
  }

  return '('
    .concat(r)
    .concat(i < 0 ? '-' : '+')
    .concat(i < 0 ? -i : i, 'i)')
}

exports.present = present

var present_polar = function present_polar(_ref2) {
  var length = _ref2.length,
    theta = _ref2.theta
  return ''
    .concat(length, '\xB7(cos(')
    .concat(theta, ')+i\xB7sin(')
    .concat(theta, ')')
}

exports.present_polar = present_polar

var real = function real(_ref3) {
  var real = _ref3.real
  return real
}

exports.real = real

var imaginary = function imaginary(_ref4) {
  var imaginary = _ref4.imaginary
  return imaginary
}

exports.imaginary = imaginary

var is_real = function is_real(_ref5) {
  var imaginary = _ref5.imaginary
  return imaginary === 0
}

exports.is_real = is_real

var is_complex = function is_complex(_ref6) {
  var imaginary = _ref6.imaginary
  return imaginary !== 0
}

exports.is_complex = is_complex
