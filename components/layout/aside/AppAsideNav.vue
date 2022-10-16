<template>
  <nav class="AppAsideNav">
    <NuxtLink class="AppAsideNav__link" :to="{ name: 'index'}">
      <AppIcon name="home-outline" size="24" /> Home
    </NuxtLink>
    <NuxtLink class="AppAsideNav__link" :to="{ name: 'about' }">
      <AppIcon name="person-circle-outline" size="24" /> About
    </NuxtLink>
    <NuxtLink class="AppAsideNav__link" :to="{ name: 'blog' }">
      <AppIcon name="newspaper-outline" size="24" /> Blog
    </NuxtLink>
    <NuxtLink class="AppAsideNav__link" :to="{ name: 'path' }">
      <AppIcon name="trail-sign-outline" size="24" /> Career Path
    </NuxtLink>
    <NuxtLink class="AppAsideNav__link" :to="{ name: 'tech' }">
      <AppIcon name="terminal-outline" size="24" /> Tech Stack
    </NuxtLink>
    <NuxtLink class="AppAsideNav__link" :to="{ name: 'uses'}">
      <AppIcon name="laptop-outline" size="24" /> Uses
    </NuxtLink>
    <NuxtLink class="AppAsideNav__link" :to="{ name: 'contact'}">
      <AppIcon name="mail-outline" size="24" /> Contact
    </NuxtLink>
  </nav>
</template>

<style lang="scss">
@import "@/assets/styles/settings/typo";

.AppAsideNav {
  padding-top: 2rem;

  &__link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    transition: 0.15s color;
    font-weight: $font-weight-aside;
    font-size: $font-size-aside;

    .icon {
      color: #ccc;
      fill: #ccc;
    }
  }
}
</style>
