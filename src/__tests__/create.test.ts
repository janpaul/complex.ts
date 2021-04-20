import { create } from '..'

describe('create', () => {
  test('create (1+2i)', () =>
    expect(create(1)(2)).toStrictEqual({ real: 1, imaginary: 2 }))
})
