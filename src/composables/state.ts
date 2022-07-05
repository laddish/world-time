import type { Timezone } from '~/types'
const userTimezone = new window.Intl.DateTimeFormat().resolvedOptions().timeZone

export interface State {
  name?: string
  description?: string
  zones: string[]
  home: string
  date: Date
  selections: Selection[]
}

export interface Selection {
  from: Date
  to: Date
}

export const storage = useStorage<State>('what-time-state', {
  zones: [userTimezone],
  home: userTimezone,
  date: new Date(),
  selections: [],
})

export const now = useNow({ interval: 30_000 })

// export const zoneNames = useStorage<string[]>('world-time-zones', [])
// export const zoneNames = computed(() => storage.value.zones || [])
export const zoneNames = toRef(storage.value, 'zones')

// export const currentZone = ref(userTimezone)
// export const homeZone = computed(() => storage.value.home)
export const homeZone = toRef(storage.value, 'home')

export const homeOffset = ref(timezones.find(i => i.name === homeZone.value)?.offset || 0)

export const zones = computed(() => zoneNames.value.map(name => timezones.find(i => i.name === name),
))

export function addToTimeZone(timezone: Timezone) {
  zoneNames.value.push(timezone.name)
}

export function removeZone(timezone: Timezone) {
  // computed is not assignable
  zoneNames.value = zoneNames.value.filter(i => i !== timezone.name)
}

export function moveZone(timezone: Timezone, delta: number) {
  const index = zoneNames.value.indexOf(timezone.name)
  if (index === -1)
    return
  const target = index + delta
  const other = zoneNames.value[target]
  zoneNames.value[target] = timezone.name
  zoneNames.value[index] = other
}

if (!zoneNames.value?.length)
  zoneNames.value = [userTimezone]
  // zoneNames.value.push(
  //   timezones.find(i => i.name === userTimezone).name,
  // )

