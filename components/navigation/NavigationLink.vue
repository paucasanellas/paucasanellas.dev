<template>
  <NuxtLink :key="link.name" :to="localePath({name: link.name})" class="grid place-items-center">
    <UIcon v-if="link.icon" :name="link.icon" class="text-lg" />
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
