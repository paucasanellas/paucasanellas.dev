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
    min-height: 100vh;
  }

  main {
    flex-grow: 1;
    padding: 2rem;
  }
}
</style>
