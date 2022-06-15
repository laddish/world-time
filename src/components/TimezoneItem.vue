<script setup lang="ts">
import type { Timezone } from '../types'
const { timezone } = defineProps<{
  timezone: Timezone
}>()

const state = $computed(() => timezone.name.split('/')[0].replace(/_/g, ' '))
const city = $computed(() => timezone.name.split('/')[1].replace(/_/g, ' '))

const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: timezone.name,
  hour12: false,
  hour: 'numeric',
  minute: 'numeric',
  // second: 'numeric',
  // timeZoneName: 'short',
})

const offset = $computed(() => timezone.offset > 0 ? `+${timezone.offset}` : timezone.offset)

// const time = $computed(() => now.value.toLocaleTimeString('en-US', { timeZone: timezone.name }))
const time = $computed(() => formatter.format(now.value))
</script>

<template>
  <button flex gap2 py1 w-full>
    <div font-bold w-8 ma op80>
      {{ offset }}
    </div>
    <div flex="~ col" text-left flex-auto>
      <div>
        {{ city }}

        <sup border="~ base rounded" px1>{{ timezone.abbr }}</sup>
      </div>
      <div op50 text-sm>
        {{ state }}
      </div>
    </div>
    <div tabular-nums>
      {{ time }}
    </div>
  </button>
</template>
