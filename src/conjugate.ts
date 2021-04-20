import { ComplexType, create } from '.'

export const conjugate = ({ real, imaginary }: ComplexType): ComplexType =>
  create(real)(imaginary * -1)
