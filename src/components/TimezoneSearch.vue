<script setup lang="ts">
import Fuse from 'fuse.js'
import type { Timezone } from '~/types'

const fuse = new Fuse(timezones, {
  keys: ['name'],
  threshold: 0.3,
})

let index = $ref(0)
let input = $ref('')
const searchResult = computed(() => {
  return fuse.search(input)
  // return timezone.filter(i => i.utc.find(u => u.includes(input.value)))
})

function add(t: Timezone) {
  addToTimeZone(t)
  input = ''
  index = 0
}
</script>

<template>
  <div class="relative">
    <input
      v-model="input" type="text"
      placeholder="Search timezone..."
      p="x3 y2"
      text-xl
      w-full
      border="~ base rounded"
      bg-transparent
    >

    <div v-show="input" absolute top-full bg-base left-0 right-0>
      <button
        v-for="i of searchResult"
        :key="i.refIndex" flex gap2
        @click="add(i.item)"
      >
        <div font-mono w-10 text-right>
          {{ i.item.offset }}
        </div>
        <div>
          {{ i.item.name }}
        </div>
      </button>
    </div>
  </div>
</template>

