<template>
  <div class="prose rounded-lg bg-gray-100 p-4 shadow">
    <h4>{{ $t('article.toc') }}</h4>
    <ul>
      <li v-for="link in links" :key="link.id">
        <NuxtLink :to="{hash: '#' + link.id}">
          {{ link.text }}
        </NuxtLink>
        <ul v-if="link.children">
          <li v-for="sublink in link.children" :key="sublink.id">
            <NuxtLink :to="{hash: '#' + sublink.id}">
              {{ sublink.text }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  links: {
    type: Array as PropType<any>,
    required: true
  }
})
</script>
