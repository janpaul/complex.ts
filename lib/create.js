"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = void 0;

var create = function create(real) {
  var imaginary = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return {
    real: real,
    imaginary: imaginary
  };
};

exports.create = create;