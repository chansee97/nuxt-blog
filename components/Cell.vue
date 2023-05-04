<script setup lang="ts">
import { formattedDate } from '@/utils'

const props = defineProps(['article'])
</script>

<template>
  <NuxtLink :to="`/post${props.article._path}`">
    <li :title="props.article.title" class="hover list-none flex flex-col md:(gap-2 flex-row items-center)">
      <span class="text-lg">
        {{ props.article.title }}
      </span>
      <span class="text-sm op-70">
        {{ formattedDate(props.article.date) }}
      </span>
    </li>
  </NuxtLink>
</template>
