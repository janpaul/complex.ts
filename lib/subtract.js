"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subtract = void 0;

var _ = require(".");

var subtract = function subtract(_ref) {
  var r1 = _ref.real,
      i1 = _ref.imaginary;
  return function (_ref2) {
    var r2 = _ref2.real,
        i2 = _ref2.imaginary;
    return (0, _.create)(r1 - r2)(i1 - i2);
  };
};

exports.subtract = subtract;