---
title: 企业微信可信 IP
action: false
tags:
  - 修仙秘籍
categories:
editor: markdown
date: 2025-11-19 00:00:00
---

# 🏢 企业微信可信 IP

定时更新公网 IP 到企业微信企业可信 IP 列表，解决没有固定公网 IP 的问题。

## ⚙️ 功能特点

- 自动检测公网 IP 变化并更新
- 支持覆盖模式和追加模式
- 支持 CookieCloud 自动获取 Cookie
- 支持 Cookie 保活定时刷新

## 🚀 配置指南

| 参数 | 必填 | 说明 |
|------|------|------|
| 消息推送 | 否 | IP 更新后发送通知 |
| CookieCloud | 否 | 配合 CookieCloud 插件自动获取 Cookie |
| 覆盖模式 | 否 | 开启为覆盖，关闭为追加 |
| 周期 | 否 | IP 检测周期（cron 表达式） |
| Cookie保活 | 否 | Cookie 刷新周期，建议 10 分钟 |
| Cookie | 否 | 登录企微后导出 HeaderString 格式 Cookie |
| 应用ID列表 | 是 | 企业微信应用 ID，一行一个 |

### 🔧 工具栏操作

- **运行一次**：立即执行一次 IP 更新

## 📖 使用说明

1. 登录企业微信管理后台，导出 HeaderString 格式 Cookie
2. 填写需要更新可信 IP 的应用 ID（一行一个）
3. 设置检测周期和 Cookie 保活周期
4. 或配合 CookieCloud 插件自动获取 Cookie

## ⚠️ 注意事项

- Cookie 保活建议设置为 10 分钟一次
- 覆盖模式会清除原有 IP 列表，追加模式保留原有 IP
- 本插件为单实例插件，只能添加一个

## 🔗 相关链接

- [消息通知配置](/usage/settings/)
