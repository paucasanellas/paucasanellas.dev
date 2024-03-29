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
        class="w-full rounded-lg drop-shadow-xl"
        :modifiers="{ w: 700, h: 700 }"
      />
    </header>
    <ArticleToc
      v-if="article.body?.toc?.links?.length"
      class="mt-8"
      :links="article.body.toc.links"
    />
    <div class="prose mt-8 dark:prose-invert">
      <ContentRendererMarkdown :value="article" />
    </div>
  </main>
</template>

<script lang="ts" setup>
import type { Article } from '@/types'

const { slug } = useRoute().params
const { locale } = useI18n()

const article = await queryContent<Article>(
  'articles',
  slug as string
).locale(locale.value).findOne()

if (!article) {
  throw createError({
    fatal: true,
    statusCode: 404
  })
}

definePageMeta({
  layout: 'sidebar'
})

useSeoMeta({
  title: article.title,
  description: article.description,
  ogTitle: article.title,
  ogDescription: article.description,
  ogImage: article.cover
})

defineI18nRoute({
  paths: {
    en: '/articles/[slug]',
    es: '/articulos/[slug]'
  }
})
</script>
