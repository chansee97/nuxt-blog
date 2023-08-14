---
date: 2023-08-14 12:15:49
url: 
tags: 
title: 25 个 Nuxt3 开发技巧
en-title: 25-time-saving-tips-for-nuxt3
---

> 原文地址： https://masteringnuxt.com/blog/24-time-saving-tips-for-nuxt3
> 
> 我的博客： https://iamsee.top


我们知道 Nuxt 是一款出色的工具。

但它有太多令人惊叹的功能，很难一一记住。

这就是为什么我为您编制了这份包含 25 条 Nuxt 提示的巨大列表--使用它们来节省时间并编写更好的 Nuxt 应用程序。

这里涵盖了很多主题，包括

- 何时使用 `/assets` 与 `/public` 目录
- 使用 `runtimeConfig` 与 `app.config`
- 了解通用渲染的工作原理（以及它与 SPA 和 SSR 的区别）
- 制作无人问津的 `NuxtLink` 组件的实用工具
- 为数据获取添加基本缓存--因为默认情况下 Nuxt 不会这样做

当然，还有更多！

您最喜欢哪个技巧？

## 1 . 懒加载组件
并非所有组件都需要立即加载。
使用 Nuxt，我们可以通过添加 Lazy 作为前缀来延迟加载。

Nuxt 会为我们完成所有繁重的工作！
```html
<!-尽快加载 -->
<Modal v-if="showModal" />

<!-只有当 showModal = true 时加载 -->
<LazyModal v-if="showModal" />
```

## 2 . 用 Nitro 预渲染特定路由
通过直接配置 Nitro，我们可以只对某些路由进行预渲染。

其他所有路由都将像普通路由一样使用混合渲染：
```js
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ['/about', '/blog'],
    },
  },
})
```

## 3 . 使用内置键值存储
在 Nuxt 中，我们可以使用简单但功能强大的内置键值存储：
```js
const storage = useStorage()
const key = 'session:token'

// 保存值
await storage.setItem(key, sessionToken)

// …并在不同接口中调用
const token = await storage.getItem(key)
```

## 4 . 自动导入
利用自动导入功能，我们可以快速访问路由和用户信息，而无需手动导入。

这有助于使我们的代码更有条理、更高效、更易读。

```html
<script setup>
// 我们可以使用已导入的路由和用户，而无需自行导入
const { path, params } = useRoute();
const userData = useCustomComposable();
</script>
```

## 5 . 反应式控制头部脚本
Nuxt 3 允许开发人员使用 `useHead` 可组合功能对应用程序的 `<head`> 进行反应式控制。

这样就可以使用动态 `titleTemplate` 或动态脚本标签：
```js
useHead({
  titleTemplate: title => `${title} | My Website`,
  script: [
    {
      src: 'https://www.scripts.com/some/other/script.js',
      body: true
    }
  ]
})
```

## 6 . 快速获取路由信息
Nuxt3 中的 `useRoute` 可组合功能可轻松从路由和查询参数中获取信息。

下面是一个示例：
```js
const route = useRoute()

console.log(route.fullPath)
// https://www.website.com/?search=hello%20there

console.log(route.query.search)
// there
```

## 7 . 轻松处理客户端错误
使用 `NuxtErrorBoundary` 组件围绕应用程序中不同的功能块，可让您一起处理一组错误，从而提供更好的用户体验。

这样，您就可以在应用程序中包含错误，并以特定的方式处理它们，而不是使用通用的错误页面。
```html
<NuxtErrorBoundary>
  <NuxtPage />
  <template #error="{ error }">
    <div>
      <p>
        Oh no, something broke when loading the lesson!
        <code>{{ error }}</code>
      </p>
      <p>
        <button
          class="hover:cursor-pointer"
          @click="clearError(error)"
        >
          Go to the first lesson
        </button>
      </p>
    </div>
  </template>
</NuxtErrorBoundary>
```

## 8 . 嵌套路由（又称子路由）
Nuxt 使用 `NuxtPage` 组件来呈现应用程序 `pages/` 目录中的页面。

添加嵌套的 `NuxtPage` 组件可让你匹配文件夹层次结构中的多个页面，从而实现更灵活的路由：
```html
// pages/one/two/three.vue
<template>
  <!-这个嵌套的 NuxtPage 渲染子路由 -->
  <NuxtPage />
</template>
```
Nuxt 中的嵌套路由可视为文件夹层次结构，有助于组织和结构化应用程序。

例如，路由 /one/two/three 相当于这种文件夹结构：
```
one/
- two/
- - three/
```

## 9 . `/assets` 与 `/public` - 如何决定？
Nuxt 3 为管理网络程序中的资产提供了两种选择：

- `~/assets` 文件夹
- `~/public` 文件夹
如果资产需要处理、经常变化且不需要特定的文件名，请选择 `assets` 文件夹。

否则，请使用 `public` 目录。
```html
// 使用 ~/assets
<script setup>
import image from '~/assets/image.png';
</script>
<template>
  <img :src="image" />
</template>

// 使用 ~/public
<template>
  <img src="/image.png" />
</template>
```

## 10 . 使用 `/assets` 目录
Nuxt 3 中的 `~/assets` 文件夹适用于需要处理的资产。

例如，图像、样式表、图标和字体。

从该文件夹导入资产时，捆绑程序会处理文件，生成带有哈希值的新文件名，并用新文件名替换导入文件。
```js
import image from '~/assets/image.png'
import style from '~/assets/style.css'
```

`~/assets` 文件夹还有一个好处，就是可以在构建过程中捕捉丢失的资产。如果资产丢失，就会出现构建错误，这有助于维护应用程序的完整性。而 `~/public` 文件夹中的资产不会出现这种情况，因为它们不会被处理。
```
// 从 ~/assets 导入时会发现丢失的资产
import missingImage from '~/assets/missing-image.png'; 
// 构建错误

// 从 ~/public 引用不会捕获丢失的资产
// 在模板中: <img src="/missing-image.png" /> 
// 不会构建错误
```

## 11 . 使用 `/public` 目录
`~/public`文件夹适用于无需处理的资产，应直接从应用程序根目录提供。
该文件夹中的文件不会被修改，会直接复制到构建输出中。
```
// 从 ~/public 访问文件
yourwebsite.com/robots.txt
yourwebsite.com/favicon.ico
yourwebsite.com/sitemap.xml
```

## 12 . 定制自己的 NuxtLink
如果需要，你还可以使用 `defineNuxtLink` 将这些不同的配置封装到自己的链接组件中：
```js
// ~/components/MyLink.ts

// 在开发过程中只对预置链接着色
export default defineNuxtLink({
  componentName: 'MyLink',
  prefetchedClass: process.env.NODE_ENV === 'development'
    ? 'prefetched'
    : undefined,
})
```

在这里，我们创建了自己的 MyLink 组件，它将在预取链接上设置一个特殊的类，但仅限于开发期间。

你还可以用 `defineNuxtLink` 做更多事情：
```ts
defineNuxtLink({
  componentName?: string;
  externalRelAttribute?: string;
  activeClass?: string;
  exactActiveClass?: string;
  prefetchedClass?: string;
  trailingSlash?: 'append' | 'remove'
}) => Component
```

如果您想了解更多信息，我建议您直接查看[文档](https://nuxt.com/docs/api/components/nuxt-link)或[源代码](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/components/nuxt-link.ts)本身。

## 13 . 使用 NuxtLink 预取页面
对于内部链接，`NuxtLink` 可以检查它是否按顺序出现在视口中，这样它就能在你需要之前预加载数据：
```html
<NuxtLink to="/articles" prefetch>Articles</NuxtLink>
```

这种行为默认是开启的，所以大多数情况下你根本不需要担心。但如果出于某种原因需要禁用，该prop还是很有用的：
```html
<NuxtLink to="/articles" :prefetch="false">Articles</NuxtLink>
```

我们也可以用 `noPrefetch` 做同样的事情：
```html
<NuxtLink to="/articles" no-prefetch>Articles</NuxtLink>
```

如果路由已被预检，Nuxt 将在链路上设置一个 prefetchedClass：
```html
<NuxtLink
    to="/articles"
    prefetched-class="prefetched"
>
    Articles
</NuxtLink>
```

这在调试过程中可能非常有用，但对最终用户可能就没那么有用了！

## 14 . 使用 NuxtLink 的外部链接
你知道 `NuxtLink` 也能处理外部链接吗？

为了安全起见，它会自动添加 `noopener` 和 `noreferrer`。

它会自动检测外部链接，但如果需要，也有一个 `external` prop。
```html
<NuxtLink to="www.masteringnuxt.com" external>
  Mastering Nuxt 3!
</NuxtLink>
```

对于外部链接，它会自动添加 `noopener` 和 `noreferrer` 属性，以确保安全：
```html
<!-- 使用a标签 -->
<a href="www.masteringnuxt.com" rel="noopener noreferrer">Mastering Nuxt 3</a>

<!-- 使用NuxtLink替代 -->
<NuxtLink to="www.masteringnuxt.com">Mastering Nuxt 3</NuxtLink>
```

## 15 . 数据取回和关键参数
`key` 参数是可以提供给 `useAsyncData` 和 `useFetch` 组件的可选参数。

在内部，`key` 参数用于为获取的数据创建唯一标识符。如果数据已在服务器上获取，这将有助于减少客户端不必要的数据获取，从而优化应用程序的性能。

假设您正在构建一个音乐制作应用程序，用户可以选择一个项目并查看相关曲目。您可以使用 `key` 参数确保在所选项目发生变化时更新曲目：
```html
<template>
  <div>
    <select v-model="selectedProject">
      <option v-for="project in projects" :value="project.id" :key="project.id">
        {{ project.name }}
      </option>
    </select>

    <div v-if="pending">Loading tracks…</div>
    <div v-else-if="error">{{ error.message }}</div>
    <div v-else>
      <ul>
        <li v-for="track in tracks" :key="track.id">{{ track.name }}</li>
      </ul>
    </div>
  </div>
</template>
```

```js
const selectedProject = ref(1)
const projects = [
  { id: 1, name: 'Project A' },
  { id: 2, name: 'Project B' },
  { id: 3, name: 'Project C' },
]

const { data: tracks, pending, error } = useAsyncData(
  'tracks',
  () => fetch(`https://api.example.com/projects/${selectedProject.value}/tracks`)
)
```

这里的 `key` 是 `tracks `。

当数据在服务器上获取并与客户端捆绑包一起传递时，客户端知道它不需要重新获取这些数据，因为它们已经被获取过了。
如果不提供 `key`，Nuxt 会根据使用密钥的行和文件自动为你创建一个 `key`。

## 16 . 使用 Supabase + Nuxt 轻松进行身份验证
要使用 Github 作为 OAuth 提供者登录用户，我们可以使用 Supabase auth 客户端：
```js
const supabase = useSupabaseAuthClient()

const login = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })

  if (error)
    console.error(error)
    // 处理错误，例如向用户显示通知

}
```

真的没别的了！

## 17 . useAsyncData 可组合器
`useAsyncData` composable是 Nuxt 提供的一种功能强大的composable，它允许你在组件中异步获取数据。

当你需要在渲染组件前从 API 获取数据或执行其他异步任务时，这一点尤其有用。

下面是一个示例，说明如何在音乐制作应用程序中使用 `useAsyncData` 来获取乐器列表：
```html
<template>
  <div>
    <h1>Available Instruments</h1>
    <ul v-if="!pending && !error">
      <li v-for="instrument in instruments" :key="instrument.id">
        {{ instrument.name }}
      </li>
    </ul>
    <p v-if="pending">Loading…</p>
    <p v-if="error">Error: {{ error.message }}</p>
  </div>
</template>
```

```js
const { data: instruments, pending, error } = useAsyncData(
  'instruments',
  () => fetch('https://api.example.com/instruments')
)
```
在示例中，我们使用 `useAsyncData` 获取工具列表，并将结果赋值给响应式工具变量。

我们还可以访问 `pending` 和 `error` 属性，这些属性可用于在模板中显示加载和出错状态。

您可以查看[文档](https://nuxt.com/docs/api/composables/use-async-data)了解更多信息。

## 18 . 可组合的 useFetch 
这是 Nuxt 提供的另一种可组合器，可简化组件中的数据获取。

它是 `useAsyncData` 的包装器，并提供了一些附加功能，例如根据 URL 和获取选项自动生成密钥。

下面举例说明如何在音乐制作应用程序中使用 `useFetch` 来获取特定项目的曲目列表：
```html
<template>
  <div>
    <h1>Project Tracks</h1>
    <ul v-if="!pending && !error">
      <li v-for="track in tracks" :key="track.id">
        {{ track.name }}
      </li>
    </ul>
    <p v-if="pending">Loading…</p>
    <p v-if="error">Error: {{ error.message }}</p>
  </div>
</template>
```

```js
const projectId = 1
const { data: tracks, pending, error } = useFetch(
  `https://api.example.com/projects/${projectId}/tracks`
)
```

在上面的示例中，我们会检查 `pending` 是否为 true，如果为 true 则显示加载信息。此外，我们还会检查是否有错误，如果有，则显示错误信息。

为确保在项目 ID 变更时更新组件，您可以将 `projectId` 作为 `ref` 传入：
```js
const projectId = ref(1)
const { data: tracks, pending, error } = useFetch(
  () => `https://api.example.com/projects/${projectId.value}/tracks`
)
```
这样，如果 projectId 值发生变化，URL 就会相应更新，并重新获取数据。

如果需要，您可以查看[文档](https://nuxt.com/docs/api/composables/use-fetch)了解更多信息。

## 19 . 使用 VSharp 压缩图像
有几种不同的 Vite 插件可用于压缩图片，但在本提示中我们将使用 [vsharp](https://github.com/jw-12138/vite-plugin-vsharp)。

要安装，请运行 `pnpm add -D vite-plugin-vsharp`。

然后，我们更新配置，使其看起来像这样：
```js
import vsharp from 'vite-plugin-vsharp'

export default defineNuxtConfig({
  // 👇 添加 vsharp 到 vite 插件
  vite: {
    plugins: [vsharp()],
  },

  // Nuxt 配置的其余部分
  runtimeConfig: {
    // …
  },
  modules: [
    // …
  ],
})
```

就是这样！

只要我们确保图片位于 `/assets` 中，然后导入到组件中，它们就会在构建过程中被压缩。

对于一个小小的配置更改来说，这已经是很大的成功了！

## 20 . 为获取添加基本缓存
下面是我们的可组合 `useFetchWithCache` ，比如这样：
```js
// ~/composables/useFetchWithCache.ts

import { StorageSerializers } from '@vueuse/core';

export default async <T>(url: string) => {
  // Use sessionStorage to cache data
  const cached = useSessionStorage<T>(url, null, {
    serializer: StorageSerializers.object,
  });

  if (!cached.value) {
    const { data, error } = await useFetch<T>(url);

    if (error.value) {
      throw createError({
        …error.value,
        statusMessage: `Could not fetch data from ${url}`,
      });
    }

    // 更新缓存
    cached.value = data.value as T;
  } else {
    console.log(`Getting value from cache for ${url}`);
  }

  return cached;
};
```

以下是如何使用它的两个示例：

```js
// 获取所有用户
const user = useFetchWithCache<User[]>('/api/users') 

// 或者是读取设置
const settings = useFetchWithCache<Settings>('/api/settings')
```

阅读[完整的教程](https://masteringnuxt.com/blog/writing-a-cache-composable-in-nuxt-3)，详细了解这一切是如何工作的。

## 21 . 了解通用渲染的优势
针对 SPA 和 SSR 的局限性，Nuxt 结合了它们的优势，提供了一种独特的解决方案。这种方法被称为通用渲染（Universal Rendering），它提供了两种方法的最佳优势。

### 闪电般快速的首次页面加载
在首次页面加载时，Nuxt 使用 SSR 提供快速的初始体验。

它在服务器上处理请求，并发回 HTML 和其他必要文件，与传统的 SSR 应用程序类似。这可确保用户无需等待，这对于保持用户参与度和优化搜索引擎排名尤为重要。

### 无缝过渡到 SPA
然而，Nuxt 并没有止步于最初的 SSR。

它还以 SPA 的形式加载整个应用程序，因此加载第一个页面后的所有操作都非常迅速。一旦加载了初始页面，Nuxt 就会切换到 SPA 模式，允许用户在应用程序内导航，而无需往返服务器。

### 性能增强和优化
值得注意的是，Nuxt 不仅仅是结合了 SSR 和 SPA 方法。该框架还包含大量性能增强和优化功能。

例如，Nuxt 可确保只发送必要的数据，并在需要时智能地预取数据。

这些优化和许多其他优化都有助于提高 Nuxt 应用程序的整体速度和效率。从本质上讲，Nuxt 在不牺牲性能的情况下提供了无缝的用户体验，为开发人员提供了 SPA 和 SSR 两个世界的最佳体验。

## 22 . 在新标签页中打开 NuxtLinks
如果希望链接在新标签页（或窗口，取决于用户浏览器的工作方式）中打开，可以使用 `target` 属性：
```html
<NuxtLink
    to="/articles"
  target="_blank"
>
    Mastering Nuxt 3
</NuxtLink>
```

## 23 . 使用哪种配置？ runtimeConfig vs. appConfig
为了更好地了解 `runtimeConfig` 和 `app.config` 之间的异同，让我们来看看这张功能对照表（摘自 [Nuxt 文档](https://nuxt.com/docs/getting-started/configuration#runtimeconfig-vs-appconfig)）：

| 特点                   | runtimeConfig | app.config |
| ---------------------- | ------------- | ---------- |
| 客户端                 | 混合          | 绑定       |
| 环境变量               | ✅ Yes        | ❌ No      |
| 响应式                 | ✅ Yes        | ✅ Yes     |
| 类型支持               | ✅ Partial    | ✅ Yes     |
| 按要求配置             | ❌ No         | ✅ Yes     |
| 模块热更新             | ❌ No         | ✅ Yes     |
| 非原始JS类型 | ❌ No         | ✅ Yes     |

`runtimeConfig` 和 `app.config` 都允许您向应用程序公开变量。不过，它们之间存在一些主要区别：

1. `runtimeConfig` 支持环境变量，而 `app.config` 不支持。这使得 `runtimeConfig` 更适用于需要在构建后使用环境变量指定的值。
2. `runtimeConfig` 的值是在运行时在客户端水合的，而 `app.config` 的值是在构建过程中捆绑的。
3. `app.config` 支持热模块替换（HMR），这意味着在开发过程中无需重新加载整个页面即可更新配置。
4. `app.config` 值可以使用 TypeScript 进行完全类型化，而 `runtimeConfig` 则不行。

要决定使用 `runtimeConfig` 还是 `app.config`，我会这样考虑：

- **runtimeConfig**： 对于需要在构建后使用环境变量指定的私有或公共标记，使用 runtimeConfig。这对于敏感信息或可能在不同环境中发生变化的值来说非常理想。
- **app.config**： 将 app.config 用于在构建时确定的公共标记，如网站配置（主题变体、标题）或任何不敏感的项目配置。由于 app.config 支持 HMR，因此对于在开发过程中无需重新加载整个页面即可更新的值，它尤其有用。

## 24 . 使用 runtimeConfig
`runtimeConfig` 用于在应用程序中公开环境变量和私有令牌，例如 API 密钥或其他敏感信息。这些值可在 `nuxt.config.ts` 文件中设置，也可使用环境变量覆盖。

要在 `nuxt.config.ts` 文件中设置私钥和公钥，可以使用下面的代码示例：

```js
export default defineNuxtConfig({
  runtimeConfig: {
    // 仅在服务器端可用的私钥
    shoeStoreApiSecret: 'my-secret-key',
    // 公共密钥也在客户端公开
    public: {
      shoeStoreApiBase: '/shoe-api'
    }
  }
})
```

要在应用程序中访问 `runtimeConfig` 值，可以使用 `useRuntimeConfig` 可组合功能：

```html
<script setup lang="ts">
const { shoeStoreApiBase } = useRuntimeConfig();
console.log(shoeStoreApiBase); // /shoe-api
</script>
```

请注意，您无法在客户端访问私钥：

```html
<script setup lang="ts">
const { shoeStoreApiSecret } = useRuntimeConfig();
console.log(shoeStoreApiSecret); // undefined
</script>
```

但您可以访问服务器路由中的所有值：

```js
export default defineEventHandler(async (event) => {
  const { shoreStoreApiSecret } = useRuntimeConfig()
  console.log(shoeStoreApiSecret) // my-secret-key
})
```

您可以在 **.env** 文件中设置环境变量，以便在开发和构建/生成过程中访问它们。只需确保使用正确的前缀。

在所有内容前加上 `NUXT_`，如果是配置中公共字段的值，别忘了加上 `PUBLIC`：

```
NUXT_PUBLIC_SHOE_STORE_API_BASE_URL = "https://api.shoestore.com"
NUXT_SHOE_STORE_API_SECRET = "my-secret-key"
```

## 25 . 使用 appConfig
`app.config` 用于公开可在构建时确定的公共变量，如主题变体、标题或其他非敏感项目配置。这些值在 `app.config.ts` 文件中设置。

要定义 `app.config` 变量，需要在项目根目录下创建 `app.config.ts` 文件：
```js
// app.config.ts

export default defineAppConfig({
  theme: {
    primaryColor: '#ababab'
  }
})
```

要访问应用程序中的 `app. config` 的值，您可以使用可组合 `useAppConfig` ：
```html
<script setup lang="ts">
const appConfig = useAppConfig()
</script>
```

虽然 `appConfig` 类型是自动推断的，但如果确实需要，您可以使用 TypeScript 手动键入 `app.config`。本例来自文档：
```js
// index.d.ts
declare module 'nuxt/schema' {
  interface AppConfig {
    // 这将完全取代现有的推断“主题”属性
    theme: {
      // 您可能希望键入此值以添加比Nuxt推断的更具体的类型,
      // 例如字符串文字类型
      primaryColor?: 'red' | 'blue'
    }
  }
}
```

如果你正在编写一个需要配置的模块，你也可以为你的模块提供一个[类型](https://nuxt.com/docs/guide/directory-structure/app-config#typing-app-config-input)。