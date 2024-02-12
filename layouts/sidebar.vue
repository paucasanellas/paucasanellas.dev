<template>
  <div class="pb-24">
    <AppHeader />
    <AppContainer class="grid gap-8 py-4 lg:grid-cols-12">
      <div class="lg:col-span-9">
        <slot />
      </div>
      <div class="lg:col-span-3">
        <div class="sticky top-16">
          Sidebar
        </div>
      </div>
    </AppContainer>
    <AppFooter />
  </div>
</template>
