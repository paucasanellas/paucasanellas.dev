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

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.15s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.15s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
</style>
