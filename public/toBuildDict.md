# 如何导入新的词典 📚


## 1. 亲自动手！🛠️

### 1.1 词典的目标文件格式 📄

词典的文件格式是 `词典名.json` ，其内容结构应当是:

```json
[
    {
        "name" : "xxx" ,
        "trans" : ["xxx", "xxx",...]
    },
    ...
]
```

例如:

```json
  { "name": "file", "trans": ["n. 档案,公文箱,锉刀,[计算机] 文件 vt. 列队行进,归档,申请"] },
  {
    "name": "command",
    "trans": [
      "n.命令，指挥； 司令部，指挥部； [计算机]指令； 控制力 vt.指挥，控制，命令； 命令； 应得，值得 vi.给出命令； 命令，指令 adj.指挥的，根据命令（或要求）而作的"
    ]
  },
  { "name": "use", "trans": ["n. 运用,用法,使用权,适用 vt. 使用,利用,对待 vi. 吸毒"] },
  { "name": "program", "trans": ["n. 节目(单),程序,计划 vt. 规划,拟定计划,制作节目"] },
  { "name": "line", "trans": ["n. 行,线,航线,场界,皱纹,家族 vt. &vi. 用做衬里,排成一行,顺...排列 vi. 排成一行,顺...排列,划线于"] },
  { "name": "if", "trans": ["conj. 如果，是否，即使 n. 条件,设想"] },

```

#### 1.1.0 如何将词典的源文件转换为目标文件格式？🔄

由于词典的源文件格式、来源各异，我们无法为你提供统一的转换方法，但是我们可以提供一些思路：

#### 1.1.1 你可以将部分词典源文件的内容发送给 ChatGPT 并描述需求，让 ChatGPT 生成转换脚本 🤖

#### 1.1.2 你也可以使用在线工具将词典源文件转换为目标文件格式，此类在线工具有很多，如 <https://csvjson.com/csv2json> 🔧

#### 1.1.3 如果内容不多，你也可以手动将词典源文件转换为目标文件格式，或批量交给 ChatGPT 生成 ✍️


### 1.2 词典的目标文件位置 📍

词典的目标文件位置是 `/public/dicts/`，请将处理好的词典文件放置在该目录下

### 1.3 词典的索引建立 🔍

词典的索引建立是在 `/resources/dictionary.ts` 中完成的，你需要在该文件中添加一行代码，格式如下：

```json
{
    "id": "xxx",
    "name": "xxx",
    "description": "xxx",
    "category": "xxx",
    "url": "./dicts/xxx.json",
    "length": xxx
}
```

例如:

```json
  {
    "id": "cet4",
    "name": "CET-4",
    "description": "大学英语四级词库",
    "category": "英语学习",
    "url": "/dicts/CET4_T.json",
    "length": 2607,
    "language": "en",
  },
  {
    "id": "cet6",
    "name": "CET-6",
    "description": "大学英语六级词库",
    "category": "英语学习",
    "url": "/dicts/CET6_T.json",
    "length": 2345,
    "language": "en",
  },
```

其中,  
`id` 需要是所有词典中唯一的  
`name` 是展示给所有用户的词典名  
`description` 是词典描述  
`category` 是词典分类（你可以事先阅读所有已存在的词典分类，来为新的词典选择合适的分类）  
`url` 是词典的目标文件位置  
`length` 是词典的单词数量（可以通过运行脚本 `scripts/update-dict-size.js` 来自动计算）  
`language` 表示词典的语言

### 1.4 测试 🧪

使用 yarn 指令安装依赖，然后使用 yarn dev 启动开发服务器，访问 "http://localhost:5173"

如果你的词典已经成功导入，你将在词典列表中看到你的词典。🎉

