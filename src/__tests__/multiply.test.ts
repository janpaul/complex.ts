import { create, multiply } from '..'

describe('multiply', () => {
  test('(2+3i) x (4+i) = (5+14i)', () =>
    expect(multiply(create(2)(3))(create(4)(1))).toStrictEqual(create(5)(14)))
  test('(-2+i) x (-1+2i) = -5i', () =>
    expect(multiply(create(-2)(1))(create(-1)(2))).toStrictEqual(create(0)(-5)))
  test('(1.5+i) x (-1+0.5i) = -5i', () =>
    expect(multiply(create(1.5)(1))(create(-1)(0.5))).toStrictEqual(
      create(-2)(-0.25)
    ))
})
