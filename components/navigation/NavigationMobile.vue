<template>
  <nav class="flex justify-around">
    <NavigationLink
      v-for="link in links"
      :key="link.name"
      class="py-4 text-xs"
      :link="link"
    />
  </nav>
</template>

<script lang="ts" setup>
const links = useAppConfig().app.navigation.mobile
</script>
