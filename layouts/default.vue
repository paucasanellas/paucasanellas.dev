<template>
  <div class="LayoutDefault">
    <AppNav />
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.LayoutDefault {
  display: flex;
  min-height: 100vh;

  main {
    flex-grow: 1;
    padding: 2rem;
  }
}
</style>
