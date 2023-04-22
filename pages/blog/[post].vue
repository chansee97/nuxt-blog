<script setup lang="ts">
const route = useRoute()
const post = route.params.post as string
</script>

<template>
  <section>
    <ContentDoc :path="post" class="prose" />
  </section>
</template>
