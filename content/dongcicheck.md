---
date: 2023-03-13 12:28:37
url: https://github.com/gscheartA/Improve-your-code
aliases: 
tags: 命名 编码规范 动词 
title: 函数中的动词选取
edited date: 2023-03-14 12:32:06
---
## 创建/销毁

| 动词         | 用途                                                           | 示例                              |
|:------------ |:-------------------------------------------------------------- |:--------------------------------- |
| Create       | 创建实例，常用于实例化方法和工厂方法的命名                     | CreateInstance                    |
| Initialize   | 初始化实例的属性和设置，Initialize本身也可作为类方法用来初始化 | InitializeInstance,Initialize     |
| Load         | 加载配置，根据配置创建内容                                     | LoadFromConfig                    |
| Destroy      | 销毁实例，常用语析构方法                                       | DestroyInstance                   |
| Uninitialize | 清理实例的属性和设置，通常和Initialize对应                     | UninitializeInstance,Uninitialize |

## 获取/设置

| 动词      | 用途                                                 | 示例                  |
| --------- | ---------------------------------------------------- | --------------------- |
| Get       | 常用于取属性的类方法命名，也可作为通用获取方法命名   | GetStartTime          |
| Fetch     | 通过网络请求获取内容                                 | FetchAllUsers         |
| Calculate | 通过计算获取内容                                     | CalculateTotalAmount  |
| Read      | 读取(多用于文件，配置等)                             | ReadFile,ReadConfig   |
| Query     | 查询                                                 | QueryRemainingAmount  |
| Find      | 查找(多用于数据库，集合等),和 search 相似            | FindOrder             |
| Receive   | 接收(多用于文件，消息等)                             | ReceiveNewMessage     |
| Pull      | 拉取                                                 | PullLastestSourceCode |
| Set       | 常用于设置属性的类方法命名，也可作为通用设置方法命名 | SetStartTime          |
| Write     | 写入(文件/配置等)                                    | WriteFile,WriteConfig |
| Put       | 放入                                                 | PutUserWithId         |
| Push      | 存入,推送(通知)                                      | PushNotification      |

## 更新

| 动词    | 用途                            | 示例               |
| ------- | ------------------------------- | ------------------ |
| Reset   | 强调重置(标记,状态)             | ResetTimer         |
| Refresh | 用于命名刷新(多用于页面,缓存等) | RefreshCurrentPage |
| Update  | 更新(多用于配置，状态等)        | UpdateUserSetting  |

## 添加/移除

| 动词   | 用途                     | 示例               |
| ------ | ------------------------ | ------------------ |
| Add    | 用于通用添加方法命名     | AddNewStudent      |
| Append | 强调在尾部添加(追加)     | AppendCharacter    |
| Insert | 强调插入(可以在任意位置) | InsertCharacter    |
| Delete | 表示删除,和 Remove 相近  | DeleteDirectory    |
| Remove | 表示移除,和Delete相近    | RemoveInvalidDeals |

## 启动/停止

| 动词   | 用途                                       | 示例                |
| ------ | ------------------------------------------ | ------------------- |
| Open   | 开启(多用于开启状态,打开文件等)            | OpenEnhanceMode     |
| Start  | 开始(强调开始某个流程)                     | StartPortListening  |
| Launch | 发动/启动(多用于启动程序,服务)             | LaunchAssistService |
| Close  | 关闭(多用于关闭状态,关闭文件等)            | CloseEnhanceMode    |
| Stop   | 停止(强调流程的终止)                       | StopPortListening   |
| Pause  | 暂停(强调流程的暂停，有可能后续会继续开启) | PausePageLoading    |
| Finish | 完成(强调流程的完成)                       | FinishRequesting    |

## 集合类型相关数据处理

| 动词        | 用途                        | 示例              |
| ----------- | --------------------------- | ----------------- |
| Filter      | 过滤,筛选(强调按照某些条件) | FilterByName      |
| Merge       | 合并(有时会带上合并规则)    | MergeTwoConfig    |
| Concat      | 拼接(直接在结尾添加)        | ConcatToArray     |
| Split       | 分割                        | SplitInput        |
| Deduplicate | 去重(去重完全相同的项)      | DeduplicateList   |
| Reverse     | 颠倒,反向排列               | ReverseRecord     |
| Sort        | 排序(有时会带上排序规则)    | SortDealsByAmount |
| Fill        | 填充(一般会进行覆盖)        |     FillAmountList              |

## 通用业务数据处理

| 动词       | 用途                                         | 示例                      |
| ---------- | -------------------------------------------- | ------------------------- |
| Parse      | 解析(解析成某些格式,解析提取某些内容)        | ParseFromJson,ParseResult |
| Analyse    | 分析(不一定能通过简单的方式获取)             | AnalyseLocation           |
| Convert    | 类型转换(通常用于从一个类型转换到另一种类型) | ConvertToString           |
| Format     | 格式化数据                                   | FormatToLocaleString      |
| Validate   | 合法性/有效性的校验                          | ValidateUserInputs        |
| Ensure     | 期待值的校验                                 | EnsureUserAge             |
| Compose    | 组成(一般由多项内容组成一个结果)             | EnsureUserAge             |
| Encode     | 编码(依赖约定的编码格式)                     | EncodeUrl                 |
| Decode     | 解码(依赖约定的解码格式)                     | EncodeUrl                 |
| Encrypt    | 数据加密(依赖约定的加密算法)                 | EncryptContent            |
| Decrypt    | 数据解密(依赖约定的解密算法)                 | DecryptContent            |
| Backup     | 备份(需要注意拷贝方式，避免误导)             | BackupUserSettings        |
| Restore    | 恢复                                         | RestoreUserSettings       |
| Import     | 导入(通常用于按照特定格式的文件转换)         | ImportFromFile            |
| Export     | 导出(通常用于转换成特定格式的文件)           | ExportToFile              |
| Compress   | 压缩(依赖约定的算法)                         | CompressOversizedFile     |
| Decompress | 解压缩(依赖约定的算法)                       | DecompressOversizedFile                          |
