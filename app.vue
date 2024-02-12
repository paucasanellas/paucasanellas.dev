<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const appName = useAppConfig().app.name
useSeoMeta({
  titleTemplate: `%s - ${appName}`
})
</script>
