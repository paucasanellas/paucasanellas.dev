<template>
  <aside class="AppNav" :class="isOpen ? 'AppNav--open' : ''">
    <ToggleComponent class="AppNav__toggle" :open="isOpen" @toggle="toggleMenu" />
    <nav class="AppNav__menu">
      <a class="AppNav__link">
        <IconHome width="24" /> Home
      </a>
      <a class="AppNav__link">
        <IconAbout width="24" /> About
      </a>
      <a class="AppNav__link">
        <IconBlog width="24" /> Blog
      </a>
      <a class="AppNav__link">
        <IconPath width="24" /> Career Path
      </a>
      <a class="AppNav__link">
        <IconTech width="24" /> Tech Stack
      </a>
      <a class="AppNav__link">
        <IconUses width="24" /> Uses
      </a>
    </nav>

    <div class="AppNav__actions">
      <div class="AppNav__action">
        <IconSearch width="32" />
      </div>
      <div class="AppNav__action">
        <IconMoon width="32" />
      </div>
      <div class="AppNav__action">
        <IconMail width="32" />
      </div>
      <div class="AppNav__action">
        <IconGithub width="32" />
      </div>
    </div>
  </aside>
</template>

<script lang="ts" setup>
const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<style lang="scss">
@import "@/assets/styles/settings/breakpoints";
@import "@/assets/styles/settings/typo";

.AppNav {
  background-color: white;
  padding: 1rem;
  width: 250px;
  border-right: 1px solid #ddd;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: $font-family-navbar;

  &__toggle {
    transform: translateX(-80px);
    position: fixed;
    bottom: 1.5rem;
    left: 1rem;
    display: none;
  }

  &__menu {
    padding-top: 2rem;
  }

  &__title {
    font-size: 1rem;
    font-weight: 400;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

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

  &__actions {
    margin-top: auto;
    padding-top: 1rem;
    display: flex;
    gap: 1rem;
  }

  @media (max-width: $breakpoint-laptop) {
    position: fixed;
    right: 0;
    top: 0;
    transform: translateX(250px);
    transition: 0.25s;
    height: 100%;
    border: 0;
    border-left: 1px solid #ddd;

    &__toggle {
      display: flex;
    }

    &--open {
      transform: translateX(0);
    }
  }
}
</style>
