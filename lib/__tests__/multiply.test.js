"use strict";

var _ = require("..");

describe('multiply', function () {
  test('(2+3i) x (4+i) = (5+14i)', function () {
    return expect((0, _.multiply)((0, _.create)(2, 3))((0, _.create)(4, 1))).toEqual((0, _.create)(5, 14));
  });
  test('(-2+i) x (-1+2i) = -5i', function () {
    return expect((0, _.multiply)((0, _.create)(-2, 1))((0, _.create)(-1, 2))).toEqual((0, _.create)(0, -5));
  });
});