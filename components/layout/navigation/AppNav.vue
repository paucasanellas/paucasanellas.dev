<template>
  <nav class="AppNav">
    <header>
      <div class="AppNav_brand">
        <NuxtLink :to="{ name: 'index' }" class="AppNav_item">
          Pau Casanellas
        </NuxtLink>
      </div>
    </header>
  </nav>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
@import "@/assets/styles/settings/breakpoints";
@import "@/assets/styles/settings/typo";

.AppNav {
  background-color: rgba($color: white, $alpha: 75%);
  backdrop-filter: saturate(180%) blur(5px);
  width: 100%;
  align-items: center;
  display: flex;

  &_item {
    display: block;
    padding: 1rem 1.15rem;
    transition: 0.15s color;
  }

  &_brand {
    .AppNav_item {
      font-family: $font-family-navbar-brand;
      font-weight: $font-weight-navbar-brand;
      font-size: $font-size-navbar-brand;
    }
  }

  @media (max-width: $breakpoint-laptop) {
    position: fixed;
    bottom: 0;
    left: 0;
  }
}
</style>
