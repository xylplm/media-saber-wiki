---
title: 字幕来源配置教程
article: false
order: 37
tags:
  - 字幕来源
  - OpenSubtitles
  - Assrt
  - SubDL
  - SubHD
  - 字幕库
  - Cookie
categories:
editor: markdown
date: 2026-07-16 00:00:00
---

# 🧩 字幕来源配置教程

本文说明字幕中心里每个来源要怎么配置、从哪里申请凭据、Cookie 如何获取，以及推荐使用方式。

配置入口：

1. 打开 **媒体服务 → 字幕中心 → 设置**
2. 点击对应来源卡片
3. 填写后先 **保存**，再点 **测试**

> 💡 **测试按钮测的是已保存配置**。改完 API Key / 账号 / Cookie 后，务必先保存再测试。

## 来源总览

| 来源 | 类型 | 需要配置 | 自动采用建议 | 备注 |
| --- | --- | --- | --- | --- |
| OpenSubtitles | 官方 API | API Key + 用户名 + 密码 | 可开启 | 国际源，TMDB/IMDb 召回稳 |
| Assrt | 官方 API | 访问令牌 | 可开启 | 中文剧集召回好 |
| SubDL | 官方 API | API Key | 可开启 | IMDb/TMDB 精确搜索 |
| 射手影音 | 哈希匹配 | 无需凭据 | 可开启 | 仅本地可读媒体 |
| 迅雷看看 | 官方 oracle 接口 | 无需凭据 | 可开启 | 标题检索 + CID 校验 |
| SubHD | 网页源 | 可选 Cookie / 代理 / 过盾 | 建议先关闭 | 默认人工确认更稳 |
| 字幕库 | 网页源 | 可选域名 / Cookie / 代理 / 过盾 | 建议先关闭 | 站点可能换域名 |

---

## 1. OpenSubtitles {#opensubtitles}

### 需要什么

- **API Key**
- **用户名**
- **密码**

> ⚠️ 用户名请使用 OpenSubtitles 站内用户名。部分账号邮箱登录可以，但用户名更稳妥；配置页不要把邮箱当唯一凭据习惯。

### 申请步骤

1. 打开 [OpenSubtitles 注册/登录](https://www.opensubtitles.com/zh/users/sign_up)
2. 登录后进入 [Consumers / API 申请页](https://www.opensubtitles.com/zh/consumers)
3. 创建一个应用，拿到 **API Key**
4. 应用名称建议与请求 UA 保持一致，当前系统 UA 为：`MediaSaber/1.0 subtitle integration`
5. 回到字幕中心填写：
   - API 密钥
   - 账号
   - 密码
6. 如在国内网络不稳定，可开启 **使用系统代理**
7. 保存后点测试

### 使用说明

- 搜索：`TMDB ID → 标题 → IMDb ID`
- 剧集会走 `parent_tmdb_id / parent_imdb_id + season/episode`
- 下载需要登录 token；连通性测试会真正调用登录接口

### 常见问题

| 现象 | 处理 |
| --- | --- |
| 认证失败 | 检查 API Key、用户名、密码；确认可访问 `api.opensubtitles.com` |
| 超时 | 开启系统代理，或检查本机出口网络 |
| 搜索有结果但下载失败 | 账号下载配额不足，或网络中断 |

---

## 2. Assrt（伪射手 / assrt.net） {#assrt}

### 需要什么

- **访问令牌（Token）**

### 申请步骤

1. 打开 [Assrt 官网](https://assrt.net/)
2. 注册并登录
3. 进入用户中心 / API 相关页面，获取 32 位 Token
4. 回到字幕中心填写 **访问令牌**
5. 保存后测试

> 官方 API 根地址为 `https://api.assrt.net`。系统会用 `Authorization: Bearer <token>` 访问。

### 使用说明

- 按标题关键词搜索，适合中文剧集
- 下载后会自动解包 zip/rar/7z，并按语言/格式择优

### 常见问题

| 现象 | 处理 |
| --- | --- |
| Token 无效 | 重新复制令牌，避免首尾空格 |
| 限流 | 稍后再试，系统会自动冷却 |
| 下载被拦 | 检查代理与站点可达性 |

---

## 3. SubDL {#subdl}

### 需要什么

- **API Key**

### 申请步骤

1. 打开 [SubDL 官网](https://subdl.com/)
2. 注册并登录
3. 在账户 / API 页面生成 API Key
4. 回到字幕中心填写 **API 密钥**
5. 保存后测试

### 使用说明

- 优先 IMDb / TMDB 精确搜索，无果再按标题
- 语言参数会按策略映射（例如简体优先使用 `zh-BG`）
- 下载走 `dl.subdl.com` 直链，系统会校验域名，防止异常外链

---

## 4. 射手影音 {#shooter}

### 需要什么

- 无需账号
- 需要 **本地可读** 的媒体文件

### 工作方式

1. 计算媒体文件四段 MD5 指纹
2. 请求 `https://www.shooter.cn/api/subapi.php`
3. 按哈希返回候选，下载 URL 只在服务端短引用保存

### 注意

- 网盘路径、STRM、路径不可达时不会计算哈希
- 更适合本地磁盘 / 已挂载可读路径

---

## 5. 迅雷看看 {#thunder}

### 需要什么

- 无需账号

### 工作方式

1. 用标题（及季集信息）查询官方接口  
   `https://api-shoulei-ssl.xunlei.com/oracle/subtitle`
2. 如本地可读，再计算 CID 做哈希校验
3. 下载域名会限制在迅雷相关 CDN 白名单

### 注意

- 旧 XMP 接口 `sub.xmp.sandai.net:8000` 已不可用，系统已切换新接口
- 语言会按媒体库策略过滤，不只认“简体”关键词

---

## 6. SubHD {#subhd}

### 需要什么

- 默认无需强制登录
- 遇到访问限制时建议配置 **Cookie**
- 可选：系统代理、Cloudflare 自动过盾
- **候选自动写入** 建议先关闭观察

### 推荐配置

1. 来源域名保持默认 `https://subhd.tv`
2. 若搜索/下载失败，点 **一键获取 Cookie**
3. 按需开启：
   - 使用系统代理
   - 遇到 Cloudflare 时自动过盾
4. 保存后测试

### Cookie 获取

#### 方法一：字幕中心一键获取（推荐）

1. 安装并连接 Media Saber 浏览器扩展
2. 在来源配置中确认域名正确
3. 点击 **一键获取 Cookie**
4. 浏览器打开站点并完成登录 / 人机验证
5. 回到弹窗确认 Cookie 已写入，再保存

#### 方法二：浏览器开发者工具

1. 用桌面浏览器打开 [SubHD](https://subhd.tv/)
2. 登录并确保可正常搜索
3. 按 `F12` 打开开发者工具
4. 切到 **Network / 网络**
5. 刷新页面，选中任一文档请求
6. 在请求头里复制 `Cookie`
7. 粘贴到字幕中心 Cookie 输入框并保存

> 🍪 Cookie 只用于当前字幕源，不会影响其他来源或媒体入库。

---

## 7. 字幕库 {#zimuku}

### 需要什么

- 默认域名 `https://zmk.pw`
- 站点换域时可改 **来源域名**
- 访问限制时配置 Cookie
- 可选代理 / 过盾
- 自动写入建议先关闭

### 推荐配置

1. 域名先用默认值；若官方更换主域，再改成新域名（需 `http://` 或 `https://`）
2. 搜索异常时用一键获取 Cookie
3. 站点有 Cloudflare 时开启过盾
4. 保存后测试

Cookie 获取方式与 SubHD 相同，只是站点换成字幕库域名。

---

## 代理与过盾建议

| 场景 | 建议 |
| --- | --- |
| OpenSubtitles / SubDL 超时 | 开启“使用系统代理”，先在系统设置配好代理 |
| SubHD / 字幕库被盾 | 开启过盾；必要时补 Cookie |
| 只是国内网页源慢 | 通常不必开代理 |
| 代理未配置却打开了开关 | 测试会失败，请先配系统代理 |

系统代理支持 HTTP / HTTPS / SOCKS5 / SOCKS5H。

---

## 测试与排障清单

1. 先保存，再测试
2. 看前端错误文案：认证失败 / 超时 / 限流 / 配额
3. 看后端日志中的具体来源名和底层错误
4. 网页源优先检查 Cookie、域名、过盾
5. 哈希源优先检查媒体路径是否本地可读

## 安全注意

- API Key、Token、密码、Cookie 都属于敏感信息，不要发到公开群
- Cookie 过期后重新获取即可
- 网页源失败不会阻塞其他字幕源和入库流程

## 相关文档

- [字幕中心](/usage/media_services/subtitle_center.html)
- [媒体健康中心](/usage/media_services/media_health.html)
- [媒体服务器](/usage/media_services/server.html)
- [极空间 Cookie 教程](/usage/other/zspace_cookie.html)（通用浏览器 Cookie 思路可参考）
