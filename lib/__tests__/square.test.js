"use strict";

var _ = require("..");

describe('square', function () {
  test('', function () {
    return expect((0, _.square)((0, _.create)(1, 2))).toEqual((0, _.create)(-3, 4));
  });
});