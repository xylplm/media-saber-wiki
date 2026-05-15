---
title: CloudDrive2 刷新配置
action: false
tags:
  - 修仙秘籍
categories:
editor: markdown
date: 2025-11-19 00:00:00
---

# ☁️ CloudDrive2 刷新配置

配置 CloudDrive2 的 API 地址与令牌，供其他插件（如云存储增量整理、媒体服务刷新等）在执行前自动刷新 CloudDrive2 缓存，确保挂载目录数据为最新状态。

## ⚙️ 功能特点

- 配置 CloudDrive2 gRPC API 连接信息
- 为其他插件提供缓存刷新能力
- 单例插件，全局生效

## 🚀 配置指南

| 参数 | 必填 | 说明 |
|------|------|------|
| API 地址 | 否 | CloudDrive2 gRPC 服务地址，例如 `http://127.0.0.1:19798` |
| API 令牌 | 否 | 在 CloudDrive2 设置中配置的 API 令牌，用于鉴权 |

## 📖 使用说明

1. 在 CloudDrive2 管理界面中开启 API 并设置令牌；
2. 在本插件中填写对应的地址和令牌；
3. 其他需要刷新 CD2 缓存的插件（如云存储增量整理）会自动调用本配置。

## ⚠️ 注意事项

- 本插件本身不执行定时任务，仅作为配置提供者；
- 如果不使用 CloudDrive2 挂载云存储，无需启灵本插件；
- 地址需包含端口号，确保 Media Saber 容器能访问到该地址。

## 🔗 相关链接

- [修仙秘籍主页](/usage/cultivation_secrets/)
- [云存储增量整理](/usage/cultivation_secrets/cloud_storage_watcher.html)
- [媒体服务刷新](/usage/cultivation_secrets/media_server_refresh.html)
