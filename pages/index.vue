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
const [lastArticle] = await queryContent<Article>('articles').limit(1).find()
</script>
