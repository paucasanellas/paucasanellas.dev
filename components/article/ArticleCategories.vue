<template>
  <div class="inline-flex gap-2">
    <template v-for="category in categories" :key="category">
      <ArticleCategory
        v-if="categoriesData[category]"
        :color="categoriesData[category].color || 'primary'"
      >
        {{ categoriesData[category].name || category }}
      </ArticleCategory>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { ArticleCategory, ArticleCategoryOption } from '@/types'

const categoriesData = useState<ArticleCategoryOption>('categories')

defineProps({
  categories: {
    type: Array as PropType<ArticleCategory[]>,
    required: true
  }
})
</script>
