import { ComplexType, create } from '.'

export const add = (c1: ComplexType, c2: ComplexType): ComplexType =>
  create(c1.real + c2.real, c1.imagenary + c2.imagenary)
