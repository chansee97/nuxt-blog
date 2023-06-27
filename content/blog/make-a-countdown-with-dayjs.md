---
date: 2023-03-22 18:59:14
url:
aliases:
tags:
  - dayjs
title: 使用dayjs实现倒计时
---

```html
<script src="https://unpkg.com/dayjs@1.8.21/dayjs.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.11.7/plugin/duration.min.js"></script>
```

实现核心是使用了`duration`插件获取两个时间点的差值时长

再使用`asSeconds`将时间长度转换为秒单位

```js
dayjs.extend(window.dayjs_plugin_duration)
const countdownEl = document.querySelector('#countdown')
const targetTime = '2023-03-22 20:00:00'
// 每秒更新剩余时间的显示
setInterval(() => {
  // 获取当前时间和要倒计时到的时间的时间差
  const diff = dayjs.duration(dayjs(targetTime).diff(dayjs()))
  const diffTime = diff.asSeconds()
  if (diffTime < 0) {
    // 如果时间差小于 0，说明倒计时已结束
    countdownEl.innerHTML = '倒计时结束！'
  }
  else {
    // 计算剩余时间的小时、分钟和秒数
    countdownEl.innerHTML = `距离${targetTime}倒计时：${diff.format(
      'HH:mm:ss'
    )}`
  }
}, 1000)
```
