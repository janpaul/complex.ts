import { ComplexType, create } from '.'

export const multiply = ({ real: r1, imaginary: i1 }: ComplexType) => ({
  real: r2,
  imaginary: i2,
}: ComplexType): ComplexType => create(r1 * r2 - i1 * i2)(r1 * i2 + i1 * r2)
