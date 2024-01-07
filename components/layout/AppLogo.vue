<template>
  <div class="py-4">
    <h1 class="text-md">
      <NuxtLink :to="localePath({name: 'index'})">
        {{ appName }}
      </NuxtLink>
    </h1>
  </div>
</template>

<script lang="ts" setup>
const appName = useAppConfig().app.name
const localePath = useLocalePath()
</script>
