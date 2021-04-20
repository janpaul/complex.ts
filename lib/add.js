"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = void 0;

var _ = require(".");

var add = function add(c1) {
  return function (c2) {
    return (0, _.create)(c1.real + c2.real, c1.imaginary + c2.imaginary);
  };
};

exports.add = add;