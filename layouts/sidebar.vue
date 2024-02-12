<template>
  <div class="pb-24">
    <AppHeader />
    <AppContainer class="grid gap-8 py-4 lg:grid-cols-12">
      <div class="lg:col-span-8">
        <slot />
      </div>
      <ArticleAside />
    </AppContainer>
    <AppFooter />
  </div>
</template>
