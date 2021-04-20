"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = void 0;

var create = function create(real) {
  return function () {
    var imaginary = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return {
      real: real,
      imaginary: imaginary
    };
  };
};

exports.create = create;