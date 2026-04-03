---
title: Skills 技能包
article: false
tags: 
  - Skills
  - 技能包
  - MCP
  - OpenClaw
  - 小龙虾
categories: 
editor: markdown
date: 2025-04-03 10:00:00
---

# 🎯 Media Saber Skills 技能包

> 💡 Media Saber 官方技能包集合，基于 MCP（Model Context Protocol）协议开发，为 OpenClaw 和兼容客户端提供强大的功能扩展。

---

## ✨ 技能概览

Media Saber 提供了 **6 个核心技能包**，涵盖订阅管理、站点操作、推荐系统、云存储等多个方面。所有技能都已上架至 [ClawHub.ai](https://clawhub.ai)，可在 OpenClaw 小龙虾 中一键安装：

| 技能名称 | 功能描述 | 工具数量 | ClawHub 链接 |
|---------|--------|--------|--------|
| 🔌 **Media Saber MCP** | 完整MCP工具集 | 28个 | [📦 安装](https://clawhub.ai/xylplm/media-saber-mcp) |
| 📺 **订阅助手** | 订阅工作流优化 | - | [📦 安装](https://clawhub.ai/xylplm/media-saber-subscribe-assistant) |
| 🌐 **站点操作** | PT站点管理 | 13+ | [📦 安装](https://clawhub.ai/xylplm/media-saber-site-ops) |
| 🎬 **推荐助手** | 影视推荐系统 | - | [📦 安装](https://clawhub.ai/xylplm/media-saber-recommend-helper) |
| ☁️ **云助手** | 云存储和下载 | - | [📦 安装](https://clawhub.ai/xylplm/media-saber-cloud-assistant) |
| 💻 **极空间监控** | NAS系统监控 | - | [📦 安装](https://clawhub.ai/xylplm/media-saber-zspace-monitor) |

---

## 🔌 Media Saber MCP - 核心技能

Media Saber MCP 是官方提供的完整技能，包含 **28 个强大的工具**，几乎覆盖了 Media Saber 的所有核心功能。

👉 [了解 MCP 服务详情](./mcp.md)

### 🎬 工具分类

#### 1. 📺 媒体服务工具（6个）
通过自然语言查询和管理媒体库：

- `search_tmdb` - 搜索电影/电视剧 TMDB 信息
- `get_tmdb_info` - 获取电影/电视剧详细信息
- `get_media_status` - 查询媒体状态和库位置
- `get_miss_episodes` - 查询缺失集数
- `get_media_servers` - 查询可用媒体服务器
- `sync_libraries` - 同步媒体库

#### 2. 📦 订阅管理工具（3个）
一句话完成订阅：

- `subscribe_movie` - 订阅电影
- `subscribe_tv` - 订阅电视剧（支持指定季数）
- `refresh_subscribe` - 刷新订阅列表

#### 3. 🌐 站点操作工具（13+个）
完整的PT站点管理能力：

- `get_sites` - 查询站点列表
- `get_site_data` - 查询站点数据统计
- `today_site_data` - 查询站点今日数据
- `total_site_data` - 查询站点总体数据
- `get_site_message` - 查询站点消息
- `get_site_notice` - 查询站点公告
- `sync_site_data` - 同步站点数据
- `sync_site_message` - 同步站点消息
- `sync_site_notice` - 同步站点公告
- `site_sign_in` - 自动站点签到
- `test_site` - 站点连通性测试
- `test_site_rss` - 站点 RSS 测试
- `update_site_configs` - 更新站点适配

#### 4. 🎯 推荐系统工具（2个）
智能影视推荐：

- `recommend_movies` - 推荐电影（支持多条件筛选）
- `recommend_tvs` - 推荐电视剧（支持多条件筛选）

#### 5. ☁️ 云存储和下载工具（2个）
管理云盘和离线任务：

- `add_offline_download` - 添加离线下载（支持ed2k、磁力链接）
- `cloud_share_receive` - 云存储转存（支持115资源）

#### 6. 🔧 系统管理工具（2个）
系统运维和监控：

- `test_network` - 网络连通性测试
- `get_zspace_system_state` - 获取极空间系统状态和硬件信息

---

## 🚀 快速开始

### 📊 三种安装方式对比

选择最适合你的安装方式：

| 方式 | 难度 | 速度 | 特点 | 适合人群 |
|------|------|------|------|---------|
| 🌐 **Web UI** | ⭐ 极简 | ⭐⭐ 快 | 一键安装，无需配置 | 新手用户 |
| 💻 **CLI 命令** | ⭐⭐ 中等 | ⭐⭐⭐ 最快 | 批量安装，自动化 | 高级用户 |
| 🤖 **Agent 对话** | ⭐ 极简 | ⭐⭐ 快 | 自然语言，智能执行 | 所有用户 |

**推荐搭配使用**：
- 🆕 **初次体验**：先用 Web UI 或 Agent 对话快速启动
- 🔄 **日常维护**：用 CLI 命令快速更新或batch操作
- ✨ **快速询问**：用 Agent 对话了解 Skill 信息

---

### 🌐 推荐方式：ClawHub 一键安装

最快速、最便捷的安装方式：

1. 访问 [ClawHub.ai](https://clawhub.ai) 或点击上面表格中的「📦 安装」链接
2. 点击「添加到 OpenClaw」按钮
3. 在 OpenClaw 中确认并授权安装
4. 完成前置配置后即可使用

::: tip 💡 ClawHub 优势
- ✅ **一键安装**：无需手动配置 JSON
- ✅ **自动更新**：ClawHub 会推送最新版本
- ✅ **版本管理**：轻松切换不同版本
- ✅ **社区反馈**：了解其他用户的使用体验
:::
### 💻 使用 CLI 工具安装

如果你偏好使用命令行工具，可以通过 ClawHub CLI 快速安装和管理 Skills。

#### 1. 安装 ClawHub CLI

选择以下命令之一安装：

```bash
# 使用 npm
npm i -g clawhub

# 或使用 pnpm
pnpm add -g clawhub
```

#### 2. 搜索 Skills

在安装前，可以先搜索 Media Saber 相关技能：

```bash
clawhub search "media-saber"
```

或搜索特定功能：

```bash
clawhub search "订阅"
clawhub search "站点签到"
clawhub search "推荐"
```

#### 3. 一键安装 Skills

安装 Media Saber MCP（完整工具集）：

```bash
clawhub install media-saber-mcp
```

安装其他技能：

```bash
# 订阅助手
clawhub install media-saber-subscribe-assistant

# 站点操作
clawhub install media-saber-site-ops

# 推荐助手
clawhub install media-saber-recommend-helper

# 云助手
clawhub install media-saber-cloud-assistant

# 极空间监控
clawhub install media-saber-zspace-monitor
```

#### 4. 更新已安装的 Skills

更新所有已安装的 Skills 到最新版本：

```bash
clawhub update --all
```

更新特定 Skill：

```bash
clawhub update media-saber-mcp
```

::: tip 💡 CLI 工作目录说明
- 默认情况下，CLI 会将 Skills 安装到当前工作目录下的 `./skills`
- 如果已配置 OpenClaw 工作区，clawhub 会自动使用该工作区
- 可通过 `--workdir`（或环境变量 `CLAWHUB_WORKDIR`）来指定自定义工作目录
- OpenClaw 从 `<workspace>/skills` 加载工作区 Skills，在下一个会话中生效
- 工作区 Skills 优先级高于 `~/.openclaw/skills` 和内置 Skills
:::
### 🤖 通过 Agent 对话安装（最智能）

最简单、最直观的方式 - **直接告诉 OpenClaw Agent（小龙虾）安装 Skill**：

在 OpenClaw 的对话窗口中，直接输入自然语言命令：

```
请使用 clawhub 安装 Media Saber MCP 技能

或者

帮我安装 media-saber-subscribe-assistant Skill

或者

我想要安装所有 Media Saber 技能，你能帮我吗？
```

**Agent 会自动执行以下操作：**
1. ✅ 理解你的需求
2. ✅ 调用 clawhub 命令
3. ✅ 为你完成安装
4. ✅ 提示最终结果

::: tip 💡 Agent 安装优势
- ✅ **最简洁**：仅需一句自然语言
- ✅ **最智能**：Agent 自动理解意图
- ✅ **最快捷**：适合快速体验
- ✅ **交互友好**：有问题 Agent 会主动说明
- ⚡ **即时反馈**：安装进度实时显示
:::

**常见 Agent 命令示例：**

```
"请帮我安装 media-saber-mcp"

"能否使用 clawhub 安装订阅助手？"

"给我装上所有 Media Saber 技能"

"更新一下已安装的 Media Saber Skills"

"搜索一下有哪些媒体相关的 Skills"
```
---

### �📋 前置条件

::: tip 💡 前置要求
- 已部署 Media Saber 系统（含MCP服务）
- 已安装 OpenClaw 或兼容的MCP客户端
- 获得 Media Saber API Key
:::

### 1️⃣ 配置AI API

在开始使用Skills之前，需要先配置 AI 服务：

1. 前往 [基础设置](/usage/system_settings/basic_settings/)
2. 配置 **OpenAI API URL** 和 **API Key**
3. 选择默认使用的 **AI 模型**
4. 启用 **MCP 功能**

### 2️⃣ 获取 MCP 服务地址

Media Saber MCP 服务通常通过以下方式暴露：

**方式一：容器端口（推荐）**
```text
http://IP:8888/message
```

**方式二：后端内部端口**
```text
http://IP:22698/message
```

### 3️⃣ 获取 API Key

1. 登录 Media Saber 系统
2. 进入 **[我的信息](/usage/main_page/my_info/)** 页面
3. 在 **安全配置** 中复制 **API Key**

### 4️⃣ 在 OpenClaw 中导入 Skills

复制以下配置到 OpenClaw 的 `mcpServers` 设置：

**配置模板**
```json
{
  "media-saber-mcp": {
    "command": "node",
    "args": ["path/to/media-saber-mcp"],
    "env": {
      "MCP_ENDPOINT_URL": "http://localhost:8888/message",
      "API_KEY": "your-api-key-here"
    }
  }
}
```

::: warning ⚠️ 安全提示
- 不要在公开渠道分享 API Key
- API Key 密钥管理由 OpenClaw 负责
- 所有操作在本地执行，数据不上报
:::

---

## � 常用工作流

### 🚀 第一次使用 - 快速上手

**方式 A：Web UI（推荐新手）**
```bash
# 1. 访问 ClawHub.ai
# 2. 搜索 media-saber-mcp
# 3. 点击"添加到 OpenClaw"
# 4. 在 OpenClaw 中确认安装
```

**方式 B：CLI（推荐高级用户）**
```bash
# 1. 全局安装 CLI
npm i -g clawhub

# 2. 进入 OpenClaw 工作区
cd ~/your-openclaw-workspace

# 3. 安装所有 Media Saber 技能
clawhub install media-saber-mcp
clawhub install media-saber-subscribe-assistant
clawhub install media-saber-site-ops
```

**方式 C：Agent 对话（推荐最便捷）**
```
# 直接在 OpenClaw 对话框中输入：
"请帮我安装 media-saber-mcp 技能"

# Agent 小龙虾会自动：
# ✅ 理解你的需求
# ✅ 调用 clawhub 安装命令
# ✅ 完成安装并报告结果
```

### 📦 日常维护工作流

**检查可用更新**
```bash
clawhub search "media-saber"
```

**更新所有 Skills 到最新版本**
```bash
clawhub update --all
```

**更新特定 Skill**
```bash
clawhub update media-saber-mcp
```

### 🔍 快速查询工作流

**搜索特定功能的 Skill**
```bash
# 搜索订阅相关
clawhub search "media-saber-subscribe"

# 搜索推荐相关
clawhub search "media-saber-recommend"

# 搜索站点相关
clawhub search "media-saber-site"
```

### 🛠️ 多 Skill 混合使用

同时安装多个 Skill 组成完整工作流：

```bash
# 安装核心 MCP 工具
clawhub install media-saber-mcp

# 安装订阅工作流优化
clawhub install media-saber-subscribe-assistant

# 安装站点运维工具
clawhub install media-saber-site-ops

# 完成后重启 OpenClaw，所有 Skill 立即生效
```

---

## �💬 使用示例

### 🎬 电影订阅
```
"帮我订阅《复仇者联盟》2012年的电影"
"我想看最新的科幻电影"
```

### 📺 电视剧订阅
```
"订阅《权力的游戏》第8季"
"帮我追的那部日剧最新更新了吗"
```

### 🌐 站点操作
```
"帮我签到所有站点"
"查看站点今天的上传流量"
"测试所有站点的连接"
```

### 🎯 推荐系统
```
"推荐一些2023年的欧美科幻电影"
"有没有关于历史的电视剧推荐"
```

### ☁️ 云存储和下载
```
"帮我把这个115资源转存到云盘"
"添加这个磁力链接到离线下载"
```

### 🔍 媒体查询
```
"查一下《肖申克的救赎》的详细信息"
"我的媒体库中有哪些漏集的电视剧"
```

---

## 🔐 安全和隐私

### 凭证管理

Skills 需要以下凭证确保正常运行：

| 凭证 | 说明 | 敏感性 |
|------|------|-------|
| `MCP_ENDPOINT_URL` | MCP 服务地址 | 低 |
| `API_KEY` | Media Saber API 密钥 | ⚠️ 高 |

### 数据隐私

- ✅ 所有操作在本地执行
- ✅ API Key 不发送至第三方
- ✅ 操作日志存储在本地
- ✅ 完全隐私可控

---

## 📂 Skills 管理和加载

### 加载路径优先级

OpenClaw 按以下优先级加载 Skills（由高到低）：

1. **🏆 工作区 Skills** - `<workspace>/skills`（最高优先级）
2. **📦 用户 Skills** - `~/.openclaw/skills`
3. 📀 **内置 Skills** - OpenClaw 内置的官方 Skills（最低优先级）

::: tip 💡 优先级说明
- 工作区 Skills 优先级最高，会覆盖其他位置的同名 Skill
- 新安装的 Skill 会在下一个 OpenClaw 会话中生效
- 如果你使用 `~/.openclaw/skills` 或内置 Skills，工作区中的 Skill 会优先使用
:::

### 使用 CLI 时的工作目录

使用 ClawHub CLI 安装 Skills 时，需要注意工作目录配置：

```bash
# 方式1：在 OpenClaw 工作区目录中执行
cd ~/your-openclaw-workspace
clawhub install media-saber-mcp

# 方式2：使用 --workdir 参数指定位置
clawhub install media-saber-mcp --workdir /path/to/workspace

# 方式3：使用环境变量指定
export CLAWHUB_WORKDIR=/path/to/workspace
clawhub install media-saber-mcp
```

### Skills 共享和权限

OpenClaw Skills 支持以下功能：

- 📤 **共享**：可以将 Skills 作为版本发布到 ClawHub
- 🔐 **权限控制**：通过 SKILL.md 中的权限声明控制访问权限
- 📝 **审核**：ClawHub 提供审核钩子用于审批和审计

有关 Skills 加载、共享和权限控制的更多详情，请参考 [OpenClaw Skills 文档](https://docs.openclaw.ai/skills)。

---

## ❓ 常见问题

### Q1: 如何确认 MCP 服务已启动？

**A:** 在 [AI对话](/usage/ai/ai/) 页面的"MCP服务列表"中，应该能看到 **Media Saber MCP** 服务显示为"已连接"状态。

### Q2: API Key 在哪里获取？

**A:** 
1. 登录 Media Saber 后台
2. 前往 [我的信息](/usage/main_page/my_info/) 
3. 在 **安全配置** 中生成或复制 API Key

### Q3: 能否同时使用多个 Skills？

**A:** 可以。在 OpenClaw 中可以配置多个 MCP 服务，并在对话中同时使用多个技能。

### Q4: Skills 是否需要网络连接？

**A:** 需要局域网内能访问 Media Saber MCP 服务。对于本地部署的系统，通常直接使用 `localhost` 或内网IP即可。

### Q5: 如何更新 Skills 版本？

**A:** 推荐通过 ClawHub 安装，将自动推送最新版本更新。或从 [Media Saber Skills GitHub](https://github.com/yourusername/media-saber-skills) 仓库获取最新版本，更新配置后重启 OpenClaw 即可。

### Q6: 能否在不同客户端中使用这些 Skills？

**A:** Media Saber Skills 基于标准 MCP 协议开发，理论上支持所有兼容 MCP 协议的客户端。但我们主要针对 OpenClaw 进行优化和测试，推荐在 OpenClaw 中使用以获得最佳体验。

### Q7: ClawHub 上的 Skills 和手动配置有区别吗？

**A:** 功能上没有区别。ClawHub 方式只是简化了安装过程，自动处理配置。两种方式都推荐使用。

### Q8: 如何使用 ClawHub CLI？

**A:** 
1. 安装 CLI：`npm i -g clawhub` 或 `pnpm add -g clawhub`
2. 搜索 Skill：`clawhub search "media-saber"`
3. 安装 Skill：`clawhub install media-saber-mcp`
4. 更新 Skill：`clawhub update --all` 或 `clawhub update media-saber-mcp`

详见本文档的【常用工作流】和【使用 CLI 工具安装】部分。

### Q9: CLI 和 Web UI 安装有什么区别？

**A:** 
- **Web UI**：更直观，适合新手，可直接点击"添加到 OpenClaw"
- **CLI**：更快速，适合自动化部署，支持批量安装和版本管理
- **功能**：两者功能完全相同，最终效果一样

### Q10: Skills 会自动安装到哪个位置？

**A:** 
- 使用 CLI 时，默认安装到当前工作目录的 `./skills`
- 如果配置了 OpenClaw 工作区，会自动使用该工作区的 `<workspace>/skills` 目录
- 工作区 Skills 优先级高于 `~/.openclaw/skills` 和内置 Skills
- 可通过 `--workdir` 参数或 `CLAWHUB_WORKDIR` 环境变量自定义安装路径

### Q11: 如何一次性安装所有 Media Saber Skills？

**A:** 使用 CLI 工作流逐个安装：

```bash
clawhub install media-saber-mcp
clawhub install media-saber-subscribe-assistant
clawhub install media-saber-site-ops
clawhub install media-saber-recommend-helper
clawhub install media-saber-cloud-assistant
clawhub install media-saber-zspace-monitor
```

或按需要只安装必要的 Skill。

### Q12: 能否通过 Agent 对话安装 Skills？

**A:** 可以！这是最简便的方式。直接在 OpenClaw 对话框中告诉 Agent（小龙虾）你的需求：

```
"请帮我安装 media-saber-mcp 技能"
"使用 clawhub 安装订阅助手"
"给我装上所有 Media Saber Skills"
```

Agent 会自动理解你的意图，调用 clawhub 命令为你完成安装。详见本文档的【🤖 通过 Agent 对话安装】部分。

### Q13: Agent 安装和手动 CLI 有什么区别？

**A:**
- **Agent 安装**：最简单，用自然语言，Agent 自动执行，适合快速体验
- **手动 CLI**：需要记住命令，但更灵活，适合自动化脚本
- **最终效果**：完全相同，都是调用 clawhub 命令

### Q14: 用什么样的自然语言可以让 Agent 理解安装需求？

**A:** Agent 很聪明，以下表述都能被理解：

```
# 直接要求
"安装 media-saber-mcp"
"我要 Media Saber MCP 技能"

# 间接表述
"帮我装个完整的 MCP 工具集"
"我想要订阅功能，装对应的 Skill"

# 批量操作
"把所有 Media Saber 技能都给我装上"
"更新一下 Media Saber 的技能"

# 查询操作
"有没有关于媒体的技能？"
"搜索一下 Media Saber 相关的技能"
```

Agent 会理解你的意图并自动执行相应操作。

### Q15: Agent 安装失败怎么办？

**A:**
1. 检查 OpenClaw 是否已安装并启动
2. 确保能访问 ClawHub 服务
3. 尝试手动使用 CLI 命令：`clawhub install media-saber-mcp`
4. 查看 Agent 的错误提示，通常会提示具体原因
5. 如问题持续存在，可参考【常见问题】其他部分或《获取帮助》

---

## 🔗 相关链接

### 📦 ClawHub 官方技能链接

所有技能都已发布到 ClawHub，可直接一键安装到 OpenClaw：

- 🔌 [Media Saber MCP](https://clawhub.ai/xylplm/media-saber-mcp) - 完整MCP工具集（28个工具）
- 📺 [订阅助手](https://clawhub.ai/xylplm/media-saber-subscribe-assistant) - 订阅工作流优化
- 🌐 [站点操作](https://clawhub.ai/xylplm/media-saber-site-ops) - PT站点管理工具
- 🎬 [推荐助手](https://clawhub.ai/xylplm/media-saber-recommend-helper) - 影视推荐系统
- ☁️ [云助手](https://clawhub.ai/xylplm/media-saber-cloud-assistant) - 云存储和离线下载
- 💻 [极空间监控](https://clawhub.ai/xylplm/media-saber-zspace-monitor) - NAS系统监控

### 📚 文档和工具

- 📖 [MCP 服务配置详解](./mcp.md)
- 🤖 [AI 对话功能介绍](./ai.md)
- ⚙️ [基础设置指南](/usage/system_settings/basic_settings/)
- 👤 [获取 API Key](/usage/main_page/my_info/)
- 🌐 [ClawHub 官方网站](https://clawhub.ai)
- � [ClawHub CLI 文档](https://docs.clawhub.ai) - CLI 工具详细使用文档
- �🐙 [Media Saber Skills 源码仓库](https://github.com/yourusername/media-saber-skills)

---

## 📝 许可证

Media Saber Skills 采用 **MIT** 开源许可证。

---

## 🆘 获取帮助

如遇到问题，可以：

1. 📖 查阅本文档的 **常见问题** 部分
2. 📘 查看 [MCP 服务配置](./mcp.md) 文档
3. 🐛 提交 Issue 到 [GitHub仓库](https://github.com/yourusername/media-saber-skills)
4. 💬 加入社区讨论获取帮助

