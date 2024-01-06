<template>
  <nav class="hidden md:flex">
    Navigation Desktop
  </nav>
</template>

<script lang="ts" setup>
import type { NavigationLink } from '~/types'

defineProps({
  links: {
    type: Array as PropType<NavigationLink[]>,
    required: true
  }
})
</script>
