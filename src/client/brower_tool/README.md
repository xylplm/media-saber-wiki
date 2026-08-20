---
title: 引言
article: false
dir:
  text: 浏览器扩展
  order: 10
date: 2026-07-10T00:00:00.000Z
tags:
  - 浏览器扩展
  - Media Saber Tools
categories:
  - 客户端
---

# Media Saber Tools 浏览器扩展

Media Saber Tools 是面向 Media Saber 用户的浏览器扩展，提供站点同步、Cookie 获取、云存储管理、下载管理、网页链接识别和右键快捷操作等功能。

普通用户建议优先从 Chrome、Edge 或 Firefox 官方扩展商店安装。只有无法访问商店、需要测试指定版本或有特殊需求时，再使用 GitHub Release 中的手动安装包。

## 🏪 官方商店

- [Chrome 网上应用店](https://chromewebstore.google.com/detail/media-saber-tools/ibflljhbofedginadhkfehbpbefijfid)
- [Microsoft Edge 加载项](https://microsoftedge.microsoft.com/addons/detail/hlpcdobmkgdflggmhpmgoejbfjndpadb)
- [Firefox 附加组件](https://addons.mozilla.org/zh-CN/firefox/addon/media-saber-tools/)

商店版本由平台负责安全校验和自动更新，是 Chrome、Edge 和 Firefox 用户的首选安装方式。

## 📚 新手阅读路径

1. [安装扩展](./installation.md)：选择商店安装或 Release 手动安装包。
2. [首次配置](./configuration.md)：填写 Media Saber 地址并测试连接。
3. [功能与界面](./features.md)：了解扩展可以做什么。
4. [站点管理](./site-management.md)：同步站点 Cookie、User-Agent 和站点数据。
5. [云存储管理](./cloud-storage.md)：浏览云盘、转存链接和发起离线下载。
6. [下载管理](./download-management.md)：管理磁力、种子和 PT 下载任务。
7. [网页增强](./web-enhancement.md)：使用网页按钮和右键菜单快速操作。
8. [设置与权限](./settings.md)：配置自动同步、通知并了解权限用途。
9. [常见问题](./faq.md)：按症状排查连接、Cookie、注入和下载问题。

## 🌐 浏览器兼容性

| 浏览器 | 推荐方式 | 说明 |
|---|---|---|
| Chrome | 官方商店 | 普通用户首选 |
| Edge | 官方商店 | 普通用户首选 |
| Brave / Vivaldi | Chrome 安装包或商店版本 | 通常兼容 Chrome MV3 扩展 |
| Opera / Opera GX | Chrome `.zip` 手动加载 | 通常兼容 Chromium 扩展 |
| Arc / Yandex / Chromium | Chrome 安装包 | 使用 Chromium 扩展机制 |
| 360 / QQ 等浏览器 | Chrome `.zip` | 不同版本扩展策略可能不同，建议先测试 |
| Firefox | 官方商店 | 普通用户首选；手动安装包仅用于测试或特殊场景 |
| Safari | Safari 包 | 需要通过 Xcode 封装 |

当前没有为每个 Chromium 浏览器重复制作内容相同的品牌包。遇到兼容性问题时，请记录浏览器名称和版本，并优先使用 Chrome `.zip` 包测试。

## ✨ 功能概览

- 自动获取浏览器中已登录站点的 Cookie 和 User-Agent。
- 一键同步站点信息到 Media Saber。
- 查看站点上传、下载、做种和积分数据。
- 浏览云存储文件，上传文件和转存链接。
- 发起磁力、HTTP、FTP、电驴和种子下载。
- 自动识别网页中的磁力链接、电驴链接和 PT 种子。
- 通过网页按钮或右键菜单快速打开对应功能。
- 支持定时同步、桌面通知和隐私模式。

## 🔗 相关入口

- [浏览器扩展固定最新版 Release](https://github.com/xylplm/media-saber-public/releases/tag/browser-extension)
- [Media Saber 使用文档](/)
- [站点管理](/usage/site_management/)
- [云存储](/usage/cloud_storage/)

> 扩展需要连接正在运行的 Media Saber 服务。请先准备服务器地址、登录账号，并遵守相关法律法规和网站服务条款。
