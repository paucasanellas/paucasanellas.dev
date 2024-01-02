<template>
  <header class="sticky top-0 flex w-full bg-white font-display">
    <section>
      <h1>{{ appName }}</h1>
    </section>
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
