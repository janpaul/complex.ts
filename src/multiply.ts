import { ComplexType, create } from '.'

export const multiply = (c1: ComplexType) => (c2: ComplexType): ComplexType =>
  create(c1.real * c2.real - c1.imaginary * c2.imaginary, c1.real * c2.imaginary + c1.imaginary * c2.real)

