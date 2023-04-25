<script setup lang="ts">
import { formattedDate } from '@/utils'

const props = defineProps(['article'])

const { fullPath } = useRoute()
</script>

<template>
  <NuxtLink :to="`${fullPath}${props.article._path}`">
    <li :title="props.article.title" class="hover">
      <div class="text-xl">
        {{ props.article.title }}
      </div>
      <div class="text-sm op-70">
        {{ formattedDate(props.article.date) }}
      </div>
    </li>
  </NuxtLink>
</template>
