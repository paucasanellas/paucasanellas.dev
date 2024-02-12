<template>
  <div class="min-h-dvh dark:bg-slate-800">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
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

.dark h1, .dark h2, .glow {
    color: #ffffff;
    animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 5px #f36cb0, 0 0 10px #ff4da6;
  }

  to {
    text-shadow: 0 0 10px #ff4da6, 0 0 15px #ff4da6;
  }
}
</style>
