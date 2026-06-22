---
title: 引言
article: false
dir:
  text: ESP32 桌面小助手
  order: 12
date: 2026-06-20T00:00:00.000Z
tags:
  - ESP32-S3
  - 小智
  - 桌面小助手
categories:
  - 客户端
  - ESP32
---

# Media Saber ESP32 桌面小助手

> 把一块 ESP32-S3 小屏幕放在桌面上，让 Media Saber 的站点数据、NAS 状态、消息中心与小智语音能力随手可见。

<div align="center"><img src="./images/esp32-ms-helper-hero.png" alt="ESP32 桌面小助手整机效果图" width="800"/></div>

::: tip 适合谁？

- 已经部署 Media Saber，希望桌面上有一块常亮状态屏的用户。
- 喜欢 DIY 硬件，愿意自己接线、烧录 ESP32-S3 固件的用户。
- 想同时体验小智 ESP32 语音交互与 Media Saber 数据看板的用户。

:::

## 🧭 这是什么？

Media Saber ESP32 桌面小助手基于 **ESP32-S3 N16R8** 与 **小智 ESP32** 固件生态二次开发，保留小智语音、配网、OTA 等基础能力，并在触摸小屏上增加 Media Saber 数据看板。

桌面主屏由 **5 个可左右滑动的页面**组成：

```mermaid
flowchart LR
  T1[第 1 屏<br/>小智 AI] --> T2[第 2 屏<br/>NAS 监控]
  T2 --> T3[第 3 屏<br/>两步验证码]
  T3 --> T4[第 4 屏<br/>站点总览]
  T4 --> T5[第 5 屏<br/>应用入口]
```

## ✨ 能做什么？

| 能力 | 说明 |
|---|---|
| 小智语音对话 | 保留小智 ESP32 的语音交互体验 |
| NAS 状态屏 | 在桌面查看 CPU、内存、存储、温度与网络状态 |
| 两步验证码 | 将 PT 站点和自定义账号验证码显示在桌面上 |
| 站点总览 | 查看站点今日上传、下载、做种增量、签到等数据 |
| 应用入口 | 进入媒体库、排行推荐、消息中心、用户中心等二级页面 |
| 快捷指令 | 在消息中心一键触发签到、同步数据、订阅刷新等后端命令 |

完整界面说明请看：[功能与界面](./features.md)。

## 🚀 新手阅读路径

如果你是第一次复刻，建议按下面顺序阅读：

1. [功能与界面](./features.md)：先确认它是不是你想要的桌面小助手。
2. [硬件 DIY](./hardware.md)：确认需要购买哪些模块。
3. [接线与装配](./wiring.md)：按图连接屏幕、触摸和音频模块。
4. [固件烧录](./flashing.md)：下载固件并写入 ESP32-S3。
5. [首次配置](./configuration.md)：联网并连接到你的 Media Saber 服务端。
6. [MCP 网关 Compose 部署](./mcp-gateway-compose.md)：准备 MCP Proxy Gateway 运行环境。
7. [小智 MCP 对接 MS](./xiaozhi-mcp.md)：把 MS 能力通过 MCP Proxy Gateway 接入小智智能体。
8. [常见问题](./faq.md)：遇到串口、屏幕、声音、数据加载问题时排查。

## 📚 文档导航

| 页面 | 适合场景 |
|---|---|
| [功能与界面](./features.md) | 想了解五屏内容、消息中心、排行订阅和两步验证码 |
| [硬件 DIY](./hardware.md) | 准备购买主控板、屏幕、音频模块、喇叭和外壳 |
| [接线与装配](./wiring.md) | 已经拿到硬件，需要按 GPIO 接线并上电检查 |
| [固件烧录](./flashing.md) | 需要下载固件、进入下载模式、使用工具烧录 |
| [首次配置](./configuration.md) | 烧录完成后，需要连接 Wi-Fi 和 Media Saber 后端 |
| [MCP 网关 Compose 部署](./mcp-gateway-compose.md) | 需要部署 MCP Proxy Gateway，并复用 MS 的 PostgreSQL / Redis |
| [小智 MCP 对接 MS](./xiaozhi-mcp.md) | 需要把 MS 能力通过 MCP Proxy Gateway 接入小智智能体 |
| [常见问题](./faq.md) | 串口找不到、烧录失败、白屏、无声、数据为空等问题 |

## 🧩 最小硬件要求

当前公开固件以 **ESP32-S3 N16R8 + TK020F1131 2.0 寸触摸屏 + LMD2718/NS4168 音频模块** 为参考硬件。

| 模块 | 推荐规格 |
|---|---|
| 主控板 | ESP32-S3 N16R8，16MB Flash + 8MB PSRAM |
| 屏幕 | TK020F1131，2.0 寸，240×300，ST7789 兼容 |
| 触摸 | CST816 系列兼容触摸 IC |
| 音频 | LMD2718 + NS4168 音频模块，搭配 4Ω 小喇叭 |
| 数据线 | 支持数据传输的 USB-C 线 |

详细选型请看：[硬件 DIY](./hardware.md)。

## ⚠️ 重要提示

- 这是 DIY 硬件项目，接线、烧录、装壳都需要一定动手能力。
- 烧录会覆盖 ESP32-S3 原有固件，请先确认设备可以被重新烧录。
- 屏幕、音频模块的不同批次可能存在丝印或排针差异，接线前请以实物和卖家资料为准。
- 两步验证码会显示在桌面屏幕上，请避免把设备放在无关人员可直接看到的位置。
- 局域网配置服务只建议在配置时开启，配置完成后按页面提示关闭或退出。

## 🔗 固件下载

公开固件发布地址：

<https://github.com/xylplm/media-saber-public/releases/tag/esp32>

新手建议下载 **合并固件包**，解压后把单个 `.bin` 文件烧录到 `0x0` 地址即可。详细步骤请看：[固件烧录](./flashing.md)。
