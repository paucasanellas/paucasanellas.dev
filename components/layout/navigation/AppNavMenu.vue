<template>
  <nav class="AppNavMenu">
    <a class="AppNavMenu__link">
      <IconHome width="24" /> Home
    </a>
    <a class="AppNavMenu__link">
      <IconAbout width="24" /> About
    </a>
    <a class="AppNavMenu__link">
      <IconBlog width="24" /> Blog
    </a>
    <a class="AppNavMenu__link">
      <IconPath width="24" /> Career Path
    </a>
    <a class="AppNavMenu__link">
      <IconTech width="24" /> Tech Stack
    </a>
    <a class="AppNavMenu__link">
      <IconUses width="24" /> Uses
    </a>
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
