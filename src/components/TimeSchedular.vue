<script setup lang="ts">

</script>

<template>
  <div>
    <template v-if="zones.value.length">
      <div
        v-for="zone of zones.value" :key="zone.name"
        w-full
        px4 py2
        border="b base"
      >
        <TimezoneItem :timezone="zone" />
      </div>
    </template>
  </div>
</template>

