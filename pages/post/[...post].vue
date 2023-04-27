<script setup lang="ts">
const route = useRoute()
const post = route.params.post as Array<string>
const path = post.join('/')
</script>

<template>
  <section class="prose">
    <ContentDoc :path="path">
      <template #default="{ doc }">
        <doc-render :article="doc" />
      </template>

      <template #empty>
        <h1 class="text-center">
          Document is empty
        </h1>
      </template>

      <template #not-found>
        <h1 class="text-center">
          Document not found
        </h1>
      </template>
    </ContentDoc>
  </section>
</template>
