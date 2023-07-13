---
date: 2023-07-14 05:10:31
url: 
en-title: thousands separators in web development
tags:
  - 开发实践
  - 分隔符
title: 千位分隔符在web开发中的作用
---
1. 有千位分隔符会被认为是数字，否则在移动端会被直接识别成手机号
 在开发实战中主流实现方式是添加meta标签
```html
 <meta name="format-detection" content="telephone=no">
```

这样就不会识别成手机号
需要手机号的话可以使用tel协议
 ```html
<a href="tel:+6494461709">61709</a>
```

2. 屏幕阅读器的识别更准确

123456789 = “一二三四五六七八九”
123,456,789 = “一亿两千三百四十五万六千七百八十九”
在一些场景中，千分分隔符非常重要，如银行，短信平台，电商平台

3. 转换方法 
-   `Number.toLocaleString()` 简单，但是IE下会多出两位小数
-   `String(Number).replace(/(\\d)(?=(\\d{3})+$)/g,"$1,")` 复杂，但是兼容性最好，浏览器表现一致