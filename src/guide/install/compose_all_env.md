---
title: Docker Compose 全家桶安装（完整配置）
article: false
date: 2025-11-20T12:20:20.888Z
tags:
categories: 
  - 快速上手
  - 如何安装
editor: markdown
dateCreated: 2025-11-20T12:20:20.888Z
---

## 🐳 Docker Compose 全家桶安装

此方式适合飞牛、绿联、极空间、群晖等一切支持 Docker Compose 的设备。

:::info 📋 适用人群
本教程适合有一定 Linux 命令行基础和 Docker 基础的用户。
:::

---

## 📁 项目目录结构

```txt
├── msgo
│   ├── common/          # 公共配置（如 hosts 文件）
│   ├── redis/           # Redis 数据
│   ├── pgsql/           # PostgreSQL 数据库
│   ├── ms/              # Media Saber 配置
│   ├── qb/              # qBittorrent 配置
│   ├── tr/              # Transmission 配置
│   ├── emby/            # Emby 配置
│   ├── docker-compose.yml   # 完整 Compose 配置文件
│   └── .env             # 环境变量文件
```

---

## 🔧 环境变量配置 (.env 文件)

### 配置说明

:::tip 💡 配置建议
1. **路径简化**：使用 `DOCKER_PATH` 和 `MEDIA_PATH` 简化路径，避免暴露敏感信息（如手机号）
2. **多媒体路径**：若有多个媒体路径，可使用 `MEDIA_PATH_1`、`MEDIA_PATH_2` 等变量
3. **局域网配置**：`LOCAL_IP` 是 NAS 局域网 IP，用于服务间通信；`PROXY_IP` 是代理服务器 IP
4. **用户权限**：PUID 和 PGID 默认为 1000 和 1001，根据实际情况修改
5. **端口避免冲突**：PostgreSQL 和 Redis 使用 15432、16379 端口，避免与主机冲突
:::

### 查看用户权限信息

```bash
[user@nas] ~
❯ id
uid=1000(allen) gid=1001(Users) groups=1001(Users),994(docker),1000(Administrators)
```

:::warning ⚠️ 权限配置重要提示
- 也可直接使用 `PUID=0` 和 `PGID=0`（root 权限）
- **所有 Docker 容器的 PUID 和 PGID 必须一致**，否则会出现权限问题
:::

### 完整 .env 配置文件

```yaml
# ==================
# 路径配置
# ==================
DOCKER_PATH=/vol1/1000/docker
MEDIA_PATH=/vol2/1000/media

# ==================
# 局域网 IP 和代理
# ==================
LOCAL_IP=192.168.3.20
PROXY_IP=192.168.3.15
PROXY_PORT=7890

# ==================
# 用户权限
# ==================
PUID=1000
PGID=1001

# ==================
# PostgreSQL 数据库
# ==================
PGSQL_DBNAME=ms
PGSQL_USER=postgres
PGSQL_PASSWORD=YourPostgresPassword
PGSQL_PORT=15432

# ==================
# Redis 缓存
# ==================
REDIS_PASSWORD=YourRedisPassword
REDIS_PORT=16379

# ==================
# Media Saber
# ==================
AUTH_EMAIL=username@sample.com
AUTH_SLOGAN=你的密钥
MS_PORT=8888

# ==================
# qBittorrent
# ==================
QB_PORT=18989
QB_TORRENT_PORT=58365

# ==================
# Transmission
# ==================
TR_PORT=9091

# ==================
# Emby 媒体服务器
# ==================
EMBY_PORT=18096
```

---

## 🎛️ 完整 Docker Compose 配置

### 配置说明

:::warning ⚠️ 关键信息
1. **Hosts 映射**：`/etc/hosts` 映射便于管理和自动更新
2. **特权模式**：MS 需要特权模式以控制其他容器
3. **BT 备份**：`/BT_backup` 用于管理种子文件
4. **权限一致**：所有容器的 PUID/PGID **必须相同**
5. **目录规划**：QB/TR 下载到 `/media/raw/*`，MS 整理到 `/media/arc/*`
6. **安全提示**：Redis 和 PostgreSQL 暴露到局域网，**必须使用强密码**
:::

### 完整 docker-compose.yml 文件

```yaml
version: '3.8'

services:
  # Redis 缓存数据库，必选
  redis:
    image: redis:latest
    container_name: msgo-redis
    restart: always
    command: /bin/sh -c "redis-server --appendonly yes --requirepass ${REDIS_PASSWORD}"
    network_mode: bridge
    ports:
      - "${REDIS_PORT}:6379"
    volumes:
      - ${DOCKER_PATH}/msgo/redis/data:/data
    environment:
      - TZ=Asia/Shanghai
      - GOSU_VERSION=1.17

  # PostgreSQL 主数据库，必选
  pgsql:
    image: postgres:17-alpine  # 18版本会有大升级，可以锁死 17 版本
    container_name: msgo-pgsql
    restart: always
    network_mode: bridge
    ports:
      - "${PGSQL_PORT}:5432"  # 对外访问端口
    volumes:
      - ${DOCKER_PATH}/msgo/pgsql/data:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=${PGSQL_DBNAME}
      - POSTGRESQL_WAL_COMPRESSION=lz4  # 压缩算法
      - POSTGRESQL_MAX_CONNECTIONS=2048  # 最大连接数
      - POSTGRES_USER=${PGSQL_USER}
      - POSTGRES_PASSWORD=${PGSQL_PASSWORD}

  # Media Saber 主服务
  server:
    image: xylplm/media-saber:dev  # dev 比 latest 更适合
    container_name: msgo-server
    restart: always
    network_mode: bridge
    ports:
      - "${MS_PORT}:${MS_PORT}"
    volumes:
      - ${DOCKER_PATH}/msgo/common/hosts:/etc/hosts:rw
      - ${DOCKER_PATH}/msgo/emby/config/data:/emby-data:ro  # 可选：Emby SQLite 直连同步
      - ${DOCKER_PATH}/msgo/ms/config:/app/config
      - ${DOCKER_PATH}/msgo/qb/config/qBittorrent/BT_backup:/BT_backup  # 挂载 qb 目录
      - ${MEDIA_PATH}:/media
    environment:
      - PUID=${PUID}
      - PGID=${PGID}
      - TZ=Asia/Shanghai
      - MS_PORT=${MS_PORT}  # 前端端口
      - MS_AUTH_EMAIL=${AUTH_EMAIL}  # 必填：访问认证邮箱
      - MS_AUTH_SLOGAN=${AUTH_SLOGAN}  # 必填：认证口令
      - MS_LOG_LEVEL=debug
      - MS_LOG_KEEP_DAYS=14
      - MS_REDIS_HOST=${LOCAL_IP}:${REDIS_PORT}  # redis 局域网 ip:端口
      - MS_REDIS_PASS=${REDIS_PASSWORD}
      - MS_TIMEOUT=60000
      - MS_PGSQL_DBNAME=${PGSQL_DBNAME}
      - MS_PGSQL_USERNAME=${PGSQL_USER}
      - MS_PGSQL_PASSWORD=${PGSQL_PASSWORD}
      - MS_PGSQL_PATH=${LOCAL_IP}  # pgsql 局域网 ip
      - MS_PGSQL_PORT=${PGSQL_PORT}
      - MS_PGSQL_LOG_MODE=prod  # 数据库日志模式: dev|test|prod|silent
      - MS_MQ_CONCURRENCY=10

  # qBittorrent 下载器
  qb:
    image: lscr.io/linuxserver/qbittorrent:14.3.9
    container_name: msgo-qb
    restart: always
    network_mode: host  # 使用 host 模式，可以使用 ipv6
    ports:
      - "${QB_PORT}:${QB_PORT}"  # 映射后，方便 Docker 外网访问
    volumes:
      - ${DOCKER_PATH}/msgo/common/hosts:/etc/hosts:ro
      - ${DOCKER_PATH}/msgo/qb/config:/config
      - ${MEDIA_PATH}:/media
    environment:
      - PUID=${PUID}
      - PGID=${PGID}
      - TZ=Asia/Shanghai
      - WEBUI_PORT=${QB_PORT}
      - TORRENTING_PORT=${QB_TORRENT_PORT}

  # Transmission 保种器
  tr:
    image: linuxserver/transmission:4.0.5
    container_name: msgo-tr
    restart: always
    network_mode: host  # 使用 host 模式，可以使用 ipv6
    ports:
      - "${TR_PORT}:${TR_PORT}"  # 映射后，方便 Docker 外网访问
    volumes:
      - ${DOCKER_PATH}/msgo/common/hosts:/etc/hosts:ro
      - ${DOCKER_PATH}/msgo/tr/config:/config
      - ${DOCKER_PATH}/msgo/tr/watch:/watch
      - ${MEDIA_PATH}:/media
    environment:
      - PUID=${PUID}
      - PGID=${PGID}
      - TZ=Asia/Shanghai
      - PRCPROT=${TR_PORT}
      - TRANSMISSION_WEB_HOME=/config/theme/flood-for-transmission  # 使用 flood 主题

  # Emby 媒体服务器
  emby:
    image: amilys/embyserver:4.8.11.0  # 4.9 修改了数据库结构，4.8 不兼容
    container_name: msgo-emby
    restart: always
    #privileged: true   #开启神医助手需要特权模式
    network_mode: bridge  # DLNA 和 Wake-on-Lan 需要 bridge
    ports:
      - "${EMBY_PORT}:8096"  # 对外访问端口
    volumes:
      - ${DOCKER_PATH}/msgo/emby/config:/config
      - ${DOCKER_PATH}/msgo/emby/strm:/strm  # strm 目录，emby 添加到媒体库
      - ${MEDIA_PATH}:/media
    environment:
      - PUID=${PUID}
      - PGID=${PGID}
      - TZ=Asia/Shanghai
      - ALL_PROXY=http://${PROXY_IP}:${PROXY_PORT}
      - HTTP_PROXY=http://${PROXY_IP}:${PROXY_PORT}
      - NO_PROXY=172.17.0.1,127.0.0.1,localhost
    devices:
      - /dev/dri:/dev/dri  # 硬件解码（如有 GPU）
```

---

## 🛠️ 常用管理命令

### 添加当前用户到 Docker 组

```bash
sudo usermod -aG docker $USER
```

:::tip 💡 提示
这样输入 docker 命令时就不需要每次都加 sudo 了。退出当前会话，重新登录即可生效。
:::

### 启动全部服务

在 `msgo` 目录下执行：

```bash
docker compose up -d
```

### 停止全部服务

```bash
docker compose down
```

### 查看日志

查看特定服务日志（以 Media Saber 为例）：

```bash
docker compose logs server
```

### 持续输出最后 10 条日志

```bash
docker compose logs server -f --tail 10
```

:::tip 💡 说明
`server` 是 YAML 中定义的服务名称，也可改为 `redis`、`pgsql`、`qb`、`tr`、`emby` 等。
:::

---

## 📌 相关文档

- [环境变量详细说明](/guide/install/env) - 了解各环境变量的含义
- [Docker 基础安装](/guide/install/) - 查看其他安装方式
- [系统初始化](/guide/init/) - 完成安装后的初始化配置
- [常见问题](/guide/problem) - 遇到问题时查看
