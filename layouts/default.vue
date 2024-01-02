<template>
  <div>
    <NavigationDesktop :links="links" />
    <slot />
    <NavigationMobile :links="links" />
  </div>
</template>

<script lang="ts" setup>
const links = useAppConfig().app.navigation.links
</script>
