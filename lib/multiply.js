"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiply = void 0;

var _ = require(".");

var multiply = function multiply(c1) {
  return function (c2) {
    return (0, _.create)(c1.real * c2.real - c1.imaginary * c2.imaginary, c1.real * c2.imaginary + c1.imaginary * c2.real);
  };
};

exports.multiply = multiply;