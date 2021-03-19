import { create, add } from '..'

const C1 = create(1, 1)
const C2 = create(1, 2)

describe('index', () => {
  describe('add', () => {
    test('adds the same value twice', () =>
      expect(add(C1, C1)).toEqual({ real: 2, imagenary: 2 }))
    test('adds two numbers', () =>
      expect(add(C1, C2)).toEqual({ real: 2, imagenary: 3 }))
  })
})
