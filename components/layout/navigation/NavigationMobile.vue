<template>
  <nav class="fixed bottom-0 flex w-full bg-white md:hidden">
    {{ links }}
  </nav>
</template>

<script lang="ts" setup>
const links = useAppConfig().app.navigation.mobile
</script>
