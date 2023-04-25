<script setup lang="ts">

</script>

<template>
  <ul class="flex flex-col gap-3em">
    <ContentList>
      <template #default="{ list }">
        <Cell v-for="article in list" :key="article._path" :article="article" />
      </template>
      <template #not-found>
        <p>No articles found.</p>
      </template>
    </ContentList>
  </ul>
</template>
