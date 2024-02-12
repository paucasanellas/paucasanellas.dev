<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { locale } = useI18n()

useSeoMeta({
  titleTemplate: `%s - ${useAppConfig().app.name}`
})

const fetchCategories = async () => {
  const categories = useState('categories')
  categories.value = await queryContent('categories').locale(locale.value).findOne()
}

await callOnce(async () => {
  await fetchCategories()
})

watch(locale, async () => {
  await fetchCategories()
})

</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.15s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.15s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
</style>
