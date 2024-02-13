<template>
  <NuxtLayout v-if="error" name="error">
    <AppContainer class="prose dark:prose-invert">
      <h1>{{ error.statusCode }}</h1>
      <h2>
        <template v-if="$te('errors.' + error.statusCode)">
          {{ $t('errors.' + error.statusCode) }}
        </template>
        <template v-else>
          {{ $t('errors.default') }}
        </template>
      </h2>
    </AppContainer>
  </NuxtLayout>
</template>

<script setup>
const error = useError()

const { t, te } = useI18n()

useSeoMeta({
  title: te('errors.' + error.value.statusCode) ? t('errors.' + error.value.statusCode) : t('errors.default')
})
</script>
