<div align=center>
<img  src="src/assets/logo.svg"/>
</div>

<h1 align="center">
  Qwerty Learner
</h1>


<p align="center">
  为键盘工作者设计的单词记忆与英语肌肉记忆锻炼软件
</p>

<p align="center">
  <a><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"/></a>
  <a><img src="https://img.shields.io/badge/Powered%20by-React-blue"/></a>
</p>

<div align=center>
<img  src="docs/Screenshot.png"/>
</div>

## 📸 在线访问

**首选部署**: <https://qwerty.kaiyi.cool/>  
<br />

## 快速部署

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FRealKai42%2Fqwerty-learner)

#### 部署步骤

1. 更新 `Vercel Build & Development Settings` -> `Output Directory`："build"
2. Click Deploy Button

<br />

## ✨ 设计思想

软件设计的目标群体为以英语作为主要工作语言的键盘工作者。部分人会出现输入母语时的打字速度快于英语的情况，因为多年的母语输入练就了非常坚固的肌肉记忆 💪，而英语输入的肌肉记忆相对较弱，易出现输入英语时“提笔忘字”的现象。

同时为了巩固英语技能，也需要持续的背诵单词 📕，本软件将英语单词的记忆与英语键盘输入的肌肉记忆的锻炼相结合，可以在背诵单词的同时巩固肌肉记忆。

为了避免造成错误的肌肉记忆，设计上如果用户单词输入错误则需要重新输入单词，尽可能确保用户维持正确的肌肉记忆。

软件也对需要机考英语的人群有一定的帮助。

**For Coder**：

内置了程序员工作常用单词的词库，方便练习工作中常用的单词、提高输入速度。也内置了诸多语言的 API 的练习，帮助以程序员快速熟悉常用的 API，更多语言的 API 正在逐步添加中...

<div align=center>
<img  src="./docs/coder.png"/>
</div>

<br />
<br />

## 🛠 功能列表

### 词库

内置了常用的 CET-4 、CET-6 、GMAT 、GRE 、IELTS 、SAT 、TOEFL 、考研英语、专业四级英语、专业八级英语，也有程序员常见英语单词以及多种编程语言 API 等词库。 尽可能满足大部分用户对单词记忆的需求，也非常欢迎社区贡献更多的词库。
<br />
<br />

### 音标显示、发音功能

方便用户在记忆单词时，同时记忆读音与音标。

<div align=center>
<img  src="./docs/phonetic.jpeg"/>
</div>
<br />
<br />

### 默写模式

在用户完成一个章节的练习后，会弹出选项是否默写本章，方便用户巩固本章学习的单词。

<div align=center>
<img  src="./docs/dictation.png"/>
</div>
<br />
<br />

### 速度、正确率显示

量化用户输入的速度和输入的正确率，让用户有感知的了解自己技能的提升

<div align=center>
<img  src="./docs/speed.jpeg"/>
</div>
<br />
<br />

## 导入词典

[导入词典](./public/toBuildDict.md)

## 运行项目

本项目是基于`React`开发的，需要 node 环境来运行。

### 手动安装

1. 安装 NodeJS，参考[官方文档](https://nodejs.org/en/download)
2. 使用 `git clone` 下载项目到本地, 不使用 git 可能因为缺少依赖而无法运行
3. 打开命令行，在项目根目录下，运行`yarn install`来下载依赖。
4. 执行`yarn start`来启动项目，项目默认地址为`http://localhost:5173/`
5. 在浏览器中打开`http://localhost:5173/`来访问项目。

### 脚本执行

对于 Windows 用户，可以直接执行 [install.ps1](scripts/install.ps1) 脚本，来一键安装依赖并启动项目。

1. 打开 powershell，定位到项目根目录中的`scripts`目录
2. 在命令行中，执行`.\install.ps1`
3. 等待脚本完成。

> 备注
> 脚本依赖`winget`来安装 node，仅在 Windows 10 1709（版本 16299）或更高版本上受支持！

对于 MacOS 用户，可以直接执行 [install.sh](scripts/install.sh) 脚本来一键安装依赖并启动项目

1. 打开终端，并进入此项目文件夹
2. 在命令行中执行 `scripts/install.sh`
3. 等待脚本完成

> 此脚本依赖于 `homebrew`，请确保自己电脑上可以执行`brew`命令


## 📕 词库列表

- CET-4
- CET-6
- GMAT
- GRE
- IELTS
- SAT
- TOEFL
- 考研英语
- 专业四级英语
- 专业八级英语
- Coder Dict 程序员常用词
- 高考
- 中考
- 商务英语
- BEC
- 人教版英语 3-9 年级
- 王陆雅思王听力语料库 [@Saigyouji_WKKun](https://github.com/ggehuliang)
- 日语常见词、N1 ～ N5 [@xiaojia](https://github.com/wetery)
- 哈萨克语基础 3000 词(哈拼版) 来源于 [@Elgar](https://github.com/Elgar17) 由 [@Herbert He](https://github.com/HerbertHe) 通过 [哈拼](https://ha-pin.js.org) 技术支持


## 📗 API 词库

- JavaScript API. [@sdu-gyf](https://github.com/sdu-gyf)
- Node.js API. [@chrysalis1215](https://github.com/chrysalis1215)
- Java API. [@darkSheep](https://github.com/SFAfreshman)
- Linux Command. [@归谜](https://github.com/vhxubo)
- C#: List API [@nidbCN](https://github.com/nidbCN)


### 数据来源

字典数据来自于[kajweb](https://github.com/kajweb/dict)，项目爬取了常见的字典，也是这个项目让我看到了实现本项目的希望。

语音数据来源于[有道词典](https://www.youdao.com/)开放 API，感谢有道的贡献让我们这种小项目也可以用上非常专业的发音资源，感谢有道团队以及考神团队为中国教育与中外交流做出的重要贡献。

JS API 来自于[react-code-game](https://github.com/webzhd/react-code-game) ，感谢项目对 JS API 的爬取与预处理。
<br/><br/>
