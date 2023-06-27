---
date: 2023-04-25 17:49:30
url: 
aliases: 
tags: 
  - 小程序
  - 公众号
title: 小程序获取公众号openid
---
1. 配置小程序 openid web-view 业务域名
路径：开发 - 开发管理 - 开发设置 - 业务域名

1. 绑定微信公众号开发者
开发者工具 - web 开发者工具
关注公众平台安全助手，不能开启免打扰

1. 小程序内增加 web-view 页面
```
<web-view src="https://www.xxxx.com/official"></web-view>
```

1. 创建跳转 h5 页面

APPID: 公众号 appid

REDIRECT_URI: 重定向地址，也就是我们的 h5 页

STATE：重定向后会带上 state 参数，开发者可以填写 a-zA-Z0-9的参数值，最多128字节
```
https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect
```

5. 获取 code 后和后端接口交互