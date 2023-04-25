<script setup lang="ts">
const route = useRoute()
const post = route.params.post as string
</script>

<template>
  <section class="prose">
    <ContentDoc :path="post">
      <template #default="{ doc }">
        <doc-toc :toc="doc.body.toc" />
        <DocTitle :article="doc" />
        <ContentRenderer :value="doc" />
      </template>
      <template #empty>
        <h1>Document is empty</h1>
      </template>
      <template #not-found>
        <h1>Document not found</h1>
      </template>
    </ContentDoc>
  </section>
</template>
