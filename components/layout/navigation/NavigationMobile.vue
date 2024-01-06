<template>
  <nav>
    Navigation Mobile
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
