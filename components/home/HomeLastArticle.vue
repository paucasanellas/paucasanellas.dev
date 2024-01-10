<template>
  <section class="mt-4 grid gap-2 md:grid-cols-12 md:gap-8">
    <figure class="md:col-span-5">
      <NuxtLink :to="to">
        <NuxtImg
          :src="article.cover"
          :alt="article.title"
          height="500"
          width="500"
          :modifiers="{w: 500, h: 500}"
        />
      </NuxtLink>
    </figure>
    <div class="grid items-center gap-4 md:col-span-7">
      <p class="font-light uppercase">
        {{ $t('home.lastArticle') }} {{ useDate(article.createdAt).fromNow() }}
      </p>
      <div class="grid gap-4">
        <h2 class="font-display text-xl font-bold uppercase hover:underline md:text-3xl">
          <NuxtLink :to="to">
            {{ article.title }}
          </NuxtLink>
        </h2>
        <div class="flex items-center gap-4 text-sm">
          <ArticleCategories
            v-if="article.categories"
            :categories="article.categories"
          />
          <span>{{ $t('article.readTime', { time: article.readTime }) }}</span>
        </div>
        <p class="font-light md:text-lg">
          {{ article.description }}
        </p>
      </div>
      <ArticleReadMore :to="to" class="ml-auto" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Article } from '@/types'
const localePath = useLocalePath()

const props = defineProps({
  article: {
    type: Object as PropType<Article>,
    required: true
  }
})

const to = localePath({ name: 'articles-slug', params: { slug: props.article.slug } })
</script>
