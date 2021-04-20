import {
  present,
  present_polar,
  create,
  create_polar,
  real,
  imaginary,
  is_real,
  is_complex,
} from '..'

describe('present', () => {
  describe('present', () => {
    test('presents positive imaginary', () =>
      expect(present(create(-1)(3))).toBe('(-1+3i)'))
    test('presents negative imaginary', () =>
      expect(present(create(-1)(-2))).toBe('(-1-2i)'))
    test('presents zero real', () => expect(present(create(0)(-2))).toBe('-2i'))
    test('presents zero imaginary', () =>
      expect(present(create(2)(0))).toBe('2'))
    test('present zero complex', () => expect(present(create(0)(0))).toBe('0'))
  })
  describe('present_polar', () => {
    test('presents a polar', () =>
      expect(present_polar(create_polar(1)(2))).toBe('1·(cos(2)+i·sin(2)'))
  })
  describe('real and imaginary parts', () => {
    const c = create(2)(3)
    test('real part', () => expect(real(c)).toBe(2))
    test('imaginary part', () => expect(imaginary(c)).toBe(3))
  })
  describe('is_real', () => {
    test('(3+0i) is real', () => expect(is_real(create(3)(0))).toBeTruthy())
    test('(3+i) is not real', () => expect(is_real(create(3)(1))).toBeFalsy())
  })
  describe('is_real', () => {
    test('(3+0i) is real', () => expect(is_real(create(3)(0))).toBeTruthy())
    test('(3+i) is not real', () => expect(is_real(create(3)(1))).toBeFalsy())
  })
  describe('is_complex', () => {
    test('(3+0i) is real', () => expect(is_complex(create(3)(0))).toBeFalsy())
    test('(3+i) is not real', () =>
      expect(is_complex(create(3)(1))).toBeTruthy())
  })
})
