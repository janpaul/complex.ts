import { ComplexType } from './types'
import { multiply } from './multiply'

// uses multiply behind the scenes
export const square = (c: ComplexType) => multiply(c)(c)
