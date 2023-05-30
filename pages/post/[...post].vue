<script setup lang="ts">

import Giscus from '@giscus/vue';

const route = useRoute()
const post = route.params.post as Array<string>
const path = post.join('/')
</script>

<template>
  <section class="prose relative slide-enter-content">
    <ContentDoc :path="path">
      <template #default="{ doc }">
        <DocBack />
        <doc-render :article="doc"/>
        <doc-toc :toc="doc.body.toc" />
        <Giscus repo="chansee97/nuxt-blog" repoId="R_kgDOJZM7Qg" category="comments"
          categoryId="DIC_kwDOJZM7Qs4CW1GZ" mapping="title" term="Welcome to my blog!" reactionsEnabled="1"
          emitMetadata="1" inputPosition="top" theme="light_tritanopia" lang="zh-CN" loading="lazy" />
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
