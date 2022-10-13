<template>
  <button
    class="ToggleComponent"
    :class="open ? 'ToggleComponent--active' : ''"
    @click.prevent="$emit('toggle')"
  >
    <span />
    <span />
    <span />
  </button>
</template>

<script lang="ts" setup>
defineProps({
  open: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss">
.ToggleComponent {
  display: flex;
  flex-direction: column;
  width: 4rem;
  padding: 0 1rem;
  border: 0;
  background-color: transparent;
  gap: 0.56rem;
  cursor: pointer;

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
}
</style>
