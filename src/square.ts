import { ComplexType } from './types'
import { multiply } from './multiply'

export const square = (c: ComplexType) => multiply(c)(c)
