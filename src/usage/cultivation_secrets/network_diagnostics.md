---
title: 网络诊断
action: false
tags:
  - 修仙秘籍
categories:
editor: markdown
date: 2025-11-19 00:00:00
---

# 🌐 网络诊断

用于对容器网络环境进行诊断，排查网络问题。

## ⚙️ 功能特点

- 支持 Ping 连通性测试
- 支持 Traceroute 路由追踪
- 支持 Nslookup DNS 解析查询
- 支持 Telnet 端口连通性测试
- 支持 IPv4 和 IPv6 双栈诊断

## 🚀 配置指南

| 参数 | 必填 | 说明 |
|------|------|------|
| 域名/IP地址 | **是** | 诊断目标，如 `www.baidu.com` |
| 诊断类型 | 否 | ping / traceroute / nslookup / telnet |
| IP版本 | 否 | ipv4 / ipv6 |

> 💡 这是一个页面工具（tools-pages），无需配置定时任务，交互式使用。

### 🔧 工具栏操作

- 填写目标地址后直接运行诊断，结果实时展示在页面上

## 📖 使用说明

1. 进入「工具」页面找到「网络诊断」；
2. 输入要诊断的域名或 IP 地址；
3. 选择诊断类型（默认 ping）；
4. 选择 IP 版本（默认 ipv4）；
5. 点击运行，查看诊断结果。

## ⚠️ 注意事项

- 单例插件，全局只有一个实例
- 这是页面工具，在前端工具页面中使用
- 诊断结果取决于容器内的网络环境
- Telnet 需要指定端口号
- 部分网络环境可能不支持 traceroute

## 🔗 相关链接

- [修仙秘籍主页](/usage/cultivation_secrets/)
