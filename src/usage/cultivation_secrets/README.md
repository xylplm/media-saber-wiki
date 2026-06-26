---
title: 介绍
article: false
dir:
  text: 修仙秘籍
  order: 120
tags: 
  - 修仙秘籍
  - 插件系统
  - 插件管理
categories: 
editor: markdown
date: 2023-09-27 12:16:17
---

# 🧙‍♂️ 修仙秘籍

**修仙秘籍** 是 Media Saber 的插件扩展系统。通过「秘术宝阁」浏览和启灵插件，在「修仙秘籍」管理已有实例，满足签到、下载、云存储、NAS 监控等各类自动化需求。

## 📋 两大入口

| 入口 | 说明 |
|------|------|
| **修仙秘籍** | 已启灵的插件实例列表。支持拖拽排序（天序）、搜索过滤、封印/解封、重命名、归墟（删除）、查看日志 |
| **秘术宝阁** | 插件市场。包含万灵阁（全部插件）、梦萦阁（我的收藏）、风云榜（弟子榜 / 新晋榜）三个 Tab |

## 🚀 快速开始

### 1. 进入秘术宝阁

点击「修仙秘籍」页面右上角的 **秘术宝阁** 按钮，进入插件市场。

### 2. 找到想要的插件

- 在万灵阁 Tab 顶部使用 **灵识搜术**（搜索框）按名称/编码/造物主搜索
- 使用 **秘术流派** chip 栏按分类筛选（媒体管理、下载管理、云存储、网络工具、系统工具、NAS 服务助手、签到工具、订阅管理）
- 切换到 **风云榜** 查看弟子榜（按安装量排序）或新晋榜（按上架时间排序）

### 3. 查看插件详情（秘术鉴）

点击任意插件卡片，弹出 **秘术鉴** 详情弹窗：

- 顶部 Hero 区：插件图标、名称、造物主、流派、版本号
- 关键数据：弟子数（总安装量）、已启灵数（你的实例数）、最近更新时间
- 圣言录：插件功能描述
- 秘术心法：文档外链（如有）
- 操作按钮：启灵 / 前往配置 / 分神 + 梦萦/断缘

### 4. 启灵插件

- 点击秘术鉴右上角的 **启灵** 按钮
- 在弹出的命名框中输入实例名称（默认为插件名）
- 确认后实例创建成功，可选择「立即配置」跳转到配置页

### 5. 配置插件

在「修仙秘籍」页面点击对应实例卡片，进入配置弹窗：

- 设置定时任务（Cron 表达式）
- 填写插件所需的参数（如站点账号、目录路径等）
- 保存后插件按计划自动运行

## 🎯 心头好

「修仙秘籍」页面顶部的 **心头好** 区域展示你最近使用的 6 个插件实例，方便快速进入常用配置。

- 每次打开插件配置弹窗后自动更新
- 无需手动设置，系统根据使用频率自动排列

## 🔄 天序（拖拽排序）

在「修仙秘籍」全部列表中，可以通过拖拽调整插件实例的显示顺序：

- **PC / 平板**：鼠标悬停卡片后出现拖拽手柄，按住手柄拖动
- **手机**：长按 300ms 后进入拖拽模式
- 排序结果自动保存到服务端，跨设备同步

> 搜索或状态过滤激活时，拖拽功能自动禁用（避免对子集排序导致数据错乱）。

## 🔍 灵识搜术（搜索与过滤）

### 修仙秘籍页

- 搜索框：按实例名称、插件名称、插件编码搜索
- 状态过滤：全部 / 仅启灵 / 仅封印

### 秘术宝阁（万灵阁 Tab）

- 搜索框：按插件名称、编码、造物主、描述搜索
- 秘术流派 chip 栏：按分类筛选

## ⭐ 梦萦阁（收藏）

- 在万灵阁或秘术鉴中点击星形图标 **梦萦**（收藏）插件
- 切换到梦萦阁 Tab 查看所有已收藏插件
- 点击 **断缘** 取消收藏

## 🏆 风云榜

- **弟子榜**：按累计安装量（弟子数）倒序排列的 Top 30
- **新晋榜**：按首发时间倒序排列的 Top 30，发现最新上架的插件

## 📦 插件状态说明

| 状态 | 含义 | 操作 |
|------|------|------|
| 已启灵 | 实例正常运行中 | 可封印、重命名、归墟 |
| 已封印 | 实例保留但功能暂停 | 可解封恢复运行 |
| 归墟 | 彻底删除实例及配置 | 不可恢复 |

## 🔧 分神术（多实例）

插件分为两种模式：

- **无天赋**（单例）：只能启灵一个实例，如「自动备份」「系统进程」
- **领悟分神术**（多实例）：可创建多个独立实例，如「刷流」「签到」「转种」

多实例插件在秘术鉴中会显示「已有秘籍」列表和「分神」按钮，每个分神实例独立配置、独立运行。

## 📂 插件分类一览

### 📺 媒体管理

| 插件 | 说明 |
|------|------|
| [追剧提醒](/usage/cultivation_secrets/binge_watch.html) | 订阅的电视剧更新时通知提醒 |
| [短剧刮削](/usage/cultivation_secrets/short_play_monitor.html) | 监控短剧目录，自动刮削和整理 |
| [媒体服务刷新](/usage/cultivation_secrets/media_server_refresh.html) | 定时刷新媒体服务器媒体库 |
| [媒体服务清理](/usage/cultivation_secrets/media_server_clean.html) | 定时清理媒体服务中的大文件和无效内容 |
| [媒体库封面生成](/usage/cultivation_secrets/media_cover_generator.html) | 自动为媒体库生成美观的封面图片 |
| [媒体库文件夹合并](/usage/cultivation_secrets/media_library_folder_merge.html) | 合并旧目录到带 TMDB ID 的新目录 |
| [Plex 拼音本地化](/usage/cultivation_secrets/plex_localization_zh.html) | Plex 标题拼音排序与标签中文化 |

### 📥 下载管理

| 插件 | 说明 |
|------|------|
| [IYUU 自动辅种](/usage/cultivation_secrets/iyuu_auto_seed.html) | 基于 IYUU 官方 API 自动辅种 |
| [转种](/usage/cultivation_secrets/torrent_transfer.html) | 转移下载器中的做种任务到另一个下载器 |
| [DC 助手](/usage/cultivation_secrets/docker_copilot.html) | Docker Copilot 自动更新和备份 |
| [自动删种](/usage/cultivation_secrets/auto_delete_torrent.html) | 根据设定规则自动删除已完成的种子 |
| [刷流](/usage/cultivation_secrets/brush.html) | 智能刷流，自动选择合适种子提升分享率 |
| [Tracker 替换](/usage/cultivation_secrets/tracker_editor.html) | 批量替换种子 Tracker 地址 |
| [下载器站点标签](/usage/cultivation_secrets/downloader_site_tag.html) | 定时给种子添加站点标签 |
| [下载器限速](/usage/cultivation_secrets/downloader_speed_limit.html) | 按条件自动上传限速 |
| [PT Depiler 导入](/usage/cultivation_secrets/ptd_import.html) | 从 PT Depiler 导入站点数据 |

### ☁️ 云存储

| 插件 | 说明 |
|------|------|
| [云存储增量整理](/usage/cultivation_secrets/cloud_storage_watcher.html) | 定时扫描目录，整理增量文件 |
| [115 生活事件](/usage/cultivation_secrets/open115_life_event.html) | 拉取 115 操作事件，自动整理和生成 Strm |
| [云存储 HASH 上报](/usage/cultivation_secrets/cs_hash_reporter.html) | 扫描本地目录，上报文件 HASH 到云端 |
| [ED2K HASH 上报](/usage/cultivation_secrets/ed2k_hash_reporter.html) | 从 ED2K 链接提取 HASH 上报 |
| [CloudDrive2 配置](/usage/cultivation_secrets/cloud_drive2_config.html) | 配置 CD2 API 用于缓存刷新 |
| [云备份](/usage/cultivation_secrets/cloud_backup.html) | 定时同步本地文件至云存储，支持加解密 |
| [CPA 监控](/usage/cultivation_secrets/cpa_monitor.html) | 巡检 CPA 认证文件，自动处理异常账号 |

### 🌐 网络工具

| 插件 | 说明 |
|------|------|
| [网络诊断](/usage/cultivation_secrets/network_diagnostics.html) | 容器网络环境诊断，排查网络问题 |
| [自定义 Hosts](/usage/cultivation_secrets/custom_hosts.html) | 修改系统 hosts 文件，加速网络访问 |
| [Cloudflare IP 优选](/usage/cultivation_secrets/cloudflare_speed_test_preferred.html) | 测试 CF CDN 延迟和速度，自动优选 IP |
| [小米路由 Hosts](/usage/cultivation_secrets/mi_hosts.html) | 同步本地 Hosts 到小米路由器 |
| [企业微信可信 IP](/usage/cultivation_secrets/wework_white_ip_list.html) | 定时更新公网 IP 到企业微信可信列表 |
| [远程网络唤醒](/usage/cultivation_secrets/remote_wol.html) | 通过 WOL 魔术包远程唤醒设备 |

### 💻 系统工具

| 插件 | 说明 |
|------|------|
| [系统进程](/usage/cultivation_secrets/system_process.html) | 查看 Docker 容器系统进程 |
| [自动备份](/usage/cultivation_secrets/auto_backup.html) | 自动备份系统配置文件和数据库 |
| [CookieCloud 同步](/usage/cultivation_secrets/cookiecloud_sync.html) | 从 CookieCloud 同步站点 Cookie |
| [Giffgaff 保号提醒](/usage/cultivation_secrets/giffgaff_keep_alive.html) | Giffgaff 手机卡 180 天保号提醒 |
| [ESP32 桌面小助手服务](/usage/cultivation_secrets/esp32_desktop_assistant.html) | 可选 4G 短信与小助手指令（需定制固件） |
| [时刻](/usage/cultivation_secrets/moment.html) | 时刻提醒你，值得记住的瞬间 |
| [目录定时清理](/usage/cultivation_secrets/directory_cleaner.html) | 定时清理指定目录，支持黑白名单和体积过滤 |
| [发群聊消息](/usage/cultivation_secrets/shoutbox.html) | 自动发送站点群聊区消息 |

### 🖥️ NAS 服务助手

| 插件 | 说明 |
|------|------|
| [极空间服务助手](/usage/cultivation_secrets/zspace_service_assistant.html) | 极空间系统消息推送和状态查询 |
| [飞牛服务助手](/usage/cultivation_secrets/fnos_service_assistant.html) | 飞牛 NAS 状态查询和告警通知 |
| [绿联服务助手](/usage/cultivation_secrets/ugreen_service_assistant.html) | 绿联 NAS 状态查询和告警通知 |
| [PVE 服务助手](/usage/cultivation_secrets/pve_service_assistant.html) | Proxmox VE 节点状态查询和告警 |
| [群晖服务助手](/usage/cultivation_secrets/synology_service_assistant.html) | 群晖 NAS 状态查询和告警通知 |
| [威联通服务助手](/usage/cultivation_secrets/qnap_service_assistant.html) | 威联通 NAS 状态查询和告警通知 |
| [Unraid 服务助手](/usage/cultivation_secrets/unraid_service_assistant.html) | Unraid 系统状态查询和告警通知 |

### ✅ 签到工具

| 插件 | 说明 |
|------|------|
| [115 签到](/usage/cultivation_secrets/sign_115.html) | 定时自动签到 115 网盘 |
| [98 签到](/usage/cultivation_secrets/sign98.html) | 定时自动签到 98 论坛 |
| [HDHive 签到](/usage/cultivation_secrets/sign_hdhive.html) | 定时自动签到 HDHive 站点 |
| [朱雀签到](/usage/cultivation_secrets/sign_zhuque.html) | 朱雀站点修仙系统自动签到 |
| [绿联社区助手](/usage/cultivation_secrets/sign_ugreen.html) | 绿联社区自动登录活跃 |
| [音乐磁场签到](/usage/cultivation_secrets/hifini_sign.html) | 定时自动签到音乐磁场 |
| [药丸签到](/usage/cultivation_secrets/invites_sign.html) | 定时自动签到药丸论坛 |
| [晋江文学签到](/usage/cultivation_secrets/jjwxc_sign.html) | 定时自动签到晋江文学城 |
| [什么值得买签到](/usage/cultivation_secrets/smzdm_sign.html) | 定时自动签到什么值得买 |
| [柠檬神游](/usage/cultivation_secrets/lemon_shengyou.html) | 柠檬站点每日免费神游三清天 |

### 📊 订阅管理

| 插件 | 说明 |
|------|------|
| [豆瓣榜单订阅](/usage/cultivation_secrets/douban_subject_subscribe.html) | 自动添加未入库的影视订阅 |
| [订阅精选推荐](/usage/cultivation_secrets/subscribe_smart_recommend.html) | 智能推荐影视，推送交互卡片 |

## ⏰ 定时任务配置

大部分插件支持定时执行，使用 Cron 表达式设置执行时间。

常用示例：

| 表达式 | 含义 |
|--------|------|
| `0 2 * * *` | 每天凌晨 2 点 |
| `0 */6 * * *` | 每 6 小时一次 |
| `0 0 * * 0` | 每周日凌晨 |
| `*/30 * * * *` | 每 30 分钟一次 |

> 📖 完整 Cron 语法参考：[Cron 表达式说明](/usage/other/cron_rule.html)

## ❓ 常见问题

### 启灵失败

- 检查网络连接是否正常
- 确认系统权限是否充足
- 查看系统日志定位具体错误

### 插件运行异常

- 检查插件配置参数是否正确（如站点地址、账号密码）
- 验证相关外部服务是否正常运行
- 在插件卡片菜单中点击「查看日志」获取详细信息

### 定时任务不执行

- 确认 Cron 表达式格式正确
- 检查系统时间是否准确
- 确认插件实例处于「已启灵」状态（非封印）

### 天序（排序）不生效

- 确保没有激活搜索或状态过滤（过滤时拖拽自动禁用）
- 检查网络连接（排序结果需要同步到服务端）

---
