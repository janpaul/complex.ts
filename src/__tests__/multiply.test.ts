import { create, multiply } from '..'

describe('multiply', () => {
  test('(2+3i) x (4+i) = (5+14i)', () =>
    expect(multiply(create(2, 3))(create(4, 1))).toEqual(create(5, 14)))
  test('(-2+i) x (-1+2i) = -5i', () =>
    expect(multiply(create(-2, 1))(create(-1, 2))).toEqual(create(0, -5)))
})
