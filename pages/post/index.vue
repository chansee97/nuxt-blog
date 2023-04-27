<script setup lang="ts">
const { data } = await useAsyncData('navigation', () => fetchContentNavigation())
if (!data.value)
  data.value = []
const route = useRoute()
const category = route.query.category as string
const navigation = data.value && data.value.filter(item => item.children)
const dirPath = ref(category || navigation[0]._path || '/')

const router = useRouter()

function changeTag(path: string) {
  dirPath.value = path
  router.push({
    path: route.fullPath,
    query: {
      category: path,
    },
  })
}
</script>

<template>
  <div>
    <ul class="flex gap-1em sm:text-3xl mb-2em">
      <li
        v-for="(item) in navigation" :key="item._path"
        class="cursor-pointer "
        :class="item._path === dirPath ? 'text-deep' : 'deep-hover'"
        @click="changeTag(item._path)"
      >
        {{ item.title }}
      </li>
    </ul>
    <ul class="flex flex-col gap-3em">
      <ContentList :path="dirPath">
        <template #default="{ list }">
          <Cell v-for="article in list" :key="article._path" :article="article" />
        </template>
        <template #not-found>
          <h1 class="text-center">
            No articles found.
          </h1>
        </template>
      </ContentList>
    </ul>
  </div>
</template>
