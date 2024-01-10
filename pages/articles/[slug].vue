<template>
  <div>
    {{ params.slug }}
  </div>
</template>

<script lang="ts" setup>
const { params } = useRoute()
</script>
