<template>
  <header class="sticky top-0 bg-white font-display">
    <UContainer>
      <!-- Logo -->
      <NavigationDesktop :links="links" />
      <!-- Actions -->
    </UContainer>
  </header>
</template>

<script lang="ts" setup>
const links = useAppConfig().app.navigation.desktop
</script>
