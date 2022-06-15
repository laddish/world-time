<script setup lang="ts">

</script>

<template>
  <div p4>
    <template v-if="zones.value.length">
      <div v-for="zone of zones.value" :key="zone.name" w-full>
        <TimezoneItem :timezone="zone" />
      </div>
    </template>
    <div
      v-else
    >
      1
    </div>
  </div>
</template>

