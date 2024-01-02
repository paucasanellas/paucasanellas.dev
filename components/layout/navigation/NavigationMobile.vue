<template>
  <nav class="fixed bottom-0 flex w-full bg-white md:hidden">
    NavbarMobile
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
