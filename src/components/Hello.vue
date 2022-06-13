<script setup lang="ts">
const props = defineProps<{
  name: string;
}>();

const uppercase = computed(() => props.name.toUpperCase());
</script>

<template>
  Hello
  <div  text-green font="sans bold">
    {{ uppercase }}
  </div>
  <div i-ion:accessibility text-5xl text-gray>

  </div>
</template>
