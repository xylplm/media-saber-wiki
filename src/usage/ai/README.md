---
title: 介绍
article: false
dir:
  text: 智能体
  order: 20
tags: 
  - 智能体
  - AI
  - 智能识别
  - OpenClaw
  - 小龙虾
categories: 
editor: markdown
date: 2025-01-01 12:16:17
---

# 🤖 智能体

> 💡 智能体是 Media Saber 的核心AI功能模块，通过先进的人工智能技术，为您提供智能对话、自动识别、工具集成等强大能力，让媒体管理更加智能化和自动化。

---

## ✨ 核心功能

### 🎯 官方 Skills 技能包（推荐）

Media Saber 提供了 12 个官方 AI Agent 技能包，安装后可直接通过自然语言驱动 Media Saber 完成各类操作：

- 📺 **ms-sub**：影视订阅，自动搜索 TMDB、检查重复、一句话完成订阅
- 🔍 **ms-gap-filler**：漏集补齐，检查电视剧漏集并批量补订阅
- 🌟 **ms-recommend**：影视推荐，按平台、频道、筛选项逐步浏览推荐
- 🏆 **ms-rank**：影视榜单，按平台、分类、主题逐步查看榜单
- ☁️ **ms-cloud-resource**：云端资源查询与下载，搜索云端/网盘资源并创建下载/转存任务
- 🏅 **ms-cloud-resource-rank**：云端资源贡献榜，查看 HASH 上报贡献排行
- 🗂️ **ms-media-server**：媒体服务器状态与同步，查看媒体库、同步历史与播放信息
- 📊 **ms-site-state**：站点状态与统计，查看站点上传/下载/做种/魔力等概况
- ✅ **ms-site-signin**：站点签到，查看签到记录或执行站点签到
- ⬇️ **ms-download**：下载任务管理，查看/暂停/恢复/删除下载任务
- 🖥️ **ms-nas-state**：NAS 系统状态，支持极空间、绿联、飞牛、PVE，支持多设备
- 🔧 **cli-anything-cliproxyapi**：CLIProxyAPI 代理管理，完整的代理服务器 CLI 工具

支持 npx、OpenClaw 小龙虾、Hermes 爱马仕三种安装方式。

👉 [查看 Skills 技能包详细文档](./skills.md)


### 🔌 MCP 工具集成

Model Context Protocol (MCP) 让AI拥有更强大的能力：

- 🛠️ **工具扩展**：集成外部工具和服务
- 📺 **媒体管理**：通过对话管理媒体库、订阅和媒体健康问题
- 🩺 **健康诊断**：查询缺集、未归宗、可升级等媒体库状态
- 🏆 **榜单浏览**：按平台、分类、主题逐步查看影视榜单
- 🖥️ **NAS 状态**：查询多品牌 NAS（极空间、绿联、飞牛、PVE）的系统状态与硬件信息，支持多设备
- 🌐 **第三方服务**：支持地图、天气、搜索等多种服务
- 🔧 **灵活配置**：简单配置即可启用强大功能

👉 [了解 MCP 服务配置](./mcp.md)

---

## 🚀 快速开始

### 📋 前置准备

在使用智能体功能前，需要完成以下配置：

1. **配置 AI API**
   - 前往 [基础设置](/usage/system_settings/basic_settings.html)
   - 配置 OpenAI API URL 和 API Key
   - 选择默认使用的AI模型

2. **启用 MCP 功能**（可选）
   - 在基础设置中开启 MCP 功能
   - 配置 Docker 环境变量（内置服务）
   - 添加所需的 MCP 服务

### 🎯 使用场景

**📺 媒体订阅管理**
```
"帮我订阅《复仇者联盟》2012年的电影"
"查看我的订阅列表"
```

**🔍 信息查询**
```
"这部电影的评分是多少？"
"推荐几部类似的科幻电影"
```

**⚙️ 系统配置**
```
"帮我配置下载器"
"查看系统运行状态"
```

---

## 💎 推荐服务

::: tip 🚀 硅基流动推荐

推荐用户使用 **硅基流动AI服务**。现在点击链接填写邀请码注册，可立即获得 **2000万Tokens**！

**邀请链接：** [https://cloud.siliconflow.cn/i/LUTcWF0b](https://cloud.siliconflow.cn/i/LUTcWF0b)

**邀请码：** `LUTcWF0b`

💰 注册时请填写邀请码以获得奖励。

:::

::: tip 🚀 智谱 BigModel 推荐

我正在智谱大模型开放平台 BigModel.cn 上打造AI应用，智谱新一代旗舰模型 GLM-5 已上线，在推理、代码、智能体综合能力达到开源模型 SOTA 水平，通过邀请链接注册即可获得 **2000万Tokens** 大礼包，期待和你一起在 BigModel 上畅享卓越模型能力！

**邀请链接：** [https://www.bigmodel.cn/invite?icode=HBQppQEacLEt72DlDimk3enfet45IvM%2BqDogImfeLyI%3D](https://www.bigmodel.cn/invite?icode=HBQppQEacLEt72DlDimk3enfet45IvM%2BqDogImfeLyI%3D)

💰 点击链接注册即可领取大礼包。

:::

---

## 📚 功能文档

### 🎯 Skills 技能包

- [Skills 技能包文档](./skills.md) - Media Saber 官方 AI Agent 技能包
  - 📺 ms-sub · 影视订阅
  - 🔍 ms-gap-filler · 漏集补齐
  - 🌟 ms-recommend · 影视推荐
  - 🏆 ms-rank · 影视榜单
  - ☁️ ms-cloud-resource · 云端资源查询与下载
  - 🏅 ms-cloud-resource-rank · 云端资源贡献榜
  - 🗂️ ms-media-server · 媒体服务器状态与同步
  - 📊 ms-site-state · 站点状态与统计
  - ✅ ms-site-signin · 站点签到
  - ⬇️ ms-download · 下载任务管理
  - 🖥️ ms-nas-state · NAS 系统状态
  - 🔧 cli-anything-cliproxyapi · CLIProxyAPI 代理管理

### 🔌 MCP 服务

- [MCP 服务文档](./mcp.md) - MCP 集成和配置指南
  - 🚀 快速启动 MCP 服务
  - 🩺 媒体健康中心查询
  - 🏆 榜单浏览工具
  - 🖥️ NAS 多品牌系统状态查询
  - 🔧 第三方服务配置
  - 🔑 API KEY 管理
  - ❓ 常见问题解答

---

---

## ⚠️ 注意事项

- 🌐 确保网络连接稳定，能够访问 API 服务
- 🔒 妥善保管 API KEY 等敏感信息

---

## 🔗 相关链接

- ⚙️ [基础设置](/usage/system_settings/basic_settings.html) - 配置 AI API 和 MCP 功能
- 👤 [我的信息](/usage/main_page/my_info.html) - 管理 API KEY
- 📖 [使用文档](/usage/main_page/) - 返回使用文档首页
- 🛠️ [系统设置](/usage/system_settings/) - 更多系统配置选项

---

## 💡 使用建议

1. **🎯 明确目标**：清晰表达您的需求，AI 会给出更准确的回复
2. **🔄 迭代优化**：通过多轮对话逐步完善任务
3. **🎭 定制角色**：为不同场景配置专门的 AI 助手
4. **🔌 善用工具**：启用 MCP 服务扩展 AI 能力
5. **💾 保存配置**：重要的配置和对话及时保存

---

**开始使用智能体，让 AI 成为您的得力助手！** 🚀
