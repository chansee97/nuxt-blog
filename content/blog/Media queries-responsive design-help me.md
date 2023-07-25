---
en-title: Media queries, responsive design? help me!
tags:
  - CSS
  - 媒体查询
  - 响应式
url: https://engineering.kablamo.com.au/posts/2023/media-queries-and-responsive-design/
date: 2023-07-25 16:38:26
title: 媒体查询，响应式设计？帮帮我！
---

> 原文地址： https://engineering.kablamo.com.au/posts/2023/media-queries-and-responsive-design/

## 什么是媒体查询？

媒体查询是一种 CSS 语言特性，它允许作者根据设备或窗口的特性有条件地应用 CSS 规则来查看应用程序。最常见的情况是根据视口宽度应用 CSS 规则，这样 CSS 作者就能根据窗口或设备的大小创建相应的组件和布局。但这也可能延伸到用户是否偏好浅色或深色模式，甚至是用户的可访问性偏好，以及更多属性。

## 什么是响应式设计？

随着各种设备类型和屏幕尺寸的增多，网络应用程序为用户提供更加量身定制的可视化展示，并针对用户首选交互方式的屏幕尺寸进行优化，已变得越来越重要。

响应式设计可以通过多种技术组合来实现，包括有条件地应用 CSS 规则的[媒体查询](https://web.dev/cq-stable/)、容器查询，以及根据它们所包含的内容（例如 flexbox 或 grid）选择灵活的布局。在本文中，我们将重点关注媒体查询和响应式布局，但随着[浏览器支持程度](https://caniuse.com/css-container-queries)的增加，容器查询也需要记住。在撰写本文时，它们还没有准备好进入普及阶段，但可以用于[渐进式增强](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement)。

## 什么是移动优先设计？

移动优先设计是在设计和构建响应式 web 应用时可以采用的原则。理想情况下，这种方法应该在流程的所有阶段--从开始到结束--都作为指导原则。对于设计来说，这意味着原型或 UI 设计的第一次迭代应该专注于移动的体验，然后再转向更宽的视口尺寸。

虽然你可以从另一个方向（宽优先）来处理 Web 应用程序，但随着屏幕空间的增加，在视觉上重新组织组件要比试图将组件塞进更小的屏幕空间容易得多。

类似的规则也适用于开发过程。一般来说，您应该为基本情况（最窄的屏幕）编写标记和样式，并在必要时逐步为更宽的屏幕应用条件样式。

虽然你可以从另一个方向来处理这个问题，或者使用窄优先和宽优先的混合方法，但这会使你的样式更难以理解，并增加了其他人在审查或维护时的精神负担。当然，也有一些例外情况，编写少量的宽优先规则会更简单，所以请谨慎行事。

## CSS 像素对比设备像素

当苹果在2011年推出 iPhone 4时，它是第一款采用高密度显示屏的主流智能手机。早期的 iPhone 的显示分辨率为320x480px，当 iPhone 推出所谓的 “[视网膜显示屏](https://zh.wikipedia.org/wiki/Retina%E6%98%BE%E7%A4%BA%E5%B1%8F)” 时 -- 在相同的物理显示宽度下，分辨率提高了一倍，达到640x960px -- 这带来了挑战。不希望用户面临他们不断问自己的情况，“这是什么，蚂蚁的网站？”，一个巧妙的解决方案被设计了出来，iPhone 4将遵循 CSS 规则，就好像它仍然是一个320 x480 px 的设备，并简单地以两倍的密度渲染。这使得现有的网站可以按预期运行，而不需要任何代码更改 - 当为 Web 引入新技术时，您会发现这是一个常见的主题。

由此，创建了术语 CSS 像素和设备像素。

W3C CSS 规范将[设备像素](https://drafts.csswg.org/css-values-3/#device-pixel)定义为：
> 设备像素是设备输出上能够显示其全部颜色范围的最小面积单位。

CSS 像素（也称为逻辑像素或参考像素）由 [W3C CSS 规范定义](https://drafts.csswg.org/css-values-3/#reference-pixel)为：
> 参考像素是设备像素密度为96 dpi 并且与读取器的距离为一臂长的设备上的一个像素的视角。因此，对于28英寸的标称臂长，视角约为0.0213度。因此，对于在臂长处的阅读，lpx 对应于约0.26mm（1/96英寸）。

参考像素的96 DPI 规则并不总是严格遵守，并且可以根据设备类型和典型的观看距离而变化。
设备像素比率（或 dppx）是每个 CSS 像素使用多少设备像素的一维因子。设备像素比通常是整数（例如，整数）。1、2、3），因为这使得缩放更简单，但并不总是（例如，1.25、1.5等）。

## 如何使我的网站响应？

默认情况下，移动的浏览器将假定网站的设计不适合这种设备的较窄视口。为了向后兼容，这些浏览器可能会呈现一个网站，就好像屏幕更大，然后缩小到适合更小的屏幕。这不是一个理想的体验，用户经常需要缩放和平移页面，但允许网站的功能主要是因为它最初创建的。

要告诉浏览器某个站点正在为所有视口大小提供优化的体验，您可以在文档中包含以下 Meta 标记：
```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

### 非矩形显示器
如今，一些设备具有圆角或显示遮挡（诸如显示凹口、相机孔穿孔或软件覆盖），这意味着整个矩形对于用于内容来说是不“安全”的，因为它可能被部分地或完全地遮挡。

默认情况下，此类设备上的浏览器将在“安全区”内接矩形和与文档背景匹配的垂直或水平条内显示内容。

有一些方法可以允许内容扩展到这个区域，避免[黑边](https://zh.wikipedia.org/wiki/%E9%BB%91%E9%82%8A)和[邮筒](<https://zh.wikipedia.org/wiki/%E9%83%B5%E7%AD%92_(%E9%A1%AF%E7%A4%BA%E6%8A%80%E8%A1%93)>)的丑陋，但这是一个更高级的功能，不是必需的。

要退出默认的黑边和邮筒，并声明您的应用程序可以适当地处理屏幕的安全和不安全区域，您可以包含以下 Meta 标记：
```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
```

### 文本大小
移动的浏览器还可能人为地增大字体大小，以使文本更具可读性。如果您的网站已经提供了适当大小的文本，您可以包含以下 CSS 来禁用此行为：
```css
html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}
```

虽然在无障碍标准中没有规定文本的最小大小，但在大多数情况下 `16px` 是一个很好的最低限度。

对于输入字段，如果字体大小小于 `16px`，浏览器可能会在聚焦时放大。有一些方法可以禁用这种行为，例如在 `Meta viewport` 中设置 `maximum-scale=1.0`，但强烈建议不要这样做，因为这可能会干扰依赖缩放的用户。更好的解决方案是确保 `font-size` 大小至少为 `16px`。

## 什么是断点？

样式中的断点是指条件样式规则停止或开始应用于页面以响应视口大小的点。最常见的是指 `min-width` 或  `max-width`，但也可以应用于 `height`。

在媒体查询中，这些断点（`768px`, `479px`）将像这样使用：
```css
@media (min-width: 768px) {
  // 宽度 > 768px的条件样式
}

@media (max-width: 479px) {
  // 宽度 <= 479px的条件样式
}
```

当遵循移动优先设计原则时，大多数时候应该使用媒体查询。

还需要注意的是，`min-*` 和 `max-*` 查询适用于**包含**范围，因此在定义断点两侧的样式时，不应使用相同的像素值。

同样重要的是要注意，当放大页面时，以 CSS 像素为单位的视口大小可能会沿着明显的设备像素比率而变化。这可能会导致视口实际上表现得好像其长度是小数值的情况。

```css
@media (max-width: 479px) {
  // 宽度 < 479px的条件样式
}

@media (min-width: 480px) {
  // 宽度 >= 480px的条件样式
}
```
在上面的示例中，如果视口（作为缩放的结果）报告为 `479.5px`，则两个条件规则块都不适用。相反，例如额外的小数值 `0.98px` 通常应用于查询 `max-width`

为什么要这么说？ `0.02px` 是早期版本的 Safari 支持的 CSS 像素的最小分割。参见 [WebKit bug #178261](https://bugs.webkit.org/show_bug.cgi?id=178261)。

CSS 在 Media Queries Level 4规范中引入了范围查询的概念，其中 `<`, `>`, `<=`, 和 `>=` 可用于表达性更强的条件，包括包含和排除范围。在撰写本文时，所有主流浏览器都支持这些功能，然而，在 iOS 等平台上的支持还不够。
```css
@media (width < 480px) {
  // 宽度 < 480px的条件样式
}

@media (width >= 480px) {
  // 宽度 >= 480px的条件样式
}
```

## 我应该选择哪些断点？

这是一个经常被问到的问题，但坦率地说，这并不重要，只要一个 Web 应用程序在你选择的断点之间的所有屏幕尺寸上都能正常工作。你也不想选择太多或太少。

iPhone 在2007年首次推出时，屏幕分辨率为320x480px。按照惯例，所有智能手机的视口宽度至少为320 CSS 像素。当建立一个响应式网站时，你至少应该满足这个宽度的设备。

最近，网络变得更容易被一类设备访问，这些设备适合更经典的外形，称为功能手机，以及可穿戴技术。这些设备通常具有小于320px 的视口宽度。

一些设备，如 Apple Watch，将表现得好像它们有一个320px 的视口，以允许与未专门针对极小视口进行优化的网站兼容。如果要声明您确实处理 Apple watch 的较窄视口，请在文档中包含以下 Meta 标记：
```html
<meta name="disable-adaptations" content="watch" />
```


如果您使用的是设计系统或组件库（例如 Material UI、Bootstrap 等）它为您提供了自己的默认断点，您可能会发现坚持使用这些断点是有益的。

如果你选择自己的断点，有一些历史上相关的断点可以作为灵感：

- 320px - 智能手机视口的最小宽度
- 480px - 智能手机和平板电脑之间的近似边界
- 768px - 最初的 iPad 分辨率为768 x1024 px
- 1024px - 同上
- 1280px - 16:9 720p（HD）显示器的标准宽度

通常，给断点命名是个好主意。但是，**请**不要试图称它们为“移动”，“平板电脑”和“桌面”之类的名称。虽然在平板电脑的早期，移动，平板电脑和桌面之间的界限更加清晰，但现在有如此广泛的设备和视口尺寸，以至于这些设备之间的界限变得模糊。如今，我们有屏幕尺寸比一些平板电脑更大的可折叠手机，以及让台式机和笔记本电脑屏幕相形见绌的平板电脑屏幕。

将特定范围称为“平板电脑”或“台式机”可能会让您陷入为单一类型的设备（例如平板电脑）进行构建和设计的陷阱。假设“移动的”或“平板”视口将总是使用触摸屏）。相反，您应该专注于构建在各种设备上工作的体验。

## 响应式布局技术

有两种 CSS 布局算法特别适合响应式设计：

- Flexbox
- Grid

### FLEXBOX
Flexbox 是一种 CSS 布局算法，它允许我们指定子元素在页面上的排列方式。此控件应用于特定方向（称为 flex 轴）。

虽然 flexbox 可以用于呈现多行（带换行），但一行中的内容元素不会改变其他行中元素的排列方式。这意味着除非明确设置 flex 项的宽度，否则它们的排列方式可能不一致。如果需要，CSS Grid 可能更合适。

#### Flex Wrap
使用 Flexbox 时可以不使用媒体查询，而是依靠 `flex-wrap` 属性，使内容可以根据内容大小多次跨轴。设置 `flex-wrap: wrap` 将意味着内容在下方（ `flex-direction: row`）或右侧（ `flex-direction: column`）换行。您还可以设置 `flex-wrap: wrap-reverse` 使内容在上方或左侧换行。

#### Flex Direction
通常情况下，对于水平空间有限的窄视口，设计可能要求垂直排列内容，但对于屏幕空间较大的宽视口，则可能改为水平排列内容。
```css
.className {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .className {
    flex-direction: row;
  }
}
```

长期以来，媒体查询需要在顶层定义，但当相关规则没有在大型样式表中共存时，这会增加维护负担。在撰写本文时，浏览器尚未广泛支持这种做法，但许多工具和预处理器都允许这样做。
```css
.className {
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
}
```

### GRID

Grid 是一种 CSS 布局算法，它允许我们指定子元素在页面上的排列方式。Grid 允许开发人员指定元素在行和列之间的排列方式。

就可实现的布局类型而言，它与 flexbox 有重叠之处，但也有显著区别。使用 Grid 布局时，网格项会根据横轴和纵轴上的网格轨道进行约束和对齐。

以下是与响应式设计搭配使用的常见布局技术的几个示例。

#### Columns

设计师通常会使用 12 栏网格（或窄视口的 4 栏网格）。您可以使用 `grid-template-columns` 在 CSS 中复制这种模式。结合断点，您就可以轻松分配类，使元素跨越特定的列数。

Google的Una Kravets在[One Line Layouts](https://web.dev/one-line-layouts/#06-12-span-grid-grid-template-columns-repeat12,-1fr)开发站点上分享了一些交互式示例。

#### RAM（重复、自动、最小最大）

另一种网格布局技术通常称为RAM（重复，自动，最小最大）。我鼓励你去看看One Line Layouts开发站点上的[交互式示例](https://web.dev/one-line-layouts/#07-ram-repeat,-auto,-minmax-grid-template-columnsauto-fit,-minmaxlessbasegreater,-1fr)。

当你事先不知道网格需要多少列，而是希望在一些预设的范围内让内容的大小来决定列数时，RAM 是最有用的。`auto-fit` 和 `auto-fill` 的工作方式类似，但当项目数量少于填充一行的数量时会发生什么情况除外。
```css
// 网格项目将始终至少150像素宽，
// 并将伸展以填满所有可用空间
.auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

// 网格项目将始终至少150像素宽，
// 并且会伸展直到有足够的空间
// （如果有）添加匹配的空网格轨道
.auto-fill {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}
```

#### Grid Template Areas

网格模板区域是用于响应式布局的最强大工具之一，可让您以直观的方式将元素排列到网格上。

举个例子，我们可能会有一个包含页眉、主要部分、侧边栏和页脚的布局，它们都在狭窄的视口上垂直排列。不过，将 `grid-template-areas` 区域与 `grid-template-columns` 和 `grid-template-rows` 结合使用，我们可以用相同的标记将这些元素重新排列成网格模式。

代码示例：
```css
.layout {
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "sidebar"
    "footer";
  grid-template-rows: auto 1fr auto auto;
}

@media (min-width: 768px) {
  .layout {
    grid-template-areas:
      "header header"
      "main sidebar"
      "footer footer";
    grid-template-columns: 1fr 200px;
    grid-template-rows: auto 1fr auto;
  }
}

.header {
  grid-area: header;
}

.main {
  grid-area: main;
}

.sidebar {
  grid-area: sidebar;
}

.footer {
  grid-area: footer;
}
```

```html
<div class="layout">
  <header class="header">Header</header>
  <main class="main">Main</main>
  <aside class="sidebar">Sidebar</aside>
  <footer class="footer">Footer</footer>
</div>
```

## 响应图像

在高密度显示屏上，根据 CSS 像素而不是设备像素来调整图片大小，可能会导致图片质量低于用户的预期，尤其是在显示清晰的文本或矢量资源时，会显得格外刺眼。因此，为用户提供更高密度的图片是有意义的。

如果可能，请使用基于矢量的图像 (SVG)。矢量不是指定像素的光栅，而是描述在屏幕上绘制某些内容的过程，这一过程可以放大/缩小到任何屏幕尺寸，但始终保持清晰。矢量图像通常适用于简单的插图、图标或徽标。它们不适用于照片。

![](https://i.redd.it/hq3x6ffcr9d81.jpg)

请注意，SVG 可以嵌入光栅图像。如果是这种情况，又无法获得真正的矢量图像，最好直接使用光栅图像。这是因为光栅图像在 SVG 中使用 base64 编码，与普通二进制文件相比，文件大小会增大。

对于光栅图像，有几种为高密度显示指定多个图像源的方法，允许浏览器选择最适合特定设备的图像源。

对于静态大小的图像，你可以使用 x 描述符（指定最佳设备像素比）指定。例如，如果您有一个图标或徽标，显示宽度为44px，你可以创建该图像的多个不同版本，并指定如下内容：

```css
<img
  srcset="
    /path/to/img-44w.png  1x,
    /path/to/img-66w.png  1.5x,
    /path/to/img-88w.png  2x,
    /path/to/img-132w.png 3x
  "
/>
```
重要的是，这些 x 描述符只是一种提示，设备仍可能出于各种原因（如用户选择了节省带宽的规定）选择较低分辨率的版本。

在 CSS 中使用 `image-set()`（注意[浏览器的支持](https://caniuse.com/css-image-set)并不完善）对`background-image`也可以采用类似的技术：
```css
.selector {
  height: 44px;
  width: 44px;
  /* 对于不支持 image-set() 的浏览器使用 2x 回退 */
  background-image: url(/path/to/img-88w.png);
  /* Safari 只支持 -webkit-image-set() */
  background-image: -webkit-image-set(
    url(/path/to/img-44w.png) 1x,
    url(/path/to/img-66w.png) 1.5x,
    url(/path/to/img-88w.png) 2x,
    url(/path/to/img-132w.png) 3x
  );
  /* 标准语法 */
  background-image: image-set(
    url(/path/to/img-44w.png) 1x,
    url(/path/to/img-66w.png) 1.5x,
    url(/path/to/img-88w.png) 2x,
    url(/path/to/img-132w.png) 3x
  );
}
```

对于随着页面大小调整而改变大小的图像，可以组合使用  `srcset` 和 `sizes` 属性。例如。
```html
<img
  srcset="
    /path/to/img-320w.jpg   320w,
    /path/to/img-480w.jpg   480w,
    /path/to/img-640w.jpg   640w,
    /path/to/img-960w.jpg   960w,
    /path/to/img-1280w.jpg 1280w
  "
  sizes="(min-width: 768px) 480px, 100vw"
/>
```

在上面的例子中，我们在 `srcset` 中以不同实际宽度（320px、480px、640px、960px、1280px）的多个不同图像渲染。在 `sizes` 属性中，我们告诉浏览器这些图像将默认以视口宽度的 100% 显示，然后对于768px 和更宽的视口，图像将以固定的480 CSS 像素宽度显示。然后，浏览器将根据设备像素比为设备选择最佳图像渲染（尽管这只是一个提示，浏览器可以选择使用更高或更低的分辨率选项）。

使用 WebP 和 AVIF 等现代图像格式压缩技术，当图像以 2 倍密度显示时，文件大小通常只比 1 倍版本略有增加。而且，当设备像素比大于 2 时，收益会越来越小。因此，您可以只包括优化的2x 图像。Google Chrome 团队的开发者倡导者 Jake Archibald 写了一篇[博客文章](https://jakearchibald.com/2021/serving-sharp-images-to-high-density-screens/)讨论了这一问题，并强调了一个事实：你的大多数用户可能都在使用高密度显示器浏览网页。