<script setup lang="ts">
const props = defineProps(['article'])
const { fullPath } = useRoute()
</script>

<template>
  <NuxtLink :to="`${fullPath}${props.article._path}`">
    <li :title="props.article.title">
      <div class="text-xl">
        {{ props.article.title }}
      </div>
      <div class="text-sm op-50">
        {{ props.article.date }}
      </div>
    </li>
  </NuxtLink>
</template>
