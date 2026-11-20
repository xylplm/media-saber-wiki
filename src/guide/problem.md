---
title: 常见问题
order: 1
article: false
date: 2023-06-28T05:11:48.294Z
tags:
categories: 
  - 快速上手
  - 开始
editor: markdown
dateCreated: 2023-05-12T04:26:30.172Z
---

:::info 💡 提示
本文档整理了用户在使用 Media Saber 过程中的常见问题和解决方案。遇到问题时，可以先在这里查找答案。
:::

## 🚀 初始化和部署

### 如何正确安装和启动 Media Saber？

前往 [安装教程](/guide/init/)，根据你的平台（极空间、群晖、UGOS 等）选择对应的安装方案。

**安装完成后如无法正常工作，请查看下面的其他常见问题。**

### Docker 容器内存占用过高？

**解决方案：**

1. **检查内存使用**
   ```bash
   docker stats
   ```

2. **优化应用配置**
   - 减少同时运行的任务数量
   - 调整定时任务的执行频率
   - 减少日志输出级别

3. **清理无用数据**
   - 删除已完成的下载任务
   - 清理日志文件：容器内的 `/app/logs/`
   - 优化数据库：定期备份和清理数据库

4. **资源限制**
   ```yaml
   services:
     media-saber:
       mem_limit: 2g
       memswap_limit: 2g
   ```

---

## 🌐 网络和访问

### 站点无法连通（无法访问站点）？

**症状：** 测试站点连通性失败，显示连接超时或无法连接

**排查步骤：**

1. **检查基础网络**
   ```bash
   # 从容器内测试
   docker exec media-saber ping www.baidu.com
   docker exec media-saber curl -I https://站点域名
   ```

2. **检查站点配置**
   - 域名是否正确？可尝试在浏览器中直接访问
   - 是否需要代理才能访问？
   - 是否被站点 IP 限制/封禁？

3. **代理配置**
   - ✅ 已配置代理：确保代理服务器地址正确且可用
   - ❌ 未配置代理：在 [基础设置](/usage/system_settings/basic_settings) 中配置代理
   - 测试代理：`curl -x 代理地址 https://站点域名`

4. **Cookie 和认证**
   - 检查 Cookie 是否过期（登出后重新获取）
   - 某些站点需要特殊请求头，参考 [站点维护](/usage/site_management/site)

5. **DNS 问题**
   - 尝试修改 DNS：`8.8.8.8` 或 `1.1.1.1`
   - 或在站点维护中手动填写 IP 地址而非域名

**如果仍无法解决：**
- 检查站点是否在维护中
- 查看 Media Saber 日志：`docker logs media-saber`
- 尝试使用其他网络环境测试

### 如何配置代理服务器？

**步骤：**

1. 进入 [基础设置](/usage/system_settings/basic_settings#代理服务器)
2. 填写代理地址，格式为：`http://ip:port` 或 `http://username:password@ip:port`
3. 点击「测试」验证代理连接
4. 保存配置

**代理类型支持：**
- HTTP/HTTPS 代理 ✅
- SOCKS5 代理 ✅
- 需要认证的代理 ✅

**验证代理是否生效：**
- 在站点维护中启用该站点的「代理」开关
- 查看站点卡片是否显示 🔒 VPN 标签

### 如何解决国内无法访问某些站点的问题？

**常见原因：**
- 站点被墙
- ISP 限制
- 站点 IP 被限制

**解决方案：**

1. **使用代理**（推荐）
   - 配置 HTTP/HTTPS 或 SOCKS5 代理
   - 在站点维护中启用该站点的代理

2. **使用 VPN**
   - 某些 VPN 可以配置为 HTTP 代理

3. **更换 DNS**
   ```yaml
   environment:
     - DNS=8.8.8.8,1.1.1.1
   ```

4. **IP 变更**
   - 某些站点可在管理后台更新 IP 白名单
   - 或联系站点管理员

---

## 🔧 站点配置相关

### 为什么添加了站点但无法搜索和下载？

**99% 的情况：没有配置站点配置文件！**

**检查清单：**

- ❌ **站点配置文件**：必须先配置站点配置文件，否则系统无法识别站点
  - 前往 [站点配置指南](/guide/init/sites) 配置
  - 选择方式一（订阅）或方式二（手动添加）之一

- ❌ **站点是否启用**：检查站点列表中该站点的「启用」开关是否打开

- ❌ **搜索开关**：检查站点的「搜索」开关是否打开

- ❌ **过滤规则**：检查是否配置了过滤规则但种子不符合

**验证站点配置是否正确：**
```bash
# 进入容器检查配置文件
docker exec media-saber ls /app/config/data/site_config/sites/
```

### 站点配置订阅失败？

**可能原因：**

1. **网络问题**
   - 检查容器是否能访问配置文件 URL
   - 如需要代理，确保代理已配置

2. **配置文件 URL 格式错误**
   - 确保 URL 以 `.zip` 结尾（如果是 ZIP 文件）
   - 检查 URL 是否可以在浏览器中正常访问

3. **Cron 表达式错误**
   - 使用快速生成按钮，或参考 [Cron 规则文档](/usage/other/cron_rule)
   - 常见表达式：`0 9 * * *`（每天上午 9 点）

4. **配置文件内容错误**
   - 确保下载的配置文件是有效的 JSON/YAML
   - 尝试手动检查文件完整性

**解决步骤：**
```
1. 查看拉取日志（页面会显示错误信息）
2. 验证 URL 是否可访问
3. 检查网络和代理配置
4. 尝试手动添加站点（方式二）
```

### Cookie 过期或无效？

**症状：**
- 站点显示「需要登录」
- 数据统计无法正常工作
- 签到失败

**解决方案：**

1. **重新获取 Cookie**
   - 在浏览器中登出站点，然后重新登录
   - 打开浏览器 F12 → 应用/存储 → Cookie → 复制所有值
   - 或使用 [浏览器同步插件](/client/brower_tool/)

2. **更新站点 Cookie**
   - 进入站点列表 → 点击编辑
   - 更新 Cookie 字段 → 保存

3. **检查 Cookie 有效期**
   - 某些站点的 Cookie 有 30 天有效期
   - 定期更新 Cookie 避免失效

**自动同步 Cookie：**
- 安装浏览器同步插件
- 配置插件后可自动保持 Cookie 同步

### 自定义请求头配置错误？

**常见问题：**

- ❌ **格式错误**
  ```
  ✅ 正确：x-api-key:abc123
  ❌ 错误：x-api-key: abc123  （有空格）
  ❌ 错误：x-api-key=abc123   （用等号）
  ```

- ❌ **特殊站点漏配**
  - 馒头：需要 `x-api-key` 请求头
  - 飞天拉面：需要 `APITOKEN` 请求头
  - 朱雀：需要 `x-csrf-token` 请求头
  - Sunny：需要 `Authorization` 请求头

- ❌ **Token 过期或错误**
  - 确保从站点获取的 Token 仍然有效
  - 重新生成 Token 并更新

**参考详细配置：** [站点维护 - 自定义请求头](/usage/site_management/site#自定义请求头示例)

---

## 🎬 TMDB 相关

### 无法正常显示剧集信息和海报？

**症状：**
- 剧集名称显示为「第 X 季第 Y 集」
- 缺少剧集详细信息（导演、概述等）
- 海报显示不完整

**排查步骤：**

1. **检查 TMDB 连接**
   ```bash
   # 从容器内测试 TMDB 连通性
   docker exec media-saber curl -I https://api.themoviedb.org/3/
   ```

2. **检查 TMDB API Key**
   - 初始化配置时是否填写了 TMDB API Key？
   - 进入 [初始化配置](/guide/init/) 重新配置
   - 验证 API Key 是否正确且未过期
   - 📖 **如何申请 TMDB API Key？** 详见 [TMDB 配置指南](/guide/tmdb)

### TMDB 数据更新不及时？

**原因：**
- TMDB 数据库本身更新有延迟
- 本地缓存未刷新

**解决方案：**
- 在媒体详情页点击「刷新」手动更新
- 清除缓存后重新获取数据
- 等待 24 小时后 TMDB 数据库自动更新

### TMDB 匹配失败（找不到对应的 TMDB 条目）？

**症状：** 显示「TMDB 匹配失败」或「种子信息匹配失败」

**排查步骤：**

1. **检查种子名称是否正确**
   - 确认种子名称与实际作品名称相符
   - 尝试搜索更简洁的名称（删除清晰度、字幕等信息）
   - 在 [TMDB 网站](https://www.themoviedb.org/) 直接搜索验证作品是否存在

2. **检查目录分类配置**
   - 种子匹配失败可能是因为目录配置不正确
   - 前往 **分类和目录管理** 检查：
     - 该作品的分类是否配置？
     - 目录规则是否正确匹配？
   - 在 [TMDB 网站](https://www.themoviedb.org/) 验证该作品的正确分类

3. **TMDB 网站上验证信息**
   - 访问 TMDB 网站搜索该作品
   - 验证：
     - 作品是否存在？
     - 分类是否正确？
     - 季数和集数是否与种子匹配？

4. **常见匹配问题**
   - ❌ **翻译名称不匹配** → 使用英文原名或官方中文名
   - ❌ **季数/集数错误** → 检查种子是否标注错误
   - ❌ **作品不存在** → 某些不知名作品可能在 TMDB 中不存在
   - ❌ **目录规则冲突** → 检查分类和目录管理中的规则优先级

---

## 📚 豆瓣相关

### 豆瓣订阅和搜索无法正常工作？

**常见原因：**

1. **豆瓣 API 被限制**
   - 豆瓣对爬虫进行了限制
   - 某些功能可能需要特殊配置

2. **Cookie 过期**
   - 豆瓣 Cookie 有有效期限制
   - 定期更新 Cookie

3. **IP 被限制**
   - 频繁请求可能被豆瓣限流
   - 配置代理或降低请求频率

**解决方案：**
- 重新获取豆瓣 Cookie
- 在站点维护中更新豆瓣站点配置
- 启用代理并在豆瓣站点启用代理开关
- 配置流控规则避免过度请求

### 豆瓣海报和信息不显示？

**排查步骤：**

1. 确认豆瓣 Cookie 有效
2. 测试豆瓣站点连通性
3. 检查是否有过滤规则阻止了豆瓣结果
4. 清除缓存重新搜索

---

## 💾 数据和备份

### 如何备份和恢复数据？

**完整备份包括两部分：**

#### 1️⃣ 备份配置目录

```bash
# 备份整个配置目录到宿主机
docker cp media-saber:/app/config ./media-saber-config-backup-$(date +%Y%m%d)
```

**备份内容包括：**
- 站点配置和 Cookie
- 用户设置和偏好
- 下载历史和任务记录
- 所有自定义配置

#### 2️⃣ 备份数据库

**PostgreSQL 备份：**
```bash
# 进入容器并备份数据库
docker exec media-saber pg_dump -U postgres media_saber > media-saber-db-backup-$(date +%Y%m%d).sql
```

**备份内容包括：**
- 媒体库数据
- 订阅规则和历史
- 数据统计信息
- 所有数据库记录

#### 3️⃣ 完整备份脚本

**创建完整备份脚本**（可选但推荐）：

```bash
#!/bin/bash
BACKUP_DIR="/path/to/backup"
DATE=$(date +%Y%m%d_%H%M%S)

# 备份配置目录
docker cp media-saber:/app/config "$BACKUP_DIR/config_$DATE/"

# 备份数据库
docker exec media-saber pg_dump -U postgres media_saber > "$BACKUP_DIR/database_$DATE.sql"

echo "备份完成！"
```

---

### 如何恢复备份数据？

#### 恢复配置目录

**如果容器仍在运行：**
```bash
# 恢复配置目录
docker cp ./media-saber-config-backup-20240101 media-saber:/app/config
```

**如果需要完全重建：**
1. 停止旧容器：`docker-compose down`
2. 删除旧数据：`docker volume rm media-saber_config`
3. 启动新容器：`docker-compose up -d`
4. 恢复配置：`docker cp ./backup/config media-saber:/app/`

#### 恢复数据库

```bash
# 恢复 PostgreSQL 数据库
docker exec -i media-saber psql -U postgres -d media_saber < media-saber-db-backup-20240101.sql
```

:::warning ⚠️ 恢复前注意
- 恢复会覆盖现有数据
- 建议先备份当前数据再进行恢复
- 恢复后建议重启容器确保完全生效
:::

---

### 使用站点备份/恢复功能

系统内置的站点备份只能导出**站点配置**（Cookie、设置等），不包含媒体库数据。

**操作方式：**
- 进入站点列表 → 更多操作 → 备份站点
- 进入站点列表 → 更多操作 → 恢复站点

**注意：** 站点已存在时不会被覆盖，需要先删除再恢复

---

### PostgreSQL 日志频繁出现 collation version mismatch 警告？

日志中反复出现 `collation version mismatch` / `collation "..." has version mismatch` 类警告，是 PostgreSQL 底座镜像升级（glibc 版本变化）后产生的登记不一致，**不是程序故障**，数据可以正常读写。

消除警告（可选）：

```bash
# 让数据库重新登记当前 glibc 的 collation 版本，警告即消失
docker exec -it <postgres容器名> psql -U postgres -d ms -c "ALTER DATABASE ms REFRESH COLLATION VERSION;"
```

如需彻底求稳（旧 glibc 下生成的文本索引排序与新版本可能存在细微差异），可再重建一次全库索引，几十 MB 级别的库通常几秒完成：

```bash
docker exec -it <postgres容器名> psql -U postgres -d ms -c "REINDEX DATABASE ms;"
```

---

## 📥 下载相关

### 下载后文件无法正常移动/整理？

**常见原因：**

1. **下载路径和整理路径配置错误**
   - 检查 [基础设置](/usage/system_settings/basic_settings) 中的路径配置
   - 确保路径对容器内部程序可访问

2. **权限问题**
   ```bash
   # 检查目录权限
   docker exec media-saber ls -la /path/to/downloads
   ```

3. **磁盘空间不足**
   - 检查磁盘可用空间
   - 清理已完成的下载任务

**解决方案：**
- 确保下载路径和整理路径都在容器内部可访问
- 检查目录权限（通常需要 755 或 777）
- 设置正确的文件转移策略

---

## 🔍 搜索和订阅

### 搜索无结果或结果很少？

**检查清单：**

1. ✅ 是否配置了站点配置文件？
2. ✅ 搜索的站点是否启用了「搜索」开关？
3. ✅ 是否配置了过滤规则导致结果被过滤？
4. ✅ 搜索关键词是否太特殊？

**优化搜索：**
- 尝试更通用的搜索关键词
- 增加参与搜索的站点数量
- 检查站点是否有搜索结果（手动在浏览器测试）

### RSS 订阅无法自动抓取？

**排查步骤：**

1. **测试 RSS 连通性**
   - 在站点列表中点击「RSS 测试」
   - 检查 RSS 地址是否正确配置

2. **检查 RSS 开关**
   - 站点的「RSS」开关是否打开？

3. **检查订阅规则**
   - 订阅规则是否匹配 RSS 内容？
   - 过滤规则是否阻止了 RSS 结果？

4. **检查签到状态**
   - 某些站点需要先签到才能使用 RSS
   - 确保站点已成功签到

---

## ⚙️ 性能和优化

### 系统运行速度缓慢？

**优化方案：**

1. **数据库优化**
   - 定期清理日志和临时数据
   - 优化数据库索引

2. **内存管理**
   - 限制同时运行的任务数量
   - 定期重启容器清理内存

3. **资源分配**
   - 增加 CPU 和内存限制
   ```yaml
   cpus: '2'
   mem_limit: 4g
   ```

4. **日志管理**
   - 限制日志文件大小
   - 定期清理旧日志

---

## 🆘 获取帮助

### 如何查看日志排查问题？

```bash
# 查看实时日志
docker logs -f media-saber

# 查看特定容器的日志
docker logs --tail 100 media-saber

# 进入容器查看应用日志
docker exec media-saber tail -f /app/logs/application.log
```

### 提交问题报告时需要提供什么信息？

提交前请准备以下信息：

- 📋 Media Saber 版本号
- 🖥️ 运行环境（Docker、服务器系统等）
- 📝 详细的错误信息和日志
- 🔄 问题复现步骤
- 📸 相关截图

### 常见资源和文档

- 📖 [完整使用文档](/usage/main_page/)
- 🚀 [安装指南](/guide/init/)
- 🔌 [周边工具和插件](/usage/other/)
- 💬 [社区讨论](https://github.com/mantou568/media-saber)