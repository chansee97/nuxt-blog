---
en-title: layer-usage
date: 2023-08-09 20:18:49
url: 
tags:
  - css
title: 一文说清@layer用法
---

@layer 声明了一种级联层级，它就像 ps 里的图层一样，可以对图层进行排序，上面的图层有更高的优先级，使得开发者可以提前定义好“级联层”的优先级

## 语法
- 申明块级@layer 规则
```css
@layer utilities {
  .padding-sm {
    padding: rem;
  }

  .padding-lg {
    padding: rem;
  }
}
```

- 创建带命名的级联层，但不指定任何样式

> 层最初被指定的顺序决定了它是否有优先级。对于声明而言，如果同一声明在多个级联层中被指定，最后一层中的将优先于其他层。因此，在上面的例子中，如果 `theme` 层和 `utilities` 层中存在冲突的规则，那么 `utilities` 层中的将优先被应用。

```css
// 单一命名层
@layer utilities
// 同时多命名层
@layer theme, layout, utilities
```

-  为外部导入样式表创建层：
```css
// @import 引入方式
@import "./test.css" layer(some-name);

// 标签引入方式
<link rel="stylesheet" href="test.css" layer="some-name">
```

## 嵌套层

嵌套越内部优先级越低
```css
@layer A { 
	@layer B{ 
		… 
	} 
}
```
等价于
```css
@layer A.B { … }
```

向 `A` 层内部的 `B` 层附加规则，只需用 `.` 连接这两层。
```css
@layer A.B {
  p {
    margin-block: 1rem;
  }
}
```

多层嵌套优先级
```css
@layer A { 
	@layer innerA{ 
		… 
	} 
}
@layer B { 
	@layer innerB{ 
		… 
	} 
}
```
`B` > `innerB` > `A` > `innerA`

## 匿名层

匿名层指的是不声明layer名的级联层，它在级联层中的优先级，取决于layer声明次序
```css
@layer A {
    body {
        background-color: green;
    }
}
@layer {
    body {
        background-color: red;
    }
}
@layer B {
    body {
        background-color: bisque;
    }
}
```
优先级从高到低为： B > 匿名 > A，所以最后生效的body背景色为`bisque`

## 非@layer 层与@layer 层的优先级

常规 CSS > @layer
```css
body { 
	background-color: bisque; 
} 
@layer A { 
	body { 
	background-color: red; 
	color: black; 
	} 
}
```

## @layer 中的 !important 的优先级

在 layer 中声明!important 会导致层级失效，表现效果同普通 css 结构一致
```css
a {
	color: blue ;
}
@layer link1 {
	a {
	  color:red !important;
	}
}
@layer link2 {
	a {
	  color: green;
	}
}
```
最后表现结果为红色

## revert-layer 的语法和作用
`revert-layer`可以让CSS属性值还原为上一层@layer中设置的同属性值，如果当前CSS不在@layer规则中，或者没有祖先@layer规则，则表现类似于revert关键字，使用浏览器默认的控件样式。
以后使用第三方组件，都会尽量放在 @layer 中，这样优先级低，样式才能轻易覆盖。
但是，如果希望样式被覆盖后，又继续使用组件里面设置的样式，那只能使用revert-layer关键字。
可以这么说，revert 关键是是浏览器默认样式还原，revert-layer 是第三方组件默认样式还原

### 不含有revert-layer
```
```css
@layer base, special;

@layer special {
  .item {
    color: red;
  }
}

@layer base {
  .item {
    color: blue;
  }
  .feature {
    color: green;
  }
}

```

![](https://img.iamsee.top/pic/20230809170808.png)

### 含有 revert-layer
```css
@layer base, special;

@layer special {
  .item {
    color: red;
  }
  .feature {
    color: revert-layer;
  }
}

@layer base {
  .item {
    color: blue;
  }
  .feature {
    color: green;
  }
}
```

`feature` 的样式被还原到绿色

![](https://img.iamsee.top/pic/20230809170910.png)
