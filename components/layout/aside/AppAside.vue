<template>
  <div>
    <AppAsideToggle />
    <aside :class="computedClass" :aria-hidden="!appAsideStore.isOpen">
      <AppAsideNav />
      <AppAsideActions />
    </aside>
  </div>
</template>

<script lang="ts" setup>
import { useAppAsideStore } from '@/stores/appAside'

const appAsideStore = useAppAsideStore()
const css = useCssModule()
const computedClass = computed(() => {
  return {
    [css.wrapper]: true,
    [css.open]: appAsideStore.isOpen
  }
})
</script>

<style lang="scss" module>
@import "@/assets/styles/settings/breakpoints";
@import "@/assets/styles/settings/typo";

.wrapper {
  background-color: white;
  padding: 1rem;
  width: 250px;
  border-right: 1px solid #ddd;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: $font-family-aside;
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
  }
}

.open {
  @media (max-width: $breakpoint-laptop) {
    transform: translateX(0);
  }
}
</style>
