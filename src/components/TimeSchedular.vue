<script setup lang="ts">
</script>

<template>
  <div>
    <template v-if="zones.value.length">
      <div
        v-for="zone, idx of zones.value" :key="zone.name"
        w-full
        py2
        border="b base"
        relative
      >
        <div absolute left--7 top-0 bottom-0 flex="~ col" justify="center">
          <button
            title="Remove"
            icon-btn
            i-carbon-close
            @click="removeZone(zone)"
          />
          <button
            v-if="idx !== 0"
            title="Move up"
            icon-btn
            i-carbon-caret-up
            @click="moveZone(zone, -1)"
          />
          <button
            v-if="idx !== zones.value.length - 1"
            title="Move down"
            icon-btn
            i-carbon-caret-down
            @click="moveZone(zone, 1)"
          />
        </div>
        <TimezoneItem :timezone="zone">
          <TimeDial :timezone="zone" />
        </TimezoneItem>
      </div>
    </template>
  </div>
</template>

