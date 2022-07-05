<script setup lang="ts">
import { format } from 'date-fns'

import type { Timezone } from '~/types'
const props = defineProps<{
  timezone?: Timezone
}>()

const hours = $computed(
  () =>
    Array.from({ length: 24 }, (_, i) => (i + props.timezone.offset + 24 + 1) % 24),
)

const lastDay = $computed(() => hours.filter(i => i < 0).map(i => (i + 24) % 24))
const today = $computed(() => hours.filter(i => i >= 0 && i < 24))
const tomorrow = $computed(() => hours.filter(i => i > 24).map(i => i % 24))

const days = $computed(() => [
  lastDay,
  today,
  tomorrow,
])

function isMidnight(h: number) {
  return h <= 5 || h >= 22
}
function isNight(h: number) {
  return h <= 7 || h >= 18
}
</script>

<template>
  <div flex="~ gap1" of-auto items-center>
    <template
      v-for="day, idx of days"
      :key="idx"
    >
      <div
        v-if="day.length" flex="~ "
        border="~ sky7/50"
        of-hidden
      >
        <div
          v-for="i in day"
          :key="i"
          border="base"
          flex="~ col none"
          justify-center
          items-center
          w7 h8
          px="0.5"
          :class="[
            i === 0 ? 'border-l' : '',
            i === 23 ? 'border-r' : '',
            isMidnight(i) ? 'bg-sky7:50 text-white'
            : isNight(i) ? 'bg-sky:20' : '',
          ]"
        >
          <div v-if="i">
            {{ i }}
          </div>
          <div
            v-else
            text-xs
            text-center
            leading-1em
          >
            {{ format(now.value, 'MMM') }}
            {{ format(now.value, 'dd') }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>

</style>
