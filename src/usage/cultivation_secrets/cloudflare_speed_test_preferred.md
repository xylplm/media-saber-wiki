---
title: Cloudflare IP优选
action: false
tags:
  - 修仙秘籍
categories:
editor: markdown
date: 2025-11-19 00:00:00
---

# 🌩️ Cloudflare IP优选

测试 Cloudflare CDN 延迟和速度，自动优选 IP。

## ⚙️ 功能特点

- 定时测试 Cloudflare CDN 节点延迟和速度
- 自动选择最优 IP 并更新 hosts 配置
- 支持 IPv6 测速
- 支持自定义 CloudflareSpeedTest 高级参数
- 单例插件，全局生效

## 🚀 配置指南

| 参数 | 必填 | 说明 |
|------|------|------|
| 优选周期 | 否 | cron 表达式 |
| 优选域名 | **是** | 多行文本，每行一个域名，需要与 hosts 配置一致 |
| 高级参数 | 否 | CloudflareSpeedTest 的高级参数，如 `-dd` 不测试下载速度，`-t 1` 只测试一遍 |
| IPv6 | 否 | 开关，开启后会大大加长测速时间 |
| 每次重装后运行 | 否 | 开关，每次重新下载 CloudflareSpeedTest |
| 运行通知 | 否 | 开关 |

### 🔧 工具栏操作

- **运行一次**：手动触发一次 IP 优选测速

## 📖 使用说明

1. 在系统 hosts 中配置需要优选的 Cloudflare 域名；
2. 在「优选域名」中填写相同的域名列表；
3. 设置优选周期或手动运行一次；
4. 优选完成后系统自动更新 hosts 中的 IP 地址。

## ⚠️ 注意事项

- 优选域名必须与 hosts 配置中的域名一致，否则不会生效
- 开启 IPv6 会大大增加测速时间
- 高级参数请参考 CloudflareSpeedTest 官方文档

## 🔗 相关链接

- [修仙秘籍主页](/usage/cultivation_secrets/)
- [CloudflareSpeedTest](https://github.com/XIU2/CloudflareSpeedTest)
