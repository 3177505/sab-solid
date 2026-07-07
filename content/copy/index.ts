import type { Dictionary } from './types'
import { dict } from './dict'

export type { Dictionary } from './types'

export function getCopy(): Dictionary {
  return dict
}
