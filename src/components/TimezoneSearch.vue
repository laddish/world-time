<script setup lang="ts">
import Fuse from 'fuse.js'
import type { Timezone } from '~/types'

const fuse = new Fuse(timezones, {
  keys: ['name'],
  threshold: 0.3,
})

let index = $ref(0)
let input = $ref('')
const searchResult = $computed(() => {
  return fuse.search(input)
  // return timezone.filter(i => i.utc.find(u => u.includes(input.value)))
})

function add(t: Timezone) {
  addToTimeZone(t)
  input = ''
  index = 0
}

function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'Enter') {
    if (searchResult.length > 0)
      add(searchResult[index].item)
  }
  else if (e.key === 'ArrowUp') {
    index = (index - 1 + searchResult.length) % searchResult.length
  }
  else if (e.key === 'ArrowDown') {
    index = (index + 1 + searchResult.length) % searchResult.length
  }
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
      @keydown="onKeyDown"
    >

    <div
      v-show="input"
      absolute
      top-full
      bg-base
      p1
      border="~ base rounded"
      left-0 right-0
      max-h-100
      overflow-auto
    >
      <button
        v-for="i, idx of searchResult"
        :key="i.refIndex" flex gap2
        block w-full
        :class="idx === index ? 'bg-gray:5' : ''"
        @click="add(i.item)"
      >
        <TimezoneItem :timezone="i.item" />
      </button>
    </div>
  </div>
</template>

