<template>
  <main v-if="article">
    <header class="grid gap-4">
      <h1 class="font-display text-5xl font-bold">
        {{ article.title }}
      </h1>
      <ArticleCategories
        v-if="article?.categories?.length"
        :categories="article.categories"
      />
      <NuxtImg
        :src="article.cover"
        :alt="article.title"
        height="700"
        width="700"
        class="rounded-lg drop-shadow-xl"
        :modifiers="{ w: 700, h: 700 }"
      />
    </header>
    <ArticleToc
      v-if="article.body?.toc?.links?.length"
      class="mt-8"
      :links="article.body.toc.links"
    />
    <div class="prose mt-8">
      <ContentRendererMarkdown :value="article" />
    </div>
  </main>
</template>

<script lang="ts" setup>
import type { Article } from '@/types'

const { slug } = useRoute().params
const { locale } = useI18n()

const { data: article } = await useAsyncData(
  () => queryContent<Article>(
    'articles',
  slug as string
  ).locale(locale.value).findOne()
)

if (!article.value) {
  throw createError({
    fatal: true,
    statusCode: 404
  })
}

definePageMeta({
  layout: 'sidebar'
})

useSeoMeta({
  title: article.value.title,
  description: article.value.description,
  ogTitle: article.value.title,
  ogDescription: article.value.description,
  ogImage: article.value.cover
})

defineI18nRoute({
  paths: {
    en: '/articles/[slug]',
    es: '/articulos/[slug]'
  }
})
</script>
