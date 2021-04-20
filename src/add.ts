import { ComplexType, create } from '.'

export const add = ({ real: r1, imaginary: i1 }: ComplexType) => ({
  real: r2,
  imaginary: i2,
}: ComplexType): ComplexType => create(r1 + r2)(i1 + i2)
