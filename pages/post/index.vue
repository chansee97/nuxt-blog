<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const route = useRoute()
const router = useRouter()

const { data } = await useAsyncData('navigation', () => fetchContentNavigation())
if (!data.value)
  data.value = []
const navigation = data.value && data.value.filter(item => item.children)

const category = route.query.category as string

const dirPath = ref(category || navigation[0]._path || '/')

function changeTag(path: string) {
  dirPath.value = path
  router.push({
    path: route.fullPath,
    query: {
      category: path,
    },
  })
}

const posts = ref()
watchEffect(async () => {
  const postsBySort = await queryContent(dirPath.value)
    .sort({ date: -1 })
    .find()

  const markedPosts: any = []
  let currentYear = -1
  postsBySort.forEach((post: ParsedContent) => {
    const year = new Date(post.date).getFullYear()
    if (year !== currentYear && !isNaN(year)) {
      markedPosts.push({
        isMarked: true,
        year,
      })
      currentYear = year
    }
    markedPosts.push(post)
  })
  posts.value = markedPosts
})
</script>

<template>
  <div>
    <ul class="flex gap-1em  mb-2em">
      <li
        v-for="(item) in navigation" :key="item._path"
        class="cursor-pointer "
        :class="item._path === dirPath ? 'text-deep' : 'deep-hover'"
        @click="changeTag(item._path)"
      >
        <span class="text-title"> {{ item.title }}</span>
      </li>
    </ul>
    <ul>
      <template v-for="(article, index) in posts" :key="index">
        <div v-if="article.isMarked" class="relative pointer-events-none h-20">
          <span class="text-8em font-700 op-5 absolute -top-0.2em -left-0.3em">{{ article.year }}</span>
        </div>
        <Cell v-else :article="article" />
      </template>
    </ul>
  </div>
</template>
