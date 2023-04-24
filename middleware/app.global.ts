import { siteConfig } from '@/site.config'

export default defineNuxtRouteMiddleware((to, _from) => {
  useHead({
    title: to.path,
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - ${siteConfig.title}` : `${siteConfig.title} - site`
    },
    meta: [
      {
        name: 'title',
        content: to.path,
      },
    ],
  })
})
