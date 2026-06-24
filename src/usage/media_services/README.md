---
title: 介绍
article: false
order: 10
dir:
  text: 媒体服务
  order: 30
tags: 
  - 媒体服务
  - 媒体库
  - 媒体服务器
categories: 
editor: markdown
date: 2023-09-27 12:16:17
---

# 🎵 媒体服务

媒体服务功能用于管理和配置各种媒体服务器，构建个人媒体库，实现媒体内容的集中存储、管理和播放。

## ⚡ 快速开始

建议按以下顺序完成配置：

1. 先进入 [媒体服务器](/usage/media_services/server.html) 添加并测试服务器连接
2. 再按你的服务器类型查看对应教程（Emby / Jellyfin / Plex / UGoS / FNOS / 极影视）
3. 若使用网盘 `.strm` 播放，务必配置 [媒体代理](/usage/media_services/media_proxy.html)

## 🧭 功能导航

### 核心页面

- 📚 [我的媒体库](/usage/media_services/library.html)：查看电影、电视剧等媒体数据总览
- 🩺 [媒体健康中心](/usage/media_services/media_health.html)：发现缺集、未归宗、可升级等媒体库问题
- 🖥️ [媒体服务器](/usage/media_services/server.html)：管理服务器新增、编辑、同步、定时任务
- 🚀 [媒体代理](/usage/media_services/media_proxy.html)：配置播放分发策略、直链探测和回退机制

### 服务器配置教程

- 🎬 [Emby](/usage/media_services/emby.html)
- 🐙 [Jellyfin](/usage/media_services/jellyfin.html)
- 🎥 [Plex](/usage/media_services/plex.html)
- 🟢 [绿影视](/usage/media_services/ugos.html)
- 🟠 [飞牛影视](/usage/media_services/fnos.html)
- 🔵 [极影视](/usage/media_services/zspace.html)

## 🔑 核心概念

- **媒体服务器**：用于存储、管理和播放媒体内容的软件服务（如 Emby、Plex、Jellyfin）
- **媒体库**：按电影、电视剧等类型组织媒体内容的逻辑结构
- **元数据**：标题、简介、演员、海报、评分等描述信息
- **刮削**：从 TheMovieDB、TheTVDB 等来源自动获取元数据和图片
- **直链播放**：客户端直接访问资源地址进行播放，对网络质量要求较高

## 🔄 工作流程

媒体服务的基本工作流程如下：

1. **配置服务器**：选择并配置合适的媒体服务器软件
2. **设置媒体库**：指定媒体文件的存储目录，配置媒体库设置
3. **自动刮削**：系统自动识别媒体文件并获取元数据
4. **库刷新**：文件整理完成后通知媒体服务器刷新库
5. **内容播放**：通过各种客户端设备访问和播放媒体内容

## ⚙️ 支持的媒体服务器

系统支持以下主流媒体服务器：

| 类型 | 说明 | 教程 |
| --- | --- | --- |
| Emby | 功能丰富、生态成熟，设备兼容性好 | [查看](/usage/media_services/emby.html) |
| Jellyfin | 免费开源、社区活跃 | [查看](/usage/media_services/jellyfin.html) |
| Plex | 体验完善、生态丰富 | [查看](/usage/media_services/plex.html) |
| 绿影视 (UGoS) | 面向中文场景的国产媒体服务 | [查看](/usage/media_services/ugos.html) |
| 飞牛影视 (FNOS) | 飞牛系统中的媒体服务，账号密码接入 | [查看](/usage/media_services/fnos.html) |
| 极影视 (极空间) | 极空间设备上的媒体服务 | [查看](/usage/media_services/zspace.html) |

## 📝 注意事项

- 选择服务器时优先考虑设备兼容性、远程访问场景与维护成本
- 确保媒体服务器可访问媒体文件目录，且 API 权限配置正确
- Emby、Jellyfin、Plex 在网盘 `.strm` 场景建议先配置媒体代理（[[查看媒体代理配置说明]](/usage/media_services/media_proxy)），否则通常无法完成 `302` 跳转播放
- 定期更新服务器版本，并关注版本兼容与变更说明
- 合理设置刮削与路径映射，减少识别错误
