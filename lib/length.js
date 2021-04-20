"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.length = void 0;

// thanks to Pythagoras...
var length = function length(_ref) {
  var r = _ref.real,
      i = _ref.imaginary;
  return Math.sqrt(r * r + i * i);
};

exports.length = length;