<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'

const searchValue = ref('')
const queryResult = ref()

const getQueryResult = useDebounceFn(async () => {
  if (!searchValue.value) {
    queryResult.value = []
    return
  }

  queryResult.value = await queryContent()
    .where({
      $or: [
        { title: { $regex: new RegExp(`.*${searchValue.value}.*`, 'i') } },
        {
          description: {
            $regex: new RegExp(`.*${searchValue.value}.*`, 'i'),
          },
        },
        {
          tags: {
            $contains: searchValue.value,
          },
        },
      ],
    })
    .find()
}, 600)

watch(searchValue, getQueryResult)
</script>

<template>
  <h1 class="text-title mb-2em font-bold">
    Search
  </h1>
  <div class="slide-enter-content">
    <input v-model="searchValue" placeholder="Search post title / description / tag" class="search-input mb-2em">
    <ul>
      <cell
        v-for="(article, index) in queryResult" :key="article._path" :article="article"
        slide-enter :style="{ '--stagger': index + 1 }"
      />
    </ul>
  </div>
</template>

<style>
.search-input {
  width: 100%;
  padding: 1em;
  background-color: var(--input-bg);
  border-bottom: 2px solid var(--common-bd);
  outline: none;
  transition: var(--common-transition);
}

.search-input:focus {
  border-color: currentcolor;
}
</style>
