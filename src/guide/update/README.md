---
title: 更新版本
article: false
dir:
  order: 20
tags: 
  - 更新
  - 升级
  - 维护
categories: 
editor: markdown
date: 2025-01-01 12:16:17
---

## 🔄 更新版本

> 本章节介绍如何更新 Media Saber 版本，以及更新过程中需要注意的事项。

---

## 📚 选择您的更新方式

根据您的部署方式，选择对应的更新指南：

| 更新方式 | 描述 | 链接 |
|---------|------|------|
| 🐳 Docker Compose | 通过 docker-compose 命令手动更新 | [Docker Compose 更新指南](./dc.md) |
| 🗄️ PostgreSQL 数据库 | 数据库版本升级和迁移 | [数据库更新指南](./PostgreSQL.md) |
| 🔄 Watchtower 自动更新 | 使用 Watchtower 容器自动检测并更新镜像 | [Watchtower 自动更新指南](./watchtower.md) |

---

## ⚠️ 更新前的重要事项

:::warning 🚨 更新须知
请在更新前阅读以下注意事项，确保更新过程安全顺利：

- 📋 **备份数据**：更新前请备份所有重要数据，特别是 PostgreSQL 数据库和配置文件
- ⏰ **选择合适时机**：建议在非高峰期进行更新，避免影响正常使用
- 🔌 **服务中断预期**：更新过程中服务将临时中断，请提前告知其他用户
- 📝 **记录版本号**：更新前记录当前版本号，便于问题排查
:::

---

## 🔗 快速导航

- 📖 [回到新手指引](/guide/)
- 📋 [查看版本更新日志](/src/version_logs)
