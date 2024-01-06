<template>
  <header class="sticky top-0 bg-white font-display">
    <AppContainer class="flex justify-between">
      <AppLogo />
      <NavigationDesktop :links="links" />
      <AppActions />
    </AppContainer>
  </header>
</template>

<script lang="ts" setup>
const links = useAppConfig().app.navigation.desktop
</script>
