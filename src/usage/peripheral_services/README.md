---
title: 介绍
article: false
dir:
  text: 周边服务
  order: 135
tags:
  - 周边服务
  - 第三方服务
  - OCR
categories:
editor: markdown
date: 2026-06-06 12:00:00
---

# 🧩 周边服务

> 周边服务汇集了 Media Saber 运行中可选搭配的各类辅助服务与第三方服务介绍。这些服务并非系统核心功能，但能在特定场景下提供更强的能力与更好的体验，可按需自建或接入。

---

## 📋 服务清单

### 🔤 [OCR 服务配置](./ocr_service)
光学字符识别服务，主要用于网站登录更新 Cookie、特殊站点签到等验证码识别场景。支持第三方服务、自建 C++ Paddle OCR、Node.js Paddle OCR、Baidu OCR（Go 版）等多种方案。

### 🎨 [媒体封面生成 API 服务](./media_cover_generator)
为媒体库自动生成美观封面图片的 Docker 服务，开箱即用，支持多种封面样式。修仙秘籍中的「媒体库封面生成」即通过调用本服务工作，使用前需先部署。

---

## 💡 使用说明

- 本目录下的服务多为**可选项**，根据实际使用需求选择性配置即可。
- 自建类服务建议优先在本地或内网部署，保障数据安全与稳定性。
- 第三方服务依赖外部稳定性，重度使用场景推荐自建。

> 后续相关周边服务与第三方服务的介绍都会陆续补充到本目录下。

---

## 🔗 相关链接

- [基础设置](/usage/system_settings/basic_settings.html) - 在此填写各类服务地址
- [系统设置](/usage/system_settings/) - 更多系统配置选项
- [回到使用文档](/usage/main_page/)
