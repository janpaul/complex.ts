import { ComplexType, create } from '.'

export const flip = ({ real, imaginary }: ComplexType): ComplexType =>
  create(imaginary)(real)
