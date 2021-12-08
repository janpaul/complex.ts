'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.create_polar = exports.create = void 0

var create = function create(real) {
  return function () {
    var imaginary =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0
    return {
      real: real,
      imaginary: imaginary,
    }
  }
}

exports.create = create

var create_polar = function create_polar(length) {
  return function (theta) {
    return {
      length: length,
      theta: theta,
    }
  }
}

exports.create_polar = create_polar
