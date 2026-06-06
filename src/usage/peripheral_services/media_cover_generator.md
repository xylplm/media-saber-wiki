---
title: 媒体封面生成 API 服务
article: false
tags:
  - 周边服务
  - 第三方服务
  - 媒体封面
categories:
editor: markdown
date: 2026-06-06 12:00:00
---

# 🎨 媒体封面生成 API 服务

> 专为媒体库自动生成美观封面图片的 Docker 服务，支持多种样式，开箱即用。主要服务于 Media Saber，其他工具也可以通过 API 调用使用。
>
> 修仙秘籍中的 [媒体库封面生成](/usage/cultivation_secrets/media_cover_generator.html) 正是通过调用本服务来工作的，**使用该秘籍前需先部署本服务**。

---

## ✨ 主要特性

- 🚀 **零配置启动**：拉取镜像即可运行，无需任何配置
- 🎨 **多种样式**：单图样式 1、单图样式 2、多图样式 1、多图样式 2、多图样式 3
- 🖼️ **智能缓存**：自动缓存图片和字体，提升生成速度
- 🐳 **Docker 部署**：仅需 Docker，无需安装其他依赖
- ⚙️ **灵活配置**：支持环境变量和配置文件自定义

---

## 🚀 快速开始

**镜像地址：**
```
https://hub.docker.com/r/xylplm/media-saber-media-cover-generator
```

### 方式一：Docker Compose 部署（推荐）

创建 `docker-compose.yml` 文件：

```yaml
version: '3.8'
services:
  media-cover:
    image: xylplm/media-saber-media-cover-generator:latest
    ports:
      - "9897:9897"
    volumes:
      - ./config:/app/config
    environment:
      - TZ=Asia/Shanghai
    restart: unless-stopped
```

启动服务：

```bash
docker-compose up -d
```

### 方式二：Docker 命令行部署

```bash
docker run -d \
  --name media-saber-media-cover-generator \
  -p 9897:9897 \
  -v ./config:/app/config \
  -e TZ=Asia/Shanghai \
  --restart=unless-stopped \
  xylplm/media-saber-media-cover-generator:latest
```

### 验证服务

访问 `http://localhost:9897/health` 检查服务状态，返回正常即表示部署成功。

---

## ⚙️ 配置说明

### 🎯 零配置启动

**默认情况下，服务无需任何配置即可启动使用**，所有配置项都有合理的默认值。只有在需要自定义时才创建 `config/config.yaml`。

配置分为两类，**互相独立**，各有默认值：

- **环境配置**（通过环境变量）：控制服务器运行环境，如端口、日志、缓存等
- **业务配置**（通过配置文件）：控制业务逻辑，如字体、图片、模板等

### 📋 环境变量

| 环境变量 | 说明 | 默认值 |
|---------|------|--------|
| `PORT` | 服务端口 | `9897` |
| `HOST` | 服务主机 | `0.0.0.0` |
| `READ_TIMEOUT` | 读取超时(秒) | `30` |
| `WRITE_TIMEOUT` | 写入超时(秒) | `300`（5 分钟） |
| `IDLE_TIMEOUT` | 空闲超时(秒) | `120`（2 分钟） |
| `CONFIG_DIR` | 配置目录 | `./config` |
| `CACHE_MAX_SIZE` | 最大缓存大小(字节) | `1073741824`（1GB） |
| `CACHE_TTL` | 缓存过期时间(小时) | `24` |
| `LOG_LEVEL` | 日志级别 | `info` |
| `LOG_FORMAT` | 日志格式 | `json` |
| `LOG_OUTPUT` | 日志输出 | `stdout` |

### 📝 业务配置示例

业务配置在 `config/config.yaml` 中维护。启动时会自动复制 `config.example.yaml` 到 `config/` 目录作为参考，**只需配置要自定义的部分**，未配置项自动使用默认值。

**自定义输出尺寸：**

```yaml
template:
  output_width: 3840
  output_height: 2160
```

**使用自定义字体：**

1. 将字体文件放到宿主机 `./config/fonts/` 目录
2. 在 `config/config.yaml` 中配置容器内路径：

```yaml
font:
  chinese:
    local_path: "/app/config/fonts/my-font.ttf"   # 容器内路径
  english:
    local_path: "/app/config/fonts/my-en-font.ttf"
```

> 路径映射：宿主机 `./config/fonts/my-font.ttf` 对应容器内 `/app/config/fonts/my-font.ttf`（Docker 挂载会自动映射 `./config` → `/app/config`）。若自定义字体加载失败，服务会自动降级使用预制字体，不影响正常运行。

**媒体库到模板的映射：**

```yaml
template:
  library_mappings:
    "电影": "single_1"
    "电视剧": "multi_1"
    "动漫": "multi_2"
```

---

## 🖼️ 模板样式说明

| 模板 ID | 名称 | 布局 | 适用场景 |
|---------|------|------|----------|
| `single_1` | 单图样式 1 | 经典单图布局，突出主标题 | 电影、纪录片 |
| `single_2` | 单图样式 2 | 现代单图布局，标题居中 | 电影、动漫 |
| `multi_1` | 多图样式 1 | 3 图横向排列 | 电视剧、综艺 |
| `multi_2` | 多图样式 2 | 2+1 图混合布局 | 电视剧、动漫 |
| `multi_3` | 多图样式 3 | 5 图横向阶梯布局 | 电视剧、综艺、动漫 |

---

## 📡 API 接口说明

**主要接口：**
- `GET /health` - 健康检查
- `GET /api/templates` - 获取模板列表
- `POST /api/generate-cover` - 生成封面

### 生成封面请求示例

```bash
curl -X POST http://localhost:9897/api/generate-cover \
  -H "Content-Type: application/json" \
  -d '{
    "library": {
      "name": "电影",
      "titleZh": "示例电影",
      "titleEn": "Sample Movie"
    },
    "images": [
      {
        "url": "https://example.com/poster.jpg",
        "type": "poster"
      }
    ],
    "templateId": "single_1",
    "lowPerformanceMode": false
  }' \
  --output cover.jpg
```

### 请求参数说明

**`library` 对象（必填）：**
- `name`：媒体库名称，如电影、电视剧、动漫
- `titleZh`：中文标题
- `titleEn`：英文标题

**`images` 数组（必填）：**
- 至少 1 张，建议最多 5 张
- 每张图片包含 `url`（图片网络地址）和 `type`（`poster` 海报 / `backdrop` 背景图 / `logo` 标志，默认 `poster`）

**其他参数（可选）：**
- `templateId`：指定模板 ID（`single_1`、`single_2`、`multi_1`、`multi_2`、`multi_3`），不指定时使用默认模板
- `userAgent`：自定义 User-Agent
- `lowPerformanceMode`：低性能模式开关（默认 `false`），启用时降低并发与资源占用

---

## 🔧 常见问题

| 问题 | 解决方案 |
|------|----------|
| 如何更改服务端口？ | 设置环境变量 `PORT`，并映射对应端口 |
| 需要配置文件吗？ | 不需要，所有配置都有默认值，可零配置启动 |
| 如何查看日志？ | `docker logs media-saber-media-cover-generator` |
| 服务占用多少空间？ | 镜像约 100-200MB，缓存默认上限 1GB，建议预留 2-5GB |
| 如何清理缓存？ | 删除 `./config/cache/*`，或调整 `CACHE_TTL` 缩短过期时间 |

---

## 🔗 配置 Media Saber

部署完成后，前往修仙秘籍的 [媒体库封面生成](/usage/cultivation_secrets/media_cover_generator.html) 秘籍，在 **API服务地址** 中填写：

```
http://127.0.0.1:9897
```

> 注意：将 `127.0.0.1` 替换为你的实际 IP 地址。

---

## 📖 相关文档

- [媒体库封面生成（修仙秘籍）](/usage/cultivation_secrets/media_cover_generator.html) - 调用本服务的秘籍
- [周边服务](/usage/peripheral_services/) - 更多周边与第三方服务
- [媒体服务](/usage/media_services/) - Emby / Jellyfin 等媒体服务器配置

---
