---
title: DC 助手
action: false
tags:
  - 修仙秘籍
categories:
editor: markdown
date: 2025-11-19 00:00:00
---

# 🐳 DC 助手

Docker Copilot 自动更新和备份。

## ⚙️ 功能特点

- 自动检查 Docker 镜像更新
- 发现更新时发送通知提醒
- 支持自动备份 Compose 文件
- 可选择监控特定容器
- 依赖外部 dockerCopilot 项目

## 🚀 配置指南

| 参数 | 必填 | 说明 |
|------|------|------|
| 主机地址 | **是** | dockerCopilot 服务地址，格式：`http://IP:端口` |
| 密码 | **是** | dockerCopilot 服务密码 |
| 检查周期 | 否 | 镜像更新检查频率，cron 表达式 |
| 备份周期 | 否 | Compose 文件备份频率，cron 表达式 |
| 监控容器 | 否 | 多选，指定要监控的容器 |

### 🔧 工具栏操作

- **检查更新**：手动触发一次 Docker 镜像更新检查
- **备份Compose**：手动触发一次 Compose 文件备份

## 📖 使用说明

1. 部署 dockerCopilot 项目；
2. 填写主机地址和密码；
3. 设置检查周期和备份周期；
4. 选择需要监控的容器（可选）；
5. 点击「检查更新」验证连接是否正常。

## ⚠️ 注意事项

- 需要先部署 dockerCopilot 项目才能使用
- 非单例插件，可创建多个实例监控不同主机
- 主机地址格式必须包含协议和端口，如 `http://192.168.1.100:11111`
- 备份的 Compose 文件存储在 dockerCopilot 服务端

## 🔗 相关链接

- [dockerCopilot 项目](https://github.com/onlyLTY/dockerCopilot)
- [修仙秘籍主页](/usage/cultivation_secrets/)
