<template>
  <Icon :name="`${pack}:${name}`" :size="size" />
</template>

<script lang="ts" setup>
defineProps({
  pack: {
    type: String,
    default: 'ion'
  },
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: '24'
  }
})
</script>
