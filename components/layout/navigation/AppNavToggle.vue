<template>
  <button
    class="AppNavToggle"
    :class="computedClass"
    @click.prevent="appNavStore.toggleMenu"
  >
    <span />
    <span />
    <span />
  </button>
</template>

<script lang="ts" setup>
import { useAppNavStore } from '@/stores/appNav'

const appNavStore = useAppNavStore()

const computedClass = computed(() => {
  return {
    'AppNavToggle--active': appNavStore.isOpen
  }
})
</script>

<style lang="scss">
@import "@/assets/styles/settings/breakpoints";

.AppNavToggle {
  display: flex;
  flex-direction: column;
  width: 4rem;
  padding: 0 1rem;
  border: 0;
  background-color: transparent;
  gap: 0.56rem;
  cursor: pointer;
  transform: translateX(-80px);
  position: fixed;
  bottom: 1.5rem;
  left: 1rem;

  > span {
    display: block;
    background-color: black;
    height: 2px;
    width: 100%;
    border-radius: 0.2rem;
    transition: all 0.5s;
    transform-origin: right;
  }

  &--active {
    span:nth-child(1) {
      transform: rotate(-45deg);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: rotate(45deg);
    }
  }

  @media (min-width: $breakpoint-laptop) {
    display: none;
  }
}
</style>
