<div align="center">
  <h1>Nuxt 3 Blog</h1>
</div>

site style form [antfu.me](https://antfu.me/), But base on [nuxt3](https://nuxt.com/)

## 💡Features

- Nuxt3 technology stack, ssr rendering, more friendly to seo
- Adapt to mobile end layout
- Page loading, dark mode transition animation Simple and elegant
- Use markdown as article format
- Tag Category View Function
- Article search function
- Modified some layout styles on the basis of antfu
- Remove website information configuration and reduce the mental burden of modifying
- Comment function based on giscus

## 🔎Setup
Make sure to install the dependencies:
```
pnpm install
```
open dev serve

```
pnpm dev
```

## 📖Usage

You should modify the following files

- site.config.ts - base site config
- content - your article folder
- pages/projects - your project list
- `pages\post\[...post].vue` - comment config, to [Giscus](https://giscus.app/zh-CN)
- statistics.js - site data statistics code, can be deleted if not needed
  ``` ts
  // nuxt.config.ts
  script: [
    // ⬇ can be deleted
    { src: './statistics.js' },
  ]
```

## Icon
- [icon-park-outline](https://icones.js.org/collection/icon-park-outline)
- [simple-icons](https://icones.js.org/collection/simple-icons)
