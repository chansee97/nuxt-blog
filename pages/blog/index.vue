<script setup lang="ts">

</script>

<template>
  <div>
    <ContentList>
      <template #default="{ list }">
        <div v-for="article in list" :key="article._path">
          <h2 :title="article.title">
            <NuxtLink :to="`blog${article._path}`">
              {{ article.title }}
            </NuxtLink>
          </h2>
          <p :title="article.description">
            {{ article.description }}
          </p>
        </div>
      </template>
      <template #not-found>
        <p>No articles found.</p>
      </template>
    </ContentList>
  </div>
</template>
