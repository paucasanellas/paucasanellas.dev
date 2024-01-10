<template>
  <section class="mt-4 grid items-center gap-8 md:grid-cols-12">
    <div class="md:col-span-5">
      <NuxtLinkLocale :to="{ name: 'articles-slug', params: { slug: article.slug }}">
        <img :src="article.cover" :alt="article.title">
      </NuxtLinkLocale>
    </div>
    <div class="md:col-span-7">
      <div class="grid gap-4">
        <p class="font-display uppercase">
          {{ $t('home.lastArticle') }}
        </p>
        <div>
          <h2 class="font-display text-xl font-bold uppercase hover:underline md:text-3xl">
            <NuxtLinkLocale :to="{ name: 'articles-slug', params: { slug: article.slug }}">
              {{ article.title }}
            </NuxtLinkLocale>
          </h2>
          <p class="mt-2 font-light md:text-lg">
            {{ article.description }}
          </p>
        </div>
        <p class="font-display text-sm">
          <ArticleCategory v-for="category in article.categories" :key="category">
            {{ category }}
          </ArticleCategory>
          <span> · {{ article.readTime }} minutes reading</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Article } from '@/types'
defineProps({
  article: {
    type: Object as PropType<Article>,
    required: true
  }
})
</script>
