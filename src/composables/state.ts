import type { Timezone } from '~/types'
export const zones = ref<Timezone[]>([])

export function addToTimeZone(timezone: Timezone) {
  zones.value.push(timezone)
}

const userTimezone = new window.Intl.DateTimeFormat().resolvedOptions().timeZone

if (!zones.value.length) {
  zones.value.push(
    timezones.find(i => i.name === userTimezone),
  )
}
