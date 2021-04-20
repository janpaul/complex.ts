import { ComplexType } from './types'

// thanks to Pythagoras...
export const length = ({ real: r, imaginary: i }: ComplexType) =>
  Math.sqrt(r * r + i * i)
