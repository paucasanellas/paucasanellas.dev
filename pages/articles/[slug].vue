<template>
  <main>
    <AppContainer>
      {{ params.slug }}
      {{ article }}
    </AppContainer>
  </main>
</template>

<script lang="ts" setup>
import type { Article } from '@/types'

definePageMeta({
  layout: 'sidebar'
})

const { params } = useRoute()
const { locale } = useI18n()

const article = await queryContent<Article>('articles', locale.value).where({ slug: params.slug }).findOne()
</script>
