<script setup lang="ts">
import { formattedDate } from '@/utils'

const props = defineProps(['article'])
</script>

<template>
  <div>
    <h1>{{ props.article.title }}</h1>
    <div class="op-50 mb-4em">
      <div>{{ formattedDate(props.article.date) }}</div>
      <div class="flex gap-2">
        <NuxtLink
          v-for="tag in props.article.tags" :key="tag" :to="`/tags/${tag}`"
        >
          #{{ tag }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
