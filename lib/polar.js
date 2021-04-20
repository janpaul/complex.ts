"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.from_polar = exports.to_polar = void 0;

var _ = require(".");

var to_polar = function to_polar(_ref) {
  var r = _ref.real,
      i = _ref.imaginary;
  return (0, _.create_polar)(Math.sqrt(r * r + i * i))(Math.atan(i / r));
};

exports.to_polar = to_polar;

var from_polar = function from_polar(_ref2) {
  var length = _ref2.length,
      theta = _ref2.theta;
  return (0, _.create)(0)(0);
};

exports.from_polar = from_polar;