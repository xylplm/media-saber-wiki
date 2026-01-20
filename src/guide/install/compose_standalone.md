---
title: Docker Compose 独立安装
article: false
date: 2025-03-11T12:20:20.888Z
tags:
categories: 
  - 新手指引
  - 如何安装
editor: markdown
dateCreated: 2025-03-11T12:20:20.888Z
---

## 📦 Docker Compose 独立安装

此方式将 Redis、PostgreSQL、Media Saber 分别部署为独立的容器。

:::info 📋 适用场景
- 希望分开管理各个服务的用户
- 已有独立 Redis 或 PostgreSQL 的用户
- 需要细粒度控制的用户
:::

:::warning ⚠️ 本页以群晖为例
其他 NAS 设备请根据实际情况修改相关映射路径。
:::

---

## 🟥 第一步：部署 Redis

Redis 用于缓存数据和加速系统运行（必选）。

### 配置文件

```yaml
version: "3.3"

services:
  redis:
    image: redis:7.4-alpine
    container_name: redis
    ports:
      - 6379:6379
    environment:
      - REDIS_PASSWORD=your_password  # 修改为实际密码
    volumes:
      - /volume1/docker/redis/data:/data
    network_mode: host
    restart: always
```

### 配置说明

| 参数 | 说明 | 修改建议 |
|------|------|---------|
| `REDIS_PASSWORD` | Redis 登录密码 | 设置强密码 |
| `/volume1/docker/redis/data` | 数据存储路径 | 修改为实际路径 |
| `6379` | Redis 端口 | 确保端口未被占用 |

---

## 🐘 第二步：部署 PostgreSQL

PostgreSQL 是系统主数据库（必选）。

### 配置文件

```yaml
version: "3.8"

services:
  pgsql:
    image: postgres:17-alpine
    container_name: ms-pgsql
    restart: unless-stopped
    networks:
      - ms_network
    volumes:
      - /volume1/docker/pgsql/data:/var/lib/postgresql/data
    environment:
      POSTGRES_USER: postgres
      POSTGRES_DB: ms
      POSTGRES_PASSWORD: ms888888  # 修改为实际密码
      POSTGRESQL_WAL_COMPRESSION: lz4
      POSTGRESQL_MAX_CONNECTIONS: 2048
    ports:
      - 5431:5432

networks:
  ms_network:
    driver: bridge
```

### 配置说明

| 参数 | 说明 | 修改建议 |
|------|------|---------|
| `POSTGRES_PASSWORD` | 数据库密码 | 设置强密码，需与 Media Saber 配置一致 |
| `POSTGRES_DB` | 数据库名 | 默认 `ms`，通常无需修改 |
| `/volume1/docker/pgsql/data` | 数据存储路径 | 修改为实际路径 |
| `5431:5432` | 端口映射 | 左侧为宿主机端口，修改为可用端口 |

---

## 🎬 第三步：部署 Media Saber

Media Saber 主服务。

### 配置文件

```yaml
version: "3"

services:
  msgo:
    image: xylplm/media-saber:latest
    container_name: media-saber-go
    volumes:
      - /volume1/docker/media-saber/config:/app/config
      - /volume2/Medium:/Medium  # 修改为实际媒体路径
    environment:
      - PUID=0
      - PGID=0
      - TZ=Asia/Shanghai
      - MS_PORT=3000
      - MS_REDIS_HOST=10.0.0.1:6379  # 修改为 Redis 实际 IP:端口
      - MS_REDIS_PASS=your_password  # 修改为 Redis 密码
      - MS_TIMEOUT=60000
      - MS_PGSQL_USERNAME=postgres
      - MS_PGSQL_PASSWORD=ms888888  # 与上面 PostgreSQL 密码一致
      - MS_PGSQL_PATH=10.0.0.1  # 修改为 PostgreSQL 所在服务器 IP
      - MS_PGSQL_PORT=5431  # 修改为 PostgreSQL 实际端口
      - MS_PGSQL_DBNAME=ms
      - MS_AUTH_EMAIL=admin@example.com  # 修改为实际邮箱
      - MS_AUTH_SLOGAN=我的媒体库  # 修改为实际标语
      - MS_LOG_LEVEL=debug
      - MS_PGSQL_LOG_MODE=silent
      - MS_LOG_KEEP_DAYS=7
      - MS_PATH_WATCH_TIME=30
    ports:
      - 3000:3000  # 映射容器端口到宿主机
    network_mode: host
    restart: always
```

---

## ⚙️ 必须修改的参数

:::warning ⚠️ 关键配置
这些参数必须根据实际情况修改，否则服务无法正常运行：
:::

| 参数 | 说明 | 示例 |
|------|------|------|
| `MS_REDIS_HOST` | Redis 访问地址 | `192.168.1.100:6379` |
| `MS_REDIS_PASS` | Redis 密码 | `your_password` |
| `MS_PGSQL_PATH` | PostgreSQL 服务器 IP | `192.168.1.100` |
| `MS_PGSQL_PORT` | PostgreSQL 端口 | `5431` |
| `MS_PGSQL_PASSWORD` | PostgreSQL 密码 | `ms888888` |
| `MS_AUTH_EMAIL` | 认证邮箱（必填） | `admin@example.com` |
| `MS_AUTH_SLOGAN` | 认证口令（必填） | `YourPassword123` |
| `/volume1/docker/*` | 存储路径 | `/mnt/data/docker/*` |
| `/volume2/Medium` | 媒体路径 | `/mnt/media/*` |

---

## 🚀 启动服务

### 顺序启动

建议按照以下顺序启动服务：

```bash
# 1. 先启动 Redis
docker compose -f redis-compose.yml up -d

# 2. 再启动 PostgreSQL
docker compose -f pgsql-compose.yml up -d

# 3. 最后启动 Media Saber
docker compose -f msgo-compose.yml up -d
```

### 查看日志

```bash
# 查看 Media Saber 日志
docker compose -f msgo-compose.yml logs -f
```

---

## 📌 相关文档

- [Compose 全家桶安装](/guide/install/compose_all) - 一个文件部署所有服务
- [Compose 全家桶 + env 方案](/guide/install/compose_all_env) - 使用 .env 文件的方案
- [系统初始化](/guide/init/) - 完成安装后进行初始化配置
- [常见问题](/guide/problem) - 遇到问题时查看
