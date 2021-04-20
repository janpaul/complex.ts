import { create, add } from '..'

const C1 = create(1)(1)
const C2 = create(1)(2)

describe('add', () => {
  test('adds the same value twice', () =>
    expect(add(C1)(C1)).toEqual(create(2)(2)))
  test('adds two numbers', () => expect(add(C1)(C2)).toEqual(create(2)(3)))
})
