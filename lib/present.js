"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.present_polar = exports.present = void 0;

var present = function present(_ref) {
  var r = _ref.real,
      i = _ref.imaginary;

  if (r === 0 && i === 0) {
    return '0';
  }

  if (r === 0) {
    return "".concat(i, "i");
  }

  if (i === 0) {
    return "".concat(r);
  }

  return "(".concat(r).concat(i < 0 ? '-' : '+').concat(i < 0 ? -i : i, "i)");
};

exports.present = present;

var present_polar = function present_polar(_ref2) {
  var length = _ref2.length,
      theta = _ref2.theta;
  return "".concat(length, "\xB7(cos(").concat(theta, ")+i\xB7sin(").concat(theta, ")");
};

exports.present_polar = present_polar;