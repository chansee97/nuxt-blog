<script setup lang="ts">
import { format, parseISO } from 'date-fns'

const props = defineProps(['article'])

function formattedDate(date: string) {
  if (!date) return ''
  const dateObject = parseISO(date)
  const formattedResult = format(dateObject, 'MMM dd , yyyy')
  return formattedResult
}

// function getReadTime(content: string) {
//   const charsPerMinute = 450 // 每分钟阅读字符数
//   const charCount = content.length // 统计字符数
//   return Math.round(charCount / charsPerMinute) // 计算阅读时间，四舍五入
// }

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
