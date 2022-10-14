<template>
  <component :is="tag" class="container" :class="computedClass">
    <slot />
  </component>
</template>

<script setup lang="ts">
defineComponent({
  name: 'ObjectContainer'
})

const props = defineProps({
  tag: {
    type: String,
    default: 'div'
  },
  expanded: {
    type: Boolean,
    default: false
  },
  padding: {
    type: Boolean,
    default: false
  }
})

const computedClass = computed(() => {
  return {
    'container--expanded': props.expanded,
    'container--padding': props.padding
  }
})
</script>

<style lang="scss">
@import "@/assets/styles/settings/breakpoints";

.container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;

  @media (min-width: $breakpoint-laptop) {
    max-width: $breakpoint-laptop;
  }

  @media (min-width: $breakpoint-desktop) {
    max-width: $breakpoint-desktop;
  }

  @media (min-width: $breakpoint-widescreen) {
    max-width: $breakpoint-widescreen;
  }

  &--expanded {
    max-width: 100%;
  }

  &--padding {
    padding: 0 1rem;
  }
}
</style>
