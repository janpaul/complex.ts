import { ComplexType, PolarType } from './types'

export const create = (real: number) => (
  imaginary: number = 0
): ComplexType => ({
  real,
  imaginary,
})

export const create_polar = (length: number) => (theta: number): PolarType => ({
  length,
  theta,
})
