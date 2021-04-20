"use strict";

var _ = require("..");

describe('present', function () {
  test('presents positive imaginary', function () {
    return expect((0, _.present)((0, _.create)(-1, 3))).toBe('(-1+3i)');
  });
  test('presents negative imaginary', function () {
    return expect((0, _.present)((0, _.create)(-1, -2))).toBe('(-1-2i)');
  });
  test('presents zero real', function () {
    return expect((0, _.present)((0, _.create)(0, -2))).toBe('-2i');
  });
  test('presents zero imaginary', function () {
    return expect((0, _.present)((0, _.create)(2, 0))).toBe('2');
  });
  test('present zero complex', function () {
    return expect((0, _.present)((0, _.create)(0, 0))).toBe('0');
  });
});