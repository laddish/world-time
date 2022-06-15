import type { Timezone } from '~/types'

export const zoneNames = useStorage<string[]>('world-time-zones', [])

export const zones = computed(() => zoneNames.value.map(name => timezones.find(i => i.name === name),
))

export function addToTimeZone(timezone: Timezone) {
  zoneNames.value.push(timezone.name)
}

const userTimezone = new window.Intl.DateTimeFormat().resolvedOptions().timeZone

if (!zones.value.length)
  zoneNames.value.push(userTimezone)
  // zoneNames.value.push(
  //   timezones.find(i => i.name === userTimezone).name,
  // )

