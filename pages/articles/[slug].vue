<template>
  <main>
    <AppContainer>
      {{ params.slug }}
    </AppContainer>
  </main>
</template>

<script lang="ts" setup>
const { params } = useRoute()
</script>
