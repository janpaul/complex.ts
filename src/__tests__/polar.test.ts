import { to_polar, create } from '..'

describe('to_polar', () => {
  test('(5+2i) in polar form', () => {
    const { length, theta } = to_polar(create(5)(2))
    expect(length).toBeCloseTo(5.3851)
    expect(theta).toBeCloseTo(0.3805)
  })
})
