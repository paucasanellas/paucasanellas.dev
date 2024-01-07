<template>
  <NuxtLink :key="link.name" :to="localePath({name: link.name})">
    {{ $t(link.title) }}
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { NavigationLink } from '@/types'

const localePath = useLocalePath()

defineProps({
  link: {
    type: Object as PropType<NavigationLink>,
    required: true
  }
})
</script>
