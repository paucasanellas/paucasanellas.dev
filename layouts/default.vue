<template>
  <div class="LayoutDefault">
    <Container>
      <AppNav />
      <slot />
    </Container>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.LayoutDefault {
  .container {
    display: flex;
  }

  main {
    flex-grow: 1;
  }
}
</style>
