<template>
  <header class="sticky top-0 flex w-full bg-white">
    <div>
      <h1>{{ appName }}</h1>
    </div>
  </header>
</template>

<script lang="ts" setup>
import type { NavigationLink } from '~/types'

defineProps({
  links: {
    type: Array as PropType<NavigationLink[]>,
    required: true
  }
})

const appName = useAppConfig().app.name
</script>
