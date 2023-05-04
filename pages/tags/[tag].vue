<script setup lang="ts">
const route = useRoute()
const tag = route.params.tag as string

const queryResult = ref()
queryResult.value = await queryContent()
  .where({

    tags: {
      $contains: tag,
    },

  })
  .find()
</script>

<template>
  <div>
    <h1 class="text-title mb-2em">
      <NuxtLink to="/tags" class="hover">
        Tags
      </NuxtLink> / {{ tag }}
    </h1>
    <ul class="flex flex-col gap-2em">
      <cell v-for="article in queryResult" :key="article._path" :article="article" />
    </ul>
  </div>
</template>
