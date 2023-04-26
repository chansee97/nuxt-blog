<script setup lang="ts">
const searchValue = ref('')
const queryResult = ref()
watchEffect(async () => {
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
})
</script>

<template>
  <div>
    <input v-model="searchValue" placeholder="Search post title / description / tag" class="search-input mb-2em">
    <ul class="flex flex-col gap-2em">
      <cell v-for="article in queryResult" :key="article._path" :article="article" />
    </ul>
  </div>
</template>

<style>
.search-input {
  width: 100%;
  padding: 1em;
  background-color: var(--input-bg);
  border-bottom: 2px solid var(--common-bd);
  border-radius: var(--common-rd);
  outline: none;
  transition: var(--common-transition);
}

.search-input:focus {
  border-color: currentcolor;
}
</style>
