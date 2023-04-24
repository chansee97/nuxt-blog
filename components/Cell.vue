<script setup lang="ts">
import { format, parseISO } from 'date-fns'

const props = defineProps(['article'])

function formattedDate(date: string) {
  if (!date) return ''
  const dateObject = parseISO(date)
  const formattedResult = format(dateObject, 'MMM dd, yyyy')
  return formattedResult
}

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
