<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>

<template>
  Hello
  <div>
    {{ name }}
  </div>
</template>
