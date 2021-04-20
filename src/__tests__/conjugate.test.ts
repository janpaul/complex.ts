import { conjugate, create, multiply } from '..'

const c = create(1)(2)

describe('conjugate', () => {
  test('gets the conjugate', () =>
    expect(conjugate(c)).toStrictEqual(create(1)(-2)))
  test('multiplying a complex number by its conjugate returns a real number', () =>
    expect(multiply(c)(conjugate(c))).toStrictEqual(create(5)(0)))
})
