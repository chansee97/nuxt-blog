<script setup lang="ts">
import { formattedDate } from '@/utils'

const props = defineProps(['article'])
</script>

<template>
  <NuxtLink :to="`/post${props.article._path}`">
    <li :title="props.article.title" class="hover list-none">
      <div class="text-lg">
        {{ props.article.title }}
      </div>
      <div class="text-sm op-70">
        {{ formattedDate(props.article.date) }}
      </div>
    </li>
  </NuxtLink>
</template>
