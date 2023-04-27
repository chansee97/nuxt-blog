<script setup lang="ts">
const props = defineProps(['article'])
</script>

<template>
  <doc-toc :toc="props.article.body.toc" />
  <DocTitle :article="props.article" />
  <ContentRenderer :value="props.article" />
  <DocBack />
</template>
