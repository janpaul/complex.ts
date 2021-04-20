import { square, create } from '..'

describe('square', () => {
  test('', () => expect(square(create(1)(2))).toStrictEqual(create(-3)(4)))
})
