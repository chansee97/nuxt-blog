---
date: 2023-06-14 15:00:59
url: 
aliases: applies-different-styles-based-on-number-of-child-elements
tags:
  - CSS
title: CSS实现根据子元素数量应用不同样式
---

在前端的页面布局中经常会出现在子元素个数使用不同的样式的需求，比如文章列表，在较少内容下单列表现，而在元素内容较多时使用双列表现。再比如在页面排版上，可以根据元素内容的多少来修改内容的缩放，位置，颜色等样式

## `:has()` 选择器简介

: has()选择器中的括号传递一个选择器参数，如果选择器匹配上了元素就会应用后面的样式，例如：

```html
<div>
	div
</div>

<div>
	<h1>h1</h1>
	div
</div>
```

```css
div{
	border:1px solid #000;
	margin:1em;
}

div:has(h1){
	background-color:red;
}
```

显示结果
![](https://img-blog.csdnimg.cn/img_convert/977d2a12ff7ae2a10d81dc466b7385ef.png)

## `:has()` + `:nth-child ()` 

现在我们知道了 `:has()` 选择器是用来在匹配成功时使用样式的，而加上 `:nth-child()` 就会有根据子元素数量去匹配样式的效果
例如：
```html
<div class="container">
	<p>p1</p>
</div>

<div class="container">
	<p>p1</p>
	<p>p2</p>
</div>

<div class="container">
	<p>p1</p>
	<p>p2</p>
	<p>p3</p>
</div>
```

```css
.container{
	border:1px solid #000;
	margin:1em;
}

/* default */
.container {
	background-color:#ddd;
}
/* 包含2个p时 */
.container:has(> p:nth-child(2)){
	background-color:#aaa;
}
/* 包含3个p时 */
.container:has(> p:nth-child(3)){
	background-color:red;
}
```

显示效果：
![image.png](https://img-blog.csdnimg.cn/img_convert/1cb347be4a6c6e040e2a95358bbf0e4b.png)


## 其他使用示例

### 超过一定数量，某子元素应用样式

```html
  <div class="container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  
   <div class="container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>

  <style>
    .container{
      display: flex;
      align-items: center;;
      gap: 1em;
      padding: 1em;
      height: 200px;
    }

    .container > div {
      height: 80%;
      background-color: #ddd;
      display: flex;
      align-items: center;
      justify-content: center;
      flex:auto;
    }

    .container:has( > div:nth-child(5)) > div:nth-child(3){
      background-color:aqua;
      flex:1.2;
      height: 100%;
    }
  </style>
```
效果：
只有在 5 个及以上子元素的情况下有，某子元素有特定样式（比如轮播图场景）

![image.png](https://img-blog.csdnimg.cn/img_convert/c61c75f7d9c79b46f318bf2fafd3b997.png)

### 根据子元素数量文本分栏

```html
<div class="container">
	<p>Occaecat minim eu sint. Quis exercitation anim ipsum Lorem veniam sint. Proident ea irure id sit eu eu in. Cillum incididunt nisi nisi velit non cupidatat sint veniam minim voluptate voluptate exercitation velit tempor aliquip. Nisi exercitation ullamco aute ea laborum incididunt deserunt minim proident dolor tempor proident voluptate ipsum sit. Reprehenderit mollit exercitation amet cillum et irure est laboris esse excepteur voluptate aute. In in mollit qui aliqua culpa aliquip fugiat nulla occaecat magna id veniam quis.</p>
	<p>Occaecat minim eu sint. Quis exercitation anim ipsum Lorem veniam sint. Proident ea irure id sit eu eu in. Cillum incididunt nisi nisi velit non cupidatat sint veniam minim voluptate voluptate exercitation velit tempor aliquip. Nisi exercitation ullamco aute ea laborum incididunt deserunt minim proident dolor tempor proident voluptate ipsum sit. Reprehenderit mollit exercitation amet cillum et irure est laboris esse excepteur voluptate aute. In in mollit qui aliqua culpa aliquip fugiat nulla occaecat magna id veniam quis.</p>
</div>

<div class="container">
	<p>Occaecat minim eu sint. Quis exercitation anim ipsum Lorem veniam sint. Proident ea irure id sit eu eu in. Cillum incididunt nisi nisi velit non cupidatat sint veniam minim voluptate voluptate exercitation velit tempor aliquip. Nisi exercitation ullamco aute ea laborum incididunt deserunt minim proident dolor tempor proident voluptate ipsum sit. Reprehenderit mollit exercitation amet cillum et irure est laboris esse excepteur voluptate aute. In in mollit qui aliqua culpa aliquip fugiat nulla occaecat magna id veniam quis.</p>
	<p>Occaecat minim eu sint. Quis exercitation anim ipsum Lorem veniam sint. Proident ea irure id sit eu eu in. Cillum incididunt nisi nisi velit non cupidatat sint veniam minim voluptate voluptate exercitation velit tempor aliquip. Nisi exercitation ullamco aute ea laborum incididunt deserunt minim proident dolor tempor proident voluptate ipsum sit. Reprehenderit mollit exercitation amet cillum et irure est laboris esse excepteur voluptate aute. In in mollit qui aliqua culpa aliquip fugiat nulla occaecat magna id veniam quis.</p>
	<p>Occaecat minim eu sint. Quis exercitation anim ipsum Lorem veniam sint. Proident ea irure id sit eu eu in. Cillum incididunt nisi nisi velit non cupidatat sint veniam minim voluptate voluptate exercitation velit tempor aliquip. Nisi exercitation ullamco aute ea laborum incididunt deserunt minim proident dolor tempor proident voluptate ipsum sit. Reprehenderit mollit exercitation amet cillum et irure est laboris esse excepteur voluptate aute. In in mollit qui aliqua culpa aliquip fugiat nulla occaecat magna id veniam quis.</p>
</div>

<style>
.container {
	border: 1px solid #000;
	margin: 1em;
	columns: 1;
}

/* 包含3个p时 */
.container:has(> p:nth-child(3)) {
	columns: 2;
}
</style>
```

显示效果：
![image.png](https://img-blog.csdnimg.cn/img_convert/d56660f9357c8ca1b603a5b2bfc380aa.png)

## 结尾

使用 `:has()` + `:nth-child()` 可以在前端页面中更好的去做页面布局的自适应，也在内容不足的情况下提供了一种简单实用的容错方法。

![image.png](https://img-blog.csdnimg.cn/img_convert/23b2bb68d871ce023d85a687f27c90e7.png)
而 `:has()` 在兼容性上除 Firefox 浏览器，其他的浏览器均有较好的支持。
