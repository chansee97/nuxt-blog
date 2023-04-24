import { siteConfig } from '@/site.config'

export default defineNuxtRouteMiddleware((to, _from) => {
  useHead({
    title: to.path,
    titleTemplate: (titleChunk) => {
      const title = titleChunk?.replace(/^\/+/, '') || siteConfig.title
      return title
    },
    meta: [
      {
        name: 'title',
        content: to.path,
      },
    ],
  })
})
