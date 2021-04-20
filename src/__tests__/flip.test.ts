import { flip, create } from '..'

describe('flip', () => {
  test('flips a complex number', () =>
    expect(flip(create(2)(3))).toStrictEqual(create(3)(2)))
})
