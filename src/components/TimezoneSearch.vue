<script setup lang="ts">
import Fuse from 'fuse.js'
import { timezones } from '../composables/data'
import { addToTimeZone, zones } from '../composables/state'
const fuse = new Fuse(timezones, {
  keys: ['name'],
  threshold: 0.3,
})

const index = ref(0)
const input = ref('')
const searchResult = computed(() => {
  return fuse.search(input.value)
  // return timezone.filter(i => i.utc.find(u => u.includes(input.value)))
})

function onEnter() { }
</script>

<template>
  <input v-model="input" type="text" text-black @keydown.enter="onEnter">

  <div>
    <button v-for="i of searchResult" :key="i.refIndex" flex gap2 @click="addToTimeZone(i.item)">
      <div font-mono w-10 text-right>
        {{ i.item.offset }}
      </div>
      <div>
        {{ i.item.name }}
      </div>
    </button>
  </div>
</template>

<style>
html {
  background: #222;
  color: white;
  color-scheme: dark;
}
</style>
