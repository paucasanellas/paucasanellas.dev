<template>
  <nav class="AppAsideNav">
    <NuxtLink v-for="link in appAsideStore.links" :key="link.name" class="AppAsideNav__link" :to="{ name: link.name}">
      <AppIcon :name="link.icon" size="24" /> {{ link.title }}
    </NuxtLink>
  </nav>
</template>

<script lang="ts" setup>
import { useAppAsideStore } from '@/stores/appAside'

const appAsideStore = useAppAsideStore()
</script>

<style lang="scss">
@import "@/assets/styles/settings/typo";

.AppAsideNav {
  padding-top: 2rem;

  &__link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    transition: 0.15s color;
    font-weight: $font-weight-aside;
    font-size: $font-size-aside;

    .icon {
      color: #ccc;
      fill: #ccc;
    }
  }
}
</style>
