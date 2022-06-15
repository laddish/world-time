import type { Timezone } from '~/types'
export const zones = $ref<Timezone[]>([])

export function addToTimeZone(timezone: Timezone) {
  zones.push(timezone)
}
