<script setup lang="ts">
import { formattedDate } from '@/utils'

const props = defineProps(['article'])
</script>

<template>
  <div>
    <h1>{{ props.article.title }}</h1>
    <div class="op-50 mb-4em">
      {{ formattedDate(props.article.date) }}
    </div>
  </div>
</template>
