import { present, create } from '..'

describe('present', () => {
  test('presents positive imaginary', () =>
    expect(present(create(-1, 3))).toBe('(-1+3i)'))
  test('presents negative imaginary', () =>
    expect(present(create(-1, -2))).toBe('(-1-2i)'))
  test('presents zero real', () => expect(present(create(0, -2))).toBe('-2i'))
  test('presents zero imaginary', () => expect(present(create(2, 0))).toBe('2'))
  test('present zero complex', () => expect(present(create(0, 0))).toBe('0'))
})
