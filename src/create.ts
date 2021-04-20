import { ComplexType } from './types'

export const create = (real: number) => (
  imaginary: number = 0
): ComplexType => ({
  real,
  imaginary,
})
