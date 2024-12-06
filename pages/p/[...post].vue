<script setup lang="ts">
import Giscus from '@giscus/vue'

const route = useRoute()
const post = route.params.post as Array<string>
const path = post.join('/')
</script>

<template>
  <section class="prose relative slide-enter-content">
    <ContentDoc :path="path">
      <template #default="{ doc }">
        <doc-back />
        <doc-render :article="doc" />
        <doc-toc :toc="doc.body.toc" />
        <!-- config your giscus -->
        <Giscus
          repo="your/repo name"
          repo-id="repo id"
          category-id="repo category-id"
          category="comments"
          mapping="title" term="Welcome to my blog!" reactions-enabled="1"
          emit-metadata="1" input-position="top" theme="light_tritanopia" lang="zh-CN" loading="lazy"
        />
      </template>

      <template #empty>
        <h1 class="text-center">
          Document is empty😅
        </h1>
      </template>

      <template #not-found>
        <h1 class="text-center">
          Not Found Any Document😗
        </h1>
      </template>
    </ContentDoc>
  </section>
</template>
