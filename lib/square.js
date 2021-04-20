"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.square = void 0;

var _multiply = require("./multiply");

var square = function square(c) {
  return (0, _multiply.multiply)(c)(c);
};

exports.square = square;