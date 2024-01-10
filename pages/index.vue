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
const { locale } = useI18n()

const [lastArticle] = await queryContent<Article>('articles', locale.value).limit(1).find()
</script>
