---
title: 介绍
article: false
dir:
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

Media Saber 提供了 6 个官方 AI Agent 技能包，安装后可直接通过自然语言驱动 Media Saber 完成各类操作：

- 📺 **ms-sub**：影视订阅，自动搜索 TMDB、检查重复、一句话完成订阅
- 🔍 **ms-gap-filler**：漏集补齐，检查电视剧漏集并批量补订阅
- 🌟 **ms-recommend**：影视推荐，按平台、频道、筛选项逐步浏览推荐
- 🏆 **ms-rank**：影视榜单，按平台、分类、主题逐步查看榜单
- 🖥️ **ms-zspace-state**：极空间系统状态，查询 CPU、内存、磁盘、温度等硬件信息
- 🔧 **cli-anything-cliproxyapi**：CLIProxyAPI 代理管理，完整的代理服务器 CLI 工具

支持 npx、OpenClaw 小龙虾、Hermes 爱马仕三种安装方式。

👉 [查看 Skills 技能包详细文档](./skills.md)


### 🔌 MCP 工具集成

Model Context Protocol (MCP) 让AI拥有更强大的能力：

- 🛠️ **工具扩展**：集成外部工具和服务
- 📺 **媒体管理**：通过对话管理媒体库和订阅
- 🌐 **第三方服务**：支持地图、天气、搜索等多种服务
- 🔧 **灵活配置**：简单配置即可启用强大功能

👉 [了解 MCP 服务配置](./mcp.md)

---

## 🚀 快速开始

### 📋 前置准备

在使用智能体功能前，需要完成以下配置：

1. **配置 AI API**
   - 前往 [基础设置](/usage/system_settings/basic_settings/)
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
  - 🖥️ ms-zspace-state · 极空间系统状态
  - 🔧 cli-anything-cliproxyapi · CLIProxyAPI 代理管理

### 🔌 MCP 服务

- [MCP 服务文档](./mcp.md) - MCP 集成和配置指南
  - 🚀 快速启动 MCP 服务
  - 🔧 第三方服务配置
  - 🔑 API KEY 管理
  - ❓ 常见问题解答

---

## 🎯 核心优势

| 特性 | 说明 | 价值 |
|------|------|------|
| 🧠 **智能理解** | 自然语言处理，理解用户意图 | 降低使用门槛 |
| 🔌 **工具集成** | MCP协议支持，扩展AI能力 | 功能无限扩展 |
| 🎤 **多模态交互** | 支持文字和语音输入 | 使用更便捷 |
| 🎭 **灵活定制** | 自定义角色和系统提示词 | 满足个性需求 |
| 💬 **会话管理** | 智能组织历史对话 | 高效信息检索 |
| 🌐 **本地优先** | 支持本地部署和隐私保护 | 数据安全可控 |

---

## ⚠️ 注意事项

- 🌐 确保网络连接稳定，能够访问 API 服务
- 🔒 妥善保管 API KEY 等敏感信息

---

## 🔗 相关链接

- ⚙️ [基础设置](/usage/system_settings/basic_settings/) - 配置 AI API 和 MCP 功能
- 👤 [我的信息](/usage/main_page/my_info/) - 管理 API KEY
- 📖 [使用文档](/usage/) - 返回使用文档首页
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
