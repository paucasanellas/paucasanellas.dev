<template>
  <main>
    <AppContainer>
      {{ articles }}
    </AppContainer>
  </main>
</template>

<script lang="ts" setup>
import type { Article } from '@/types'
const { locale } = useI18n()

const articles = await queryContent<Article>('articles')
  .locale(locale.value)
  .sort({ createdAt: -1 })
  .find()

defineI18nRoute({
  paths: {
    en: '/articles',
    es: '/articulos'
  }
})
</script>
