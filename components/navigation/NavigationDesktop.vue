<template>
  <nav class="hidden py-4 md:flex">
    <NavigationLink
      v-for="link in links"
      :key="link.name"
      :link="link"
    />
  </nav>
</template>

<script lang="ts" setup>
const links = useAppConfig().app.navigation.desktop
</script>
