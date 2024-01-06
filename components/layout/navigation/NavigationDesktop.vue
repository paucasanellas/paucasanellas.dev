<template>
  <nav class="hidden md:flex">
    {{ links }}
  </nav>
</template>

<script lang="ts" setup>
const links = useAppConfig().app.navigation.desktop
</script>
