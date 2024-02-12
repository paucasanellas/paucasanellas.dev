<template>
  <main>
    <AppContainer>
      {{ articles }}
    </AppContainer>
  </main>
</template>

<script lang="ts" setup>
import type { Article } from '@/types'

const { slug } = useRoute().params
const { locale } = useI18n()

const articles = await queryContent<Article>('articles')
  .locale(locale.value)
  .sort({ createdAt: -1 })
  .where({ categories: { $in: [slug as string] } })
  .find()

defineI18nRoute({
  paths: {
    en: '/articles/category/[slug]',
    es: '/articulos/categorias/[slug]'
  }
})
</script>
