// https://nuxt.com/docs/api/configuration/nuxt-config
import { siteConfig, siteSources } from './site.config'

export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxtjs/stylelint-module',
  ],
  runtimeConfig: {
    public: {
      GITHUB_REPO: process.env.NUXT_GITHUB_REPO,
      GITHUB_PREFIX: process.env.NUXT_GITHUB_PREFIX,
      GITHUB_BRANCH: process.env.NUXT_GITHUB_BRANCH,
    },
  },
  app: {
    rootId: 'nuxt-root',
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      meta: [
        { name: 'description', content: siteConfig.description },
        { name: 'author', content: siteConfig.author },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'revisit-after', content: '7 days' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { charset: 'UTF-8' },
        { 'http-equiv': 'X-UA-Compatible', 'content': 'IE=edge' },
      ],
      noscript: [
        { children: 'JavaScript is required' },
      ],
      htmlAttrs: {
        lang: siteConfig.lang,
      },
      bodyAttrs: {
        class: 'font-sans',
      },
    },
  },
  content: {
    sources: siteSources,
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'vitesse-light',
        // Theme used if `html.dark`
        dark: 'vitesse-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai',
      },
      preload: [
        'c',
        'cpp',
        'java',
      ],

    },
  },
  css: [
    '@unocss/reset/tailwind.css',
    '@/assets/styles/global.scss',
    '@/assets/styles/theme.css',
    '@/assets/styles/markdown.scss',
  ],
  stylelint: {
    /* module options */
    lintOnStart: false,
  },
})
