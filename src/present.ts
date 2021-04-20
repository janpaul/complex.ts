import { ComplexType, PolarType } from './types'

export const present = ({ real: r, imaginary: i }: ComplexType): string => {
  if (r === 0 && i === 0) {
    return '0'
  }
  if (r === 0) {
    return `${i}i`
  }
  if (i === 0) {
    return `${r}`
  }
  return `(${r}${i < 0 ? '-' : '+'}${i < 0 ? -i : i}i)`
}

export const present_polar = ({ length, theta }: PolarType): string =>
  `${length}·(cos(${theta})+i·sin(${theta})`

export const real = ({ real }: ComplexType): number => real
export const imaginary = ({ imaginary }: ComplexType): number => imaginary
export const is_real = ({ imaginary }: ComplexType): boolean => imaginary === 0
export const is_complex = ({ imaginary }: ComplexType): boolean =>
  imaginary !== 0
