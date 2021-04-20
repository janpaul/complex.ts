"use strict";

var _ = require("..");

var C1 = (0, _.create)(1, 1);
var C2 = (0, _.create)(1, 2);
describe('add', function () {
  test('adds the same value twice', function () {
    return expect((0, _.add)(C1)(C1)).toEqual({
      real: 2,
      imaginary: 2
    });
  });
  test('adds two numbers', function () {
    return expect((0, _.add)(C1)(C2)).toEqual({
      real: 2,
      imaginary: 3
    });
  });
});