<template>
  <div>
    <h1>{{ appName }}</h1>
  </div>
</template>

<script lang="ts" setup>
const appName = useAppConfig().app.name
</script>
