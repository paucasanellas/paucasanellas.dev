<template>
  <aside class="AppNav" :class="isOpen ? 'AppNav--open' : ''">
    <AppNavToggle :open="isOpen" @toggle="toggleMenu" />
    <AppNavMenu />
    <AppNavActions />
  </aside>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import AppNavMenu from '@/components/layout/navigation/AppNavMenu.vue'
import AppNavToggle from '@/components/layout/navigation/AppNavToggle.vue'
import AppNavActions from '@/components/layout/navigation/AppNavActions.vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<style lang="scss">
@import "@/assets/styles/settings/breakpoints";
@import "@/assets/styles/settings/typo";

.AppNav {
  background-color: white;
  padding: 1rem;
  width: 250px;
  border-right: 1px solid #ddd;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: $font-family-navbar;
  z-index: 1;

  @media (max-width: $breakpoint-laptop) {
    position: fixed;
    right: 0;
    top: 0;
    transform: translateX(250px);
    transition: 0.25s;
    height: 100%;
    border: 0;
    border-left: 1px solid #ddd;

    &--open {
      transform: translateX(0);
    }
  }
}
</style>
