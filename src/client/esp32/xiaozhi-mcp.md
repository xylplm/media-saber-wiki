---
title: 小智 MCP 对接 MS
article: false
order: 7
tags:
  - ESP32-S3
  - 小智
  - MCP
  - Media Saber
---

# 小智 MCP 对接 MS

小智 AI 支持通过 MCP 扩展智能体能力。推荐使用 [MCP Proxy Gateway](https://github.com/xylplm/mcp-proxy-gateway) 作为中间网关，把 Media Saber 相关 MCP 能力统一接入小智。

::: tip 推荐方案

MCP Proxy Gateway 可以聚合多个 MCP 服务，并作为客户端主动连接小智的 MCP 接入点。你只需要把小智控制台生成的接入点地址复制到网关里，保存后即可自动接入。

:::

## 🧭 对接流程

```mermaid
flowchart LR
  MS[Media Saber MCP 能力] --> Gateway[MCP Proxy Gateway]
  Gateway --> XiaoZhiEP[小智 MCP 接入点]
  XiaoZhiEP --> Agent[小智智能体]
  Agent --> Device[ESP32 桌面小助手]
```

整体步骤：

1. 部署并登录 MCP Proxy Gateway。
2. 在网关中接入 Media Saber 相关 MCP 服务，具体见：[MCP 网关接入 MS 服务](./mcp-gateway-ms-upstream.md)。
3. 到小智 AI 控制台获取智能体的 MCP 接入点地址。
4. 回到网关「API 服务 → 小智接入」填写接入点地址并保存。
5. 回到小智控制台查看接入点状态，确认是否在线。

## 1. 部署 MCP Proxy Gateway

MCP Proxy Gateway 是通用 MCP 聚合与代理网关，支持 Docker 部署。

文档地址：

<https://github.com/xylplm/mcp-proxy-gateway>

::: info 它能做什么？

- 聚合多个上游 MCP 服务。
- 对外提供统一 MCP 接入。
- 支持 API Key、规则、统计和调用记录。
- 支持「小智接入」，可主动连接小智 MCP 接入点。

:::

如果你已经部署了 Media Saber，可以复用 MS 的 PostgreSQL 和 Redis。推荐先看独立教程：[MCP 网关 Compose 部署](./mcp-gateway-compose.md)。

最小 Compose 示例：

```yaml
services:
  mcp-proxy-gateway:
    image: xylplm/mcp-proxy-gateway:latest
    container_name: mcp-proxy-gateway
    restart: unless-stopped
    ports:
      - "8088:8080"
    environment:
      MPG_PG_DSN: "postgres://mcp_gateway_user:你的数据库密码@pgsql:5432/mcp_gateway?sslmode=disable"
      MPG_REDIS_ADDR: "redis:6379"
      MPG_REDIS_PASSWORD: ""
      MPG_DATA_DIR: "/data"
    volumes:
      - ./data:/data
```

启动后访问：

```text
http://你的NAS地址:8088
```

::: warning 先准备数据库

上面的 Compose 假设你已经在 PostgreSQL 中创建了 `mcp_gateway` 数据库和 `mcp_gateway_user` 用户。`MPG_PG_DSN` 是数据库连接串，里面包含用户名、密码、数据库地址、端口和数据库名；详细拆解、创建命令和复用 MS Redis 的写法请看：[MCP 网关 Compose 部署](./mcp-gateway-compose.md)。

:::

## 2. 在网关中接入 Media Saber MCP

部署完成后，需要把 Media Saber 自带的 MCP 服务添加为上游 MCP。请按 [MCP 网关接入 MS 服务](./mcp-gateway-ms-upstream.md) 完成以下配置：

| 配置项 | 推荐值 |
|---|---|
| 传输方式 | 远程 HTTP |
| 服务地址 | `http://你的MS地址:端口/mcp/http` |
| 认证方式 | Bearer Token |
| 凭证 | Media Saber API KEY |

确认网关能同步出 Media Saber 工具后，再继续配置小智接入。

## 3. 在小智控制台获取 MCP 接入点

打开小智 AI 控制台：

<https://xiaozhi.me/console/agents>

按下面步骤操作：

1. 进入 **小智 AI 控制台 → 智能体**。
2. 找到需要配置的智能体。
3. 点击该智能体的 **配置角色** 按钮，进入配置页。
4. 选择下方的 **MCP 设置**。
5. 可以按需勾选你喜欢的官方 MCP 设置。
6. 在 **自定义服务** 区域点击 **获取 MCP 接入点**。
7. 复制生成的 **MCP 接入点地址**。

::: warning 接入点地址请妥善保存

MCP 接入点地址用于让网关连接到你的小智智能体，请不要公开贴到论坛、群聊或公开仓库中。

:::

## 4. 在 MCP Proxy Gateway 填写小智接入

登录 MCP Proxy Gateway 管理界面，进入：

```text
API 服务 → 第三方对接 → 小智接入
```

按下面填写：

| 配置项 | 说明 |
|---|---|
| 启用小智接入 | 打开开关，保存后网关会立即尝试连接 |
| 接入点地址 | 粘贴小智控制台复制的 MCP 接入点地址，通常是 `wss://...` |
| 对接模式 | 建议选择「全量模式」 |

填写完成后点击 **保存小智接入**。

::: warning 小智接入建议使用全量模式

小智 MCP 当前更适合直接接收完整工具列表，**不建议在小智接入里使用智能模式**。智能模式主要适合 Claude Code 等支持先发现、再按需调用网关工具的客户端；小智场景请优先选择「全量模式」，避免工具不可见或调用异常。

:::

## 5. 确认接入状态

保存后可以从两个地方确认状态：

1. **MCP Proxy Gateway** 的「API 服务 → 小智接入」区域会显示连接状态。
2. 回到小智控制台的 **MCP 设置 / 自定义服务** 页面，查看接入点状态是否在线。

如果显示在线，就说明小智智能体已经能通过 MCP Proxy Gateway 调用你聚合的 MCP 能力。

## 6. 常见问题

### 接入点一直不在线

- 确认 MCP Proxy Gateway 服务正在运行。
- 确认「启用小智接入」已经打开并保存。
- 确认接入点地址完整复制，没有遗漏或多余空格。
- 接入点地址需要是 `ws://` 或 `wss://`，不要改成 `http://` 或 `https://`。
- 如果网关部署在内网，请确认它可以主动访问小智接入点。

### 小智能看到接入点，但调用不到 MS 能力

- 确认 Media Saber 相关 MCP 服务已经在 MCP Proxy Gateway 中接入并启用。
- 在网关中检查上游 MCP 服务状态和工具列表。
- 如果配置了屏蔽规则或 API Key 规则，确认没有把需要的工具过滤掉。
- 确认「对接模式」选择的是「全量模式」，小智接入不建议使用智能模式。

### 是否必须使用 MCP Proxy Gateway？

不是必须，但推荐使用。它可以统一管理多个 MCP 服务，也方便以后继续接入其它工具，而不是每个服务都单独配置到小智里。

## 🔗 相关链接

- [MCP Proxy Gateway 项目主页](https://github.com/xylplm/mcp-proxy-gateway)
- [小智 AI 智能体控制台](https://xiaozhi.me/console/agents)
- [ESP32 桌面小助手功能与界面](./features.md)
