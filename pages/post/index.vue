<script setup lang="ts">

</script>

<template>
  <ul class="flex flex-col gap-3em">
    <ContentList>
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
</template>
