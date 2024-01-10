<template>
  <div class="inline-flex gap-2">
    <ArticleCategory v-for="category in categories" :key="category" :color="categoriesData[category].color">
      {{ $t('categories.' + category) }}
    </ArticleCategory>
  </div>
</template>

<script lang="ts" setup>
import type { ArticleCategory } from '@/types'

const categoriesData = await queryContent('categories').findOne()

defineProps({
  categories: {
    type: Array as PropType<ArticleCategory[]>,
    required: true
  }
})
</script>
