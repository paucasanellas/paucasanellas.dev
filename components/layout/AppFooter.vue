<template>
  <footer class="fixed bottom-0 w-full bg-white md:hidden">
    <NavigationMobile :links="links" />
  </footer>
</template>

<script lang="ts" setup>
const links = useAppConfig().app.navigation.mobile
</script>
