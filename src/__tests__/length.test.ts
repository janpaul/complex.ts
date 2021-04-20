import { length, create } from '..'

describe('length', () => {
  test('length of (2+3i)', () =>
    expect(length(create(2)(3))).toBeCloseTo(3.6055))
  test('length of (1-2i)', () =>
    expect(length(create(1)(-2))).toBeCloseTo(2.2361))
})
