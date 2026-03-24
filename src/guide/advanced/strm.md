---
title: 云盘存储设置
article: false
tags: null
order: 1
categories:
  - 快速上手
  - 进阶教程
author:
  - 四丿季
  - 凌霄
editor: markdown
date: 2026-01-20 17:26:00

---

## 🚀 开始云盘挂载配置

本文将完整演示 Media Saber 下 **云端存储订阅及播放自动化方案**：

> **订阅下载 → 自动上传云盘 → 云端整理分类 → 生成 STRM → Emby 302 直链播放**

适合：

* 使用 115 等云盘
* 希望本地只保留 STRM 文件
* 通过 Emby / Jellyfin 实现直链播放的用户

---

## 🧭 STRM 整体流程图

<font color="#c00000">总流程：1️⃣ 订阅下载 → 2️⃣ 自动上传云盘 → 3️⃣ 云端整理 → 4️⃣ 生成 STRM → 5️⃣ Emby 302 播放</font>

```mermaid
flowchart LR
    A[开始] --> B[前置准备]
    B --> C[目录分类]
    C --> D[配置目录]
    D --> E[媒体库与播放配置]
    E --> F[测试 302 播放]
    F --> G[完成]
```

---

## 📋 一、前置准备

### 1.1 挂载本地磁盘路径

确保 **用于下载、STRM 生成、自动上传** 的本地路径已经挂载到 Media Saber 容器中。

:::tip 📌 建议
将所有可能用到的媒体盘统一挂载，后期无需重复改容器。
:::

<div align="center"><img src="./images/strmnew/1-映射路径.jpg" width="800"/></div>

示例（Docker Compose）：

```yml
volumes:
  - /vol1/1000/docker/media-saber:/app/config
  - /vol2/1000/媒体库2:/媒体库2
```

> 示例中 `/媒体库2` 作为 STRM 根路径，可在其下新建 `mstrm` 目录。

---

### 1.2 设置文件管理目录

进入：**系统配置 → 基础配置**

* 文件管理目录：

  * 单个：`/媒体库2`
  * 多个：`/媒体库2,/媒体库3,/media4`

<div align="center"><img src="./images/strmnew/2-ms配置文件管理目录.jpg" width="800"/></div>

#### 1.2.1 验证挂载是否成功

在 **目录管理 → 文件管理** 中能正常选择并浏览目录内容。

<div align="center"><img src="./images/strmnew/验证本地文件目录挂载.jpg" width="400"/></div>

---

### 1.3 挂载云存储（115）

1. 进入：**云存储 → 添加云存储**
2. 添加 115，生成云盘路径 `/115`
3. 后续自动上传、云端整理均基于此路径

<div align="center"><img src="./images/strmnew/3-新建115云盘存储.jpg" width="800"/></div>

#### 1.3.1 验证云盘目录

确保能在云存储中正常浏览 `/115` 内容。

<div align="center"><img src="./images/strmnew/验证云端存储目录挂载.jpg" width="400"/></div>

---

## 📂 二、目录分类

进入：**目录管理 → 目录分类**

* 点击【生成默认分类】即可
* 若分类混乱，可全部删除后重新生成

<div align="center"><img src="./images/strm/目录分类1.png" width="800"/></div>
<div align="center"><img src="./images/strm/目录分类2.png" width="800"/></div>

---

## 🗂️ 三、配置目录

根据整体流程，需要创建以下目录：

* ✅ 3 个本地下载目录（电影 / 电视剧 / 动漫）
* ✅ 1 个云端待整理目录（115）
* ✅ 3 个云端分类目录（用于整理）
* ✅ 3 个 STRM 生成目录

:::warning ⚠️ 顺序很重要
`动漫` 分类必须排在 `电视剧` 之前，否则会被错误归类。
:::

<div align="center"><img src="./images/strmnew/4-新建所需目录.jpg" width="800"/></div>

---

### 3.1 订阅下载目录

* 示例：动漫下载目录
* 电影 / 电视剧仅修改分类即可

<div align="center"><img src="./images/strmnew/5-下载目录.jpg" width="500"/></div>

相关配套配置：

* **下载管理 → 下载参数**
* **下载器管理 → 添加 qBittorrent**
* **系统配置 → 种子匹配**（规则越少越好）

示例正则：

```
(去头尾广告|Pure|V2|纯净版|非伪去头)
```

<div align="center"><img src="./images/strmnew/种子匹配-空无广告4K.jpg" width="500"/></div>

---

### 3.2 订阅自动上传目录

用于 **下载完成后自动上传到云盘**。

<div align="center"><img src="./images/strmnew/订阅自动上传115待整理目录.jpg" width="800"/></div>

---

### 3.3 云盘分类目录

* 新建 3 个云端分类目录
* 统一打标签：如 `115`
* 用于后续云端自动整理识别

---

### 3.4 STRM 生成目录

* 新建 3 个 STRM 目录
* 分别绑定电影 / 电视剧 / 动漫分类

---

## 🎬 四、媒体库与 STRM

整体顺序建议：

1. MS 添加 Emby 媒体服务器（设置反代端口）
2. 配置云端自动上传任务
3. 配置云端整理规则
4. 配置 STRM 生成规则
5. Emby 添加 STRM 目录并扫库

---

### 4.1 配置 Emby 媒体服务器

<div align="center"><img src="./images/strmnew/媒体库服务器-emby.jpg" width="800"/></div>

---

### 4.2 云端上传任务

<div align="center"><img src="./images/strmnew/115上传任务配置.jpg" width="800"/></div>

---

### 4.3 云端自动整理

<div align="center"><img src="./images/strmnew/云盘自动整理.jpg" width="800"/></div>

---

### 4.4 STRM 生成配置

::: tip 💡 首次大批量导入快速方案

如需一次性批量生成大量 STRM 文件，推荐使用以下快速方案：

**[🔗 115网盘目录树生成STRM](/usage/cloud_storage/115_tree_gen_strm/)** ⭐ **快速导入**

- 在 115 网盘端一键导出目录树  
- 在 MS 中导入并批量生成 STRM
- 相比逐个手动配置可节省数倍时间

如需手动逐个配置 STRM 生成规则，请继续阅读下文。

:::

#### 日常使用配置

1. 先设置内外网访问地址
2. 新增 STRM 生成规则
3. 目录标签需与云盘分类一致（如 `115`）

<div align="center"><img src="./images/strmnew/生成strm前-先设置内外网地址.jpg" width="800"/></div>
<div align="center"><img src="./images/strmnew/strm生成.jpg" width="800"/></div>

---

### 4.5 Emby 添加 STRM 媒体库

在 Emby 中将 STRM 目录添加为媒体库并扫描。

---

## ✅ 五、测试 302 播放

### 5.1 Emby 播放验证

使用 **MS 反代端口** 打开 Emby，播放视频并检查是否出现 302 跳转。

<div align="center"><img src="./images/strmnew/验证strm播放走302重定向到115直链.jpg" width="800"/></div>

---

### 5.2 查看 MS 消息通知

<div align="center"><img src="./images/strmnew/验证strm-ms通知.jpg" width="800"/></div>

---

## ❓ FAQ

### MS 可以和其他 302 工具共存吗？

✅ **可以**，常见用法：

1. MS 只负责订阅 + 自动上传
2. 云端整理、STRM、302 交给 `cms / sa / onestrm`
3. MS 不启用反代端口与 STRM 生成

这样可无缝接入现有体系，无需重构。
