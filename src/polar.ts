import { ComplexType, PolarType } from './types'
import { create_polar, create } from '.'

export const to_polar = ({ real: r, imaginary: i }: ComplexType): PolarType =>
  create_polar(Math.sqrt(r * r + i * i))(Math.atan(i / r))
export const from_polar = ({ length, theta }: PolarType): ComplexType =>
  create(0)(0)
