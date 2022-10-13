<template>
  <nav class="AppNavMenu">
    <NuxtLink class="AppNavMenu__link" :to="{ name: 'index'}">
      <Icon name="ion:home-outline" size="24" /> Home
    </NuxtLink>
    <NuxtLink class="AppNavMenu__link" :to="{ name: 'about' }">
      <Icon name="ion:person-circle-outline" size="24" /> About
    </NuxtLink>
    <NuxtLink class="AppNavMenu__link" :to="{ name: 'blog' }">
      <Icon name="ion:newspaper-outline" size="24" /> Blog
    </NuxtLink>
    <NuxtLink class="AppNavMenu__link" :to="{ name: 'path' }">
      <Icon name="ion:trail-sign-outline" size="24" /> Career Path
    </NuxtLink>
    <NuxtLink class="AppNavMenu__link" :to="{ name: 'tech' }">
      <Icon name="ion:terminal-outline" size="24" /> Tech Stack
    </NuxtLink>
    <NuxtLink class="AppNavMenu__link" :to="{ name: 'uses'}">
      <Icon name="ion:laptop-outline" size="24" /> Uses
    </NuxtLink>
    <NuxtLink class="AppNavMenu__link" :to="{ name: 'contact'}">
      <Icon name="ion:mail-outline" size="24" /> Contact
    </NuxtLink>
  </nav>
</template>

<style lang="scss">
@import "@/assets/styles/settings/typo";

.AppNavMenu {
  padding-top: 2rem;

  &__link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    transition: 0.15s color;
    font-weight: $font-weight-navbar;
    font-size: $font-size-navbar;

    .icon {
      color: #ccc;
      fill: #ccc;
    }
  }
}
</style>
