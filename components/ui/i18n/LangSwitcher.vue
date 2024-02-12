<template>
  <USelectMenu v-model="currentLocale" :options="locales" variant="none" :ui-menu="{width: 'w-max'}">
    <template #label>
      <UIcon name="i-heroicons-language" class="text-xl" />
    </template>
    <template #option="{ option: language }">
      <span class="truncate">{{ language.name }}</span>
    </template>
  </USelectMenu>
</template>

<script setup>
const { locale, locales } = useI18n()
const localeRoute = useLocaleRoute()

const currentLocale = computed({
  get: () => locales.value.find(language => language.code === locale.value),
  set: (language) => {
    navigateTo(localeRoute('index', language.code))
  }
})
</script>
