<script setup lang="ts">
import type { Timezone } from '../types'
const { timezone } = defineProps<{
  timezone: Timezone
}>()

const state = $computed(() => timezone.name.split('/')[0])
const city = $computed(() => timezone.name.split('/')[1])
</script>

<template>
  <button flex gap2 py1 w-full>
    <div font-bold w-8 ma op80>
      {{ timezone.offset > 0 ? `+${timezone.offset}` : timezone.offset }}
    </div>
    <div flex="~ col" text-left flex-auto>
      <div>{{ city }}</div>
      <div op50 text-sm>
        {{ state }}
      </div>
    </div>
  </button>
</template>
