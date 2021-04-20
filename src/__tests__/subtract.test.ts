import { create, subtract } from '..'

const C1 = create(1)(1)
const C2 = create(1)(2)

describe('subtract', () => {
  test('adds two numbers', () =>
    expect(subtract(C1)(C2)).toEqual(create(0)(-1)))
})
