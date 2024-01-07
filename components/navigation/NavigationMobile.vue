<template>
  <nav class="flex">
    <NavigationLink
      v-for="link in links"
      :key="link.name"
      class="p-4"
      :link="link"
    />
  </nav>
</template>

<script lang="ts" setup>
const links = useAppConfig().app.navigation.mobile
</script>
