<template>
  <div :class="AppNavActions.actions">
    <div>
      <AppIcon name="search-outline" size="32" />
    </div>
    <div>
      <AppIcon name="moon-outline" size="32" />
    </div>
    <div>
      <AppIcon name="logo-github-outline" size="32" />
    </div>
  </div>
</template>

<style lang="scss" module="AppNavActions">
.actions {
  margin-top: auto;
  padding-top: 1rem;
  display: flex;
  gap: 1rem;
}
</style>
