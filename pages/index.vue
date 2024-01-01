<template>
  <main>
    <h1>{{ appName }}</h1>
  </main>
</template>

<script lang="ts" setup>
const appName = useAppConfig().app.name
</script>
