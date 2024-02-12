<template>
  <main>
    <AppContainer>
      <HomeLastArticle
        v-if="lastArticle"
        :article="lastArticle"
      />
    </AppContainer>
  </main>
</template>

<script setup lang="ts">
import type { Article } from '@/types'
const { locale, t } = useI18n()
const [lastArticle] = await queryContent<Article>('articles')
  .locale(locale.value)
  .sort({ createdAt: -1 })
  .limit(1)
  .find()

useSeoMeta({
  title: t('home.title')
})
</script>
