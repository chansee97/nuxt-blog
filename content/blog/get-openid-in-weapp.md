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
路径：开发 -> 开发管理 -> 开发设置 -> 业务域名

2. 绑定微信公众号开发者
开发者工具 - web 开发者工具
关注公众平台安全助手，不能开启免打扰

3. 小程序内增加 web-view 页面，这里的跳转页面是单独写的，专门用于获取公众号 id
```
<web-view src="https://www.xxxx.com/official"></web-view>
```

4. h5 页面内跳转网页授权链接

[官方文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html)

主要参数：
```
APPID: 公众号 appid

REDIRECT_URI: 重定向地址，也就是我们的 h5 页,可以使用window.location.href来获取

STATE：重定向后会带上 state 参数，开发者可以填写 a-zA-Z0-9的参数值，最多128字节
```

链接示例：
```
https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect
```

流程解释：
进入 h5 -> 跳转授权链接 -> 静默授权后重定向回 h5 -> 读取 query 中 code 参数

5. 获取 code 后和后端接口交互

到了这一步已经获取了用户 code，可以调用后台接口来处理获取 openid, 如果还需要其他用户信息，就使用 STATE 参数来携带小程序中的数据到 h5 中