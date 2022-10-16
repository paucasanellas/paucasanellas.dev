<template>
  <button
    class="AppAsideToggle"
    :class="computedClass"
    @click.prevent="appAsideStore.toggleMenu"
  >
    <span />
    <span />
    <span />
  </button>
</template>

<script lang="ts" setup>
import { useAppAsideStore } from '@/stores/appAside'

const appAsideStore = useAppAsideStore()

const computedClass = computed(() => {
  return {
    'AppAsideToggle--active': appAsideStore.isOpen
  }
})
</script>

<style lang="scss">
@import "@/assets/styles/settings/breakpoints";

.AppAsideToggle {
  display: flex;
  flex-direction: column;
  width: 4rem;
  padding: 0 1rem;
  border: 0;
  background-color: transparent;
  gap: 0.56rem;
  cursor: pointer;
  position: fixed;
  bottom: 1.25rem;
  right: 0.75rem;
  transition: all 0.25s;

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
    transform: translateX(-250px);

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
