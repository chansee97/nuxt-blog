---
date: 2023-04-16 09:46:36
url: 
aliases: 
tags:
  - restful
  - 规范
title: RESTful API 设计规范
edited date: 2023-03-13 星期一
---
REST 与技术无关，它代表的是一种软件架构风格，REST 它是 Representational State Transfer 的简称，中文的含义是: "表征状态转移" 或 "表现层状态转化"。它是基于 HTTP、URI、XML、JSON 等标准和协议，支持轻量级、跨平台、跨语言的架构设计。

## Rest 设计原则

那么怎么样可以设计成REST的架构规范呢? 需要符合如下的一些原则：

1. 每一个URI代表一种资源;  
2. 同一种资源有多种表现形式(xml/json);  
3. 所有的操作都是无状态的。  
4. 规范统一接口。  
5. 返回一致的数据格式。  
6. 可缓存(客户端可以缓存响应的内容)。

符合上述 REST 原则的架构方式被称作为 RESTful 规范。
### 理解为什么所有的操作需要无状态呢?

http请求本身是无状态的，它是基于 client-server 架构的，客户端向服务器端发的每一次请求都必须带有充分的信息能够让服务器端识别到，请求的一些信息通常会包含在URL的查询参数中或header中，服务器端能够根据请求的各种参数, 不需要保存客户端的状态, 直接将数据返回给客户端。无状态的优点是：可以大大提高服务器端的健状性和可扩展性。客户端可以通过token来标识会话状态。从而可以让该用户一直保持登录状态。

### 理解规范统一的接口

Rest接口约束定义为: 资源识别；请求动作；响应信息; 它表示通过uri表示出要操作的资源，通过请求动作(http method)标识要执行的操作，通过返回的状态码来表示这次请求的执行结果。

可能看上面的解释还不够理解，下面我通过自己的理解来解释下上面的具体含义; 比如说，我在未使用Rest规范之前，我们可能有 增删改查 等接口，因此我们会设计出类似这样的接口: /xxx/newAdd (新增接口), /xxx/delete(删除接口), /xxx/query (查询接口), /xxx/uddate(修改接口)等这样的。增删改查有四个不同的接口，维护起来可能也不好，因此如果我们现在使用Restful规范来做的话，对于开发设计来说可能就只需要一个接口就可以了，比如设计该接口为 /xxx/apis 这样的一个接口就可以了，然后请求方式(method)有 GET--查询(从服务器获取资源); POST---新增(从服务器中新建一个资源); PUT---更新(在服务器中更新资源)，DELETE---删除(从服务器删除资源)，PATCH---部分更新(从服务器端更新部分资源) 等这些方式来做，也就是说我们使用RESTful规范后，我们的接口就变成了一个了，要执行增删改查操作的话，我们只需要使用不同的请求动作(http method)方式来做就可以了，然后服务器端返回的数据也可以是相同的，只是我们前端会根据状态码来判断请求成功或失败的状态值来判断。具体有那些状态码我们下面会讲解到。

### 理解返回一致的数据格式

服务器端返回的数据格式可以是XML、或json. 或者直接返回状态码的方式。比如返回错误的格式json数据如下:
```json
{
  "code": 401,
  "status": "error",
  "message": "用户没有权限",
  "data": null
}
```

返回正确的数据格式的json数据一般可以为如下:

```json
{
  "code": 200,
  "status": "success",
  "data": [{
    "userName": "tugenhua",
    "age": 31
  }]
}
```


## URL 及参数设计规范

### uri 设计规范

1. uri 末尾不需要出现斜杠/

2. 在 uri 中使用斜杠/是表达层级关系的。

3. 在 uri 中可以使用连接符-, 来提升可读性。

比如 http://xxx.com/xx-yy 比 http://xxx.com/xx_yy 中的可读性更好。

4. 在 uri 中不允许出现下划线字符_.

5. 在 uri 中尽量使用小写字符。

6. 在 uri 中不允许出现文件扩展名. 比如接口为 /xxx/api, 不要写成 /xxx/api.php 这样的是不合法的。

7. 在 uri 中使用复数形式。

具体可以看：（[https://blog.restcase.com/7-rules-for-rest-api-uri-design/](https://blog.restcase.com/7-rules-for-rest-api-uri-design/)）

在RESTful架构中，每个uri代表一种资源，因此uri设计中不能使用动词，只能使用名词，并且名词中也应该尽量使用复数形式。使用者应该使用相应的http动词 GET、POST、PUT、PATCH、DELETE等操作这些资源即可。

那么在我们未使用 RESTful 规范之前，我们是如下方式来定义接口的，形式是不固定的，并且没有统一的规范。比如如下形式:

```
http://xxx.com/api/getallUsers; // GET请求方式，获取所有的用户信息
http://xxx.com/api/getuser/1;   // GET请求方式，获取标识为1的用户信息
http://xxx.com/api/user/delete/1 // GET、POST 删除标识为1的用户信息
http://xxx.com/api/updateUser/1  // POST请求方式 更新标识为1的用户信息
http://xxx.com/api/User/add      // POST请求方式，添加新的用户
```

如上我们可以看到，在未使用Restful规范之前，接口形式是不固定的，没有统一的规范，下面我们来看下使用RESTful规范的接口如下，两者之间对比下就可以看到各自的优点了。

```
http://xxx.com/api/users;     // GET请求方式 获取所有用户信息
http://xxx.com/api/users/1;   // GET请求方式 获取标识为1的用户信息
http://xxx.com/api/users/1;   // DELETE请求方式 删除标识为1的用户信息
http://xxx.com/api/users/1;   // PATCH请求方式，更新标识为1的用户部分信息
http://xxx.com/api/users;     // POST请求方式 添加新的用户
```

如上我们可以看到，增删改成我们都是使用同一个api接口，只是请求的方式 GET(查询)、POST(新增)、DELETE(删除)、PACTH(部分更新)来代表的是增删改查操作的方式。然后开发获取到该请求的header头部信息，就可以知道是什么方式来请求数据的了。

### HTTP 请求规范

GET (SELECT): 查询；从服务器取出资源.
POST(CREATE): 新增; 在服务器上新建一个资源。
PUT(UPDATE): 更新; 在服务器上更新资源(客户端提供改变后的完整资源)。
PATCH(UPDATE): 更新；在服务器上更新部分资源(客户端提供改变的属性)。
DELETE(DELETE): 删除; 从服务器上删除资源。

### 参数命名规范

参数推荐采用下划线命名的方式。比如如下demo:

http://xxx.com/api/today_login // 获取今天登录的用户。
http://xxx.com/api/today_login&sort=login_desc // 获取今天登录的用户、登录时间降序排序。

## http 状态码相关的

**状态码范围**

客户端的每一次请求, 服务器端必须给出回应，回应一般包括HTTP状态码和数据两部分。

1xx: 信息，请求收到了，继续处理。
2xx: 代表成功. 行为被成功地接收、理解及采纳。
3xx: 重定向。
4xx: 客户端错误，请求包含语法错误或请求无法实现。
5xx: 服务器端错误.

**2xx 状态码**

200 OK [GET]: 服务器端成功返回用户请求的数据。
201 CREATED [POST/PUT/PATCH]: 用户新建或修改数据成功。
202 Accepted 表示一个请求已经进入后台排队(一般是异步任务)。
204 NO CONTENT -[DELETE]: 用户删除数据成功。

**4xx状态码**

400：Bad Request - [POST/PUT/PATCH]: 用户发出的请求有错误，服务器不理解客户端的请求，未做任何处理。
401: Unauthorized; 表示用户没有权限(令牌、用户名、密码错误)。
403：Forbidden: 表示用户得到授权了，但是访问被禁止了, 也可以理解为不具有访问资源的权限。
404：Not Found: 所请求的资源不存在，或不可用。
405：Method Not Allowed: 用户已经通过了身份验证, 但是所用的HTTP方法不在它的权限之内。
406：Not Acceptable: 用户的请求的格式不可得(比如用户请求的是JSON格式，但是只有XML格式)。
410：Gone - [GET]: 用户请求的资源被转移或被删除。且不会再得到的。
415: Unsupported Media Type: 客户端要求的返回格式不支持，比如，API只能返回JSON格式，但是客户端要求返回XML格式。
422：Unprocessable Entity: 客户端上传的附件无法处理，导致请求失败。
429：Too Many Requests: 客户端的请求次数超过限额。

**5xx 状态码**

5xx 状态码表示服务器端错误。
500：INTERNAL SERVER ERROR; 服务器发生错误。
502：网关错误。
503: Service Unavailable 服务器端当前无法处理请求。
504：网关超时。

## 统一返回数据格式

RESTful规范中的请求应该返回统一的数据格式。对于返回的数据，一般会包含如下字段:

- code: http 响应的状态码。  
- status: 包含文本, 比如：'success'(成功), 'fail'(失败), 'error'(异常) HTTP 状态响应码在500-599之间为 'fail'; 在400-499之间为 'error', 其他一般都为 'success'。对于响应状态码为 1xx, 2xx, 3xx 这样的可以根据实际情况可要可不要。

当status的值为 'fail' 或 'error'时，需要添加 message 字段，用于显示错误信息。

- data: 当请求成功的时候, 返回的数据信息。但是当状态值为 'fail' 或 'error' 时，data 仅仅包含错误原因或异常信息等。

返回成功的响应 JSON 格式一般为如下:
```json
{
  "code": 200,
  "status": "success",
  "data": [{
    "userName": "tugenhua",
    "age": 31
  }]
}
```

返回失败的响应json格式为如下:
```json
{
  "code": 401,
  "status": "error",
  "message": "用户没有权限",
  "data": null
}
```