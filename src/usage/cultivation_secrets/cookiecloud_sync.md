---
title: CookieCloud 同步
action: false
tags:
  - 修仙秘籍
categories:
editor: markdown
date: 2025-11-19 00:00:00
---

# 🍪 CookieCloud 同步

从 CookieCloud 服务器同步 Cookie，自动新增或更新站点 Cookie。

## ⚙️ 功能特点

- 定时从 CookieCloud 服务器拉取最新 Cookie
- 自动更新已有站点的 Cookie
- 支持自动新增未配置的站点
- 支持域名黑名单过滤
- 单例插件，全局生效

## 🚀 配置指南

| 参数 | 必填 | 说明 |
|------|------|------|
| 服务地址 | **是** | CookieCloud 服务器地址 |
| 用户 Key | **是** | 在 CookieCloud 客户端中获取 |
| 端对端加密密码 | **是** | 在 CookieCloud 客户端中设置 |
| 执行周期 | 否 | cron 表达式，默认每天凌晨 2 点 |
| 通知 | 否 | 开关，同步完成后发送通知 |
| 自动增加站点 | 否 | 开关，站点不存在时自动新增 |
| 域名黑名单 | 否 | 每行一个域名，支持精确匹配和后缀匹配 |

### 🔧 工具栏操作

- **立即同步**：手动触发一次 Cookie 同步

## 📖 使用说明

1. 部署或使用已有的 CookieCloud 服务器；
2. 在浏览器安装 CookieCloud 扩展并配置服务地址、用户 Key 和加密密码；
3. 在本插件中填写相同的服务地址、用户 Key 和加密密码；
4. 点击「立即同步」验证连接是否正常；
5. 设置执行周期，保持站点 Cookie 自动更新。

## ⚠️ 注意事项

- 用户 Key 和加密密码需与 CookieCloud 客户端中的设置完全一致
- 域名黑名单支持后缀匹配，如填写 `example.com` 会匹配所有子域名
- 开启「自动增加站点」前请确认黑名单配置，避免添加不需要的站点

## 🔗 相关链接

- [修仙秘籍主页](/usage/cultivation_secrets/)
- [CookieCloud 项目](https://github.com/nichuanfang/CookieCloud)
