---
title: 下载管理设置
article: false
date: 2023-10-12T09:22:05.263Z
tags:
categories: 
  - 新手指引
  - 初始化配置
editor: markdown
dateCreated: 2023-10-11T16:25:24.817Z
---

## ⬇️ 下载管理设置

本页面介绍如何在 Media Saber 中配置下载器和下载参数。

---

## 📥 第一步：添加下载器

**访问路径：** 下载管理 → 下载器管理 → 添加下载器

点击 "添加下载器" 按钮。

<div align="center"><img src="./images/xzgl/xz01.png" width="800"/></div>

### 1.1 填写下载器信息

在弹出的对话框中输入以下信息：

| 参数 | 说明 |
|------|------|
| 下载器地址 | 下载器 WebUI 访问地址（如 http://IP:PORT） |
| 下载器用户名 | 下载器登录用户名 |
| 下载器密码 | 下载器登录密码 |

<div align="center"><img src="./images/xzgl/xz02.png" width="800"/></div>

### 1.2 测试连接

点击 "测试" 按钮验证参数是否正确。

:::info ✅ 测试成功
下载器测试成功，请点击保存
:::

<div align="center"><img src="./images/xzgl/xz03.png" width="800"/></div>

:::warning ❌ 测试失败
如果测试失败，检查以下内容：
- 下载器地址是否正确
- 用户名和密码是否正确
- 下载器服务是否正常运行
:::

### 1.3 保存配置

点击 "保存" 按钮保存下载器配置。

:::success ✨ 保存成功
下载器保存成功
:::

<div align="center"><img src="./images/xzgl/xz04.png" width="800"/></div>

---

## ⚙️ 第二步：下载参数设置

**访问路径：** 下载管理 → 下载参数 → 右上角 "+"

为下载创建参数配置，用于控制下载行为。

<div align="center"><img src="./images/xzgl/xz05.png" width="800"/></div>

### 2.1 填写参数信息

输入以下参数：

| 参数 | 说明 | 默认值 |
|------|------|--------|
| 下载器参数名称 | 此配置的名称标识 | 必填 |
| 种子分类 | 下载器中的分类名称 | 必填 |
| 种子标签 | 种子标签，便于识别和管理 | `MEDIA_SABER` |
| 上传速度限制 | KB/s，0 表示不限制 | 0 |
| 下载速度限制 | KB/s，0 表示不限制 | 0 |
| 做种时间限制 | 小时，0 表示不限制 | 0 |
| 分享率限制 | 比率，0 表示不限制 | 0 |

<div align="center"><img src="./images/xzgl/xz06.png" width="800"/></div>

:::tip 💡 参数建议
- **默认不勾选** `添加种子时暂停`（直接开始下载）
- **0 值表示不限制**：上传/下载速度、做种时间、分享率都默认为 0（不限制）
- **多个参数**：可根据不同场景创建多个参数配置
:::

### 2.2 保存参数

点击 "保存" 完成参数设置。

:::success ✨ 保存成功
下载器参数保存成功
:::

<div align="center"><img src="./images/xzgl/xz07.png" width="800"/></div>
<div align="center"><img src="./images/xzgl/xz08.png" width="800"/></div>

---

## 📌 下一步

完成下载管理设置后，您可以进行以下操作：
- [返回初始化设置](/guide/init/)
- [进行目录配置](/guide/init/directory)
- [进行站点配置](/guide/init/sites)  
