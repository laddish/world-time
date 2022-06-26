<script setup lang="ts">
import DarkSwitcherVue from './components/DarkSwitcher.vue'
</script>

<template>
  <div text-sans bg-canvas h-screen>
    <NavBar />
    <div
      border="~ base"
      mx5 bg-white
      bg-base
      shadow
      ml5
    >
      <ActionBar />
    </div>
  </div>
</template>

<style>
html.dark {
  background: #222;
  color: white;
  color-scheme: dark;
}
</style>
