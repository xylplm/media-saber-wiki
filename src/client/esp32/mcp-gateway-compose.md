---
title: MCP 网关 Compose 部署
article: false
order: 8
tags:
  - ESP32-S3
  - MCP
  - Docker Compose
  - Media Saber
---

# MCP 网关 Compose 部署

本页演示如何用 Docker Compose 部署 [MCP Proxy Gateway](https://github.com/xylplm/mcp-proxy-gateway)，并复用 Media Saber 已有的 PostgreSQL 与 Redis。

::: tip 适合谁？

- 已经用 Docker Compose 部署 Media Saber。
- 已经有可用的 PostgreSQL 和 Redis。
- 希望把 MS 相关 MCP 能力统一接入小智 AI。

:::

## 🧭 部署思路

MCP Proxy Gateway 本身是一个独立服务，但运行需要 PostgreSQL 和 Redis：

```mermaid
flowchart LR
  Gateway[MCP Proxy Gateway] --> PG[(Media Saber PostgreSQL)]
  Gateway --> Redis[(Media Saber Redis)]
  Gateway --> XiaoZhi[小智 MCP 接入点]
```

如果你已经部署了 Media Saber，可以直接在现有 PostgreSQL 中创建一个单独数据库和用户给 MCP 网关使用，Redis 也可以复用 MS 的 Redis。

::: warning 不建议共用同一个数据库名

建议给 MCP Proxy Gateway 单独创建数据库和数据库用户，不要直接使用 Media Saber 的业务数据库名，方便备份、迁移和排查问题。

:::

## 1. 在 MS PostgreSQL 中创建数据库和用户

先进入 PostgreSQL 容器。容器名请按你的实际部署修改，常见可能是 `pgsql`、`postgres`、`msgo-pgsql` 等。

```bash
docker exec -it pgsql bash
```

进入容器后连接数据库。下面的 `pgadmin` 是示例超管用户名，请替换成你实际的 PostgreSQL 管理员用户。

```bash
psql -U pgadmin
```

如果你的 PostgreSQL 超管用户是 `postgres`，则使用：

```bash
psql -U postgres
```

连接成功后，执行下面 SQL 创建 MCP 网关专用用户和数据库：

```sql
create user mcp_gateway_user with login password 'BBAAERslj8gCTPg1';
create database mcp_gateway owner mcp_gateway_user;
```

退出 psql：

```sql
\q
```

退出容器：

```bash
exit
```

::: warning 密码请自行修改

`BBAAERslj8gCTPg1` 只是示例密码。正式使用时请改成你自己的强密码，并同步修改 Compose 中的连接串。

:::

## 2. 确认 PostgreSQL 和 Redis 访问地址

如果 MCP Proxy Gateway 和 Media Saber 放在同一个 Docker Compose 网络里，可以直接使用服务名访问：

| 服务 | 示例地址 |
|---|---|
| PostgreSQL | `pgsql:5432` 或 `postgres:5432` |
| Redis | `redis:6379` |

如果 MCP Proxy Gateway 单独放在另一个 Compose 文件或另一台机器上，则需要使用宿主机 IP 和映射端口，例如：

| 服务 | 示例地址 |
|---|---|
| PostgreSQL | `192.168.1.10:15432` |
| Redis | `192.168.1.10:16379` |

## 3. 编写 MCP Gateway Compose

新建目录，例如：

```bash
mkdir -p /volume1/docker/mcp-gateway
cd /volume1/docker/mcp-gateway
```

创建 `docker-compose.yml`：

```yaml
services:
  mcp-proxy-gateway:
    image: xylplm/mcp-proxy-gateway:latest
    container_name: mcp-proxy-gateway
    restart: unless-stopped
    ports:
      - "8088:8080"
    environment:
      MPG_PG_DSN: "postgres://mcp_gateway_user:BBAAERslj8gCTPg1@pgsql:5432/mcp_gateway?sslmode=disable"
      MPG_REDIS_ADDR: "redis:6379"
      MPG_REDIS_PASSWORD: ""
      MPG_DATA_DIR: "/data"
    volumes:
      - ./data:/data
```

### 数据库连接串怎么看？

上面的 `MPG_PG_DSN` 是 PostgreSQL 连接串，格式如下：

```text
postgres://用户名:密码@数据库地址:端口/数据库名?sslmode=disable
```

以示例为例：

```text
postgres://mcp_gateway_user:BBAAERslj8gCTPg1@pgsql:5432/mcp_gateway?sslmode=disable
```

对应含义：

| 片段 | 示例值 | 说明 |
|---|---|---|
| `postgres://` | 固定写法 | 表示连接 PostgreSQL 数据库 |
| 用户名 | `mcp_gateway_user` | 第 1 步创建的数据库用户 |
| 密码 | `BBAAERslj8gCTPg1` | 第 1 步设置的数据库密码，正式使用请换成自己的强密码 |
| 数据库地址 | `pgsql` | PostgreSQL 容器服务名；如果不在同一网络，改成 NAS 或服务器 IP |
| 端口 | `5432` | PostgreSQL 容器内端口；如果走宿主机映射端口，改成实际映射端口 |
| 数据库名 | `mcp_gateway` | 第 1 步创建的数据库名 |
| `sslmode=disable` | 固定参数 | Docker 内网或局域网连接通常不启用 SSL |

如果你的 PostgreSQL 容器名叫 `postgres`，连接串就改成：

```yaml
MPG_PG_DSN: "postgres://mcp_gateway_user:你的数据库密码@postgres:5432/mcp_gateway?sslmode=disable"
```

如果 MCP Gateway 不在同一个 Docker 网络，需要用 NAS IP 和映射端口，例如：

```yaml
MPG_PG_DSN: "postgres://mcp_gateway_user:你的数据库密码@192.168.1.10:15432/mcp_gateway?sslmode=disable"
```

然后启动：

```bash
docker compose up -d
```

浏览器打开：

```text
http://你的NAS地址:8088
```

首次访问会进入管理员注册页，注册后即可登录管理界面。

## 4. 如果 Redis 有密码

如果你的 Media Saber Redis 设置了密码，需要填写 `MPG_REDIS_PASSWORD`：

```yaml
environment:
  MPG_REDIS_ADDR: "redis:6379"
  MPG_REDIS_PASSWORD: "你的Redis密码"
```

## 5. 如果不在同一个 Docker 网络

如果 MCP 网关无法通过 `pgsql`、`redis` 这样的服务名访问 MS 的 PostgreSQL / Redis，就改成宿主机 IP 和映射端口：

```yaml
environment:
  MPG_PG_DSN: "postgres://mcp_gateway_user:BBAAERslj8gCTPg1@192.168.1.10:15432/mcp_gateway?sslmode=disable"
  MPG_REDIS_ADDR: "192.168.1.10:16379"
  MPG_REDIS_PASSWORD: "你的Redis密码"
```

::: tip 怎么判断能不能用服务名？

如果 MCP Gateway 和 MS 写在同一个 `docker-compose.yml`，或显式加入同一个 Docker network，通常可以用服务名。如果是两个完全独立的 Compose 项目，通常需要使用宿主机 IP + 映射端口，或者手动把它们加入同一个外部网络。

:::

## 6. 可选：独立部署 PostgreSQL 和 Redis

如果你不想复用 MS 的 PostgreSQL / Redis，也可以单独给 MCP Gateway 起一套：

```yaml
services:
  mcp-proxy-gateway:
    image: xylplm/mcp-proxy-gateway:latest
    container_name: mcp-proxy-gateway
    restart: unless-stopped
    ports:
      - "8088:8080"
    environment:
      MPG_PG_DSN: "postgres://mpg:mpg_password@postgres:5432/mpg?sslmode=disable"
      MPG_REDIS_ADDR: "redis:6379"
      MPG_REDIS_PASSWORD: ""
      MPG_DATA_DIR: "/data"
    volumes:
      - ./data:/data
    depends_on:
      - postgres
      - redis

  postgres:
    image: postgres:17-alpine
    container_name: mcp-gateway-postgres
    restart: unless-stopped
    environment:
      POSTGRES_USER: mpg
      POSTGRES_PASSWORD: mpg_password
      POSTGRES_DB: mpg
    volumes:
      - ./pgsql:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    container_name: mcp-gateway-redis
    restart: unless-stopped
    volumes:
      - ./redis:/data
```

## 7. 下一步

部署完成并登录 MCP Proxy Gateway 后，继续阅读：[小智 MCP 对接 MS](./xiaozhi-mcp.md)，把小智控制台生成的 MCP 接入点填入网关。
