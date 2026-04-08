---
title: 环境变量说明
article: false
date: 2023-06-28T05:11:48.294Z
tags:
categories:
  - 快速上手
  - 开始
editor: markdown
dateCreated: 2023-05-12T04:26:30.172Z
---

## 🔧 环境变量说明

本页面详细介绍 Media Saber 的所有环境变量及其配置方式。

---

## 📝 基础配置

| 变量 | 说明 | 默认值 | 示例 |
|------|------|--------|------|
| `TZ` | 时区设置 | 无 | `Asia/Shanghai` |
| `MS_PORT` | 前端访问端口 | 3000 | `8888` |
| `MS_AUTH_EMAIL` | 认证邮箱（必填） | 无 | `admin@example.com` |
| `MS_AUTH_SLOGAN` | 认证口令（必填） | 无 | `YourPassword123` |

---

## 🔐 日志配置

| 变量 | 说明 | 默认值 | 可选值 |
|------|------|--------|--------|
| `MS_LOG_LEVEL` | 日志级别 | `info` | `debug`、`info`、`error`、`severe` |
| `MS_LOG_KEEP_DAYS` | 日志保留天数 | 7 | 数字（如 14、30） |
| `MS_LOG_MAX_SIZE` | 单个日志文件最大值 (MB) | 10 | 数字（如 10、50） |

---

## 💾 Redis 配置

Redis 用于缓存和队列管理，是必需的外部依赖。

| 变量 | 说明 | 默认值 | 示例 |
|------|------|--------|------|
| `MS_REDIS_HOST` | Redis 连接地址 | `localhost:6379` | `redis:6379` |
| `MS_REDIS_PASS` | Redis 密码 | 无 | `password123` |

:::tip 💡 Redis 配置
- 如果 Redis 无密码，`MS_REDIS_PASS` 可留空
- 在 Docker 环境中，通常使用服务名 `redis` 作为主机名
- 确保 Redis 服务正常运行，否则 Media Saber 无法启动
:::

---

## 🗄️ PostgreSQL 数据库配置

PostgreSQL 是系统的主要数据存储，不可省略。

| 变量 | 说明 | 默认值 | 示例 |
|------|------|--------|------|
| `MS_PGSQL_DBNAME` | 数据库名 | `ms` | `media_saber` |
| `MS_PGSQL_USERNAME` | 数据库用户名 | `postgres` | `postgres` |
| `MS_PGSQL_PASSWORD` | 数据库密码 | `ms888888` | `your_password` |
| `MS_PGSQL_PATH` | PostgreSQL 容器名/主机名 | `pgsql` | `postgres` |
| `MS_PGSQL_PORT` | PostgreSQL 端口 | `5432` | `5432` |
| `MS_PGSQL_LOG_MODE` | 数据库日志模式 | `silent` | `dev`、`test`、`prod`、`silent` |

:::warning ⚠️ 数据库重要提醒
- 修改密码前请备份数据库
- 生产环境建议使用复杂密码
- 日志模式在调试时设为 `dev`，正常运行设为 `silent`
:::

---

## ⏱️ 性能配置

| 变量 | 说明 | 默认值 | 建议值 |
|------|------|--------|--------|
| `MS_TIMEOUT` | 接口请求超时（毫秒） | 60000 | 30000-120000 |
| `MS_MQ_CONCURRENCY` | MQ 最大并发数 | 10 | 5-20 |
| `MS_PATH_WATCH_TIME` | 目录监听间隔时间（秒） | 30 | 10-60 |

:::info 💡 性能调优
- **MS_TIMEOUT**：网络较差时可适当增加
- **MS_MQ_CONCURRENCY**：根据 CPU 核心数调整，建议不超过核心数
- **MS_PATH_WATCH_TIME**：降低可提高目录变化响应速度，但增加 CPU 占用
:::

---

## 🔌 MCP 配置

用于 MCP (Model Context Protocol) 功能的网络配置。

| 变量 | 说明 | 默认值 | 示例 |
|------|------|--------|------|
| `MS_MCP_SERVER_HTTP_ADDR` | MCP 服务 HTTP 地址（已废弃） | 已废弃 | 不再使用 |

:::tip 📡 MCP 配置
- `MS_MCP_SERVER_HTTP_ADDR` 已废弃，无需配置
- 确保容器端口映射正确
- 如使用 Docker Compose，端口需在配置文件中映射
:::

---

## 🔗 相关链接

- [Docker Compose 全家桶安装](/guide/install/compose_all.md) - 查看完整配置文件
- [Docker Compose 独立安装](/guide/install/compose_standalone.md) - 分离部署方式
- [系统初始化](/guide/init/) - 初始化配置指南
- [常见问题](/guide/problem.md) - 遇到问题时查看
