---
title: GitHub Token 生成获取教程
article: false
date: 2024-01-12
tags:
  - GitHub
  - Token
  - API
categories: 
editor: markdown
dateCreated: 2024-01-12
---

# 🔑 GitHub Token 生成获取详细教程

在使用 Media Saber 的程序更新、插件管理等功能时，您需要一个 GitHub Token 来访问 GitHub API，以便突破 API 限流并获得更稳定的服务。

## 📌 文档说明

本文档详细介绍如何生成和配置 GitHub Token，该令牌用于在 Media Saber 中实现以下功能：

- 🔄 程序版本检查和自动更新
- � 站点配置文件拉取和更新
- 🎬 CTMD 自建 TMDB 信息文件拉取
- 🚀 提高 GitHub API 调用频率限制

> ⚠️ **重要提示**：
> - 需要拥有有效的 GitHub 账号
> - Token 具有一定的权限，请妥善保管
> - Token 失效后可重新生成，不影响现有配置
> - 建议定期检查 Token 的有效性和权限范围

## 🎯 功能概览

| 功能 | 说明 | 影响 |
|:---:|------|:---:|
| **API 限流突破** | 突破 GitHub API 的匿名访问限制 | ⭐⭐⭐ |
| **程序更新** | 获取最新版本信息和更新日志 | ⭐⭐⭐ |
| **站点配置文件** | 拉取和更新站点配置文件 | ⭐⭐⭐ |
| **CTMD 信息拉取** | 获取自建 TMDB 元数据信息 | ⭐⭐⭐ |

---

## 🔧 详细获取步骤

### 快速访问链接

直接访问以下链接进入 Token 管理页面：

**🔗 [https://github.com/settings/personal-access-tokens](https://github.com/settings/personal-access-tokens)**

> 💡 **提示**：确保已登录 GitHub 账号，否则会跳转到登录页面

---

### 第一步：生成新的 Token

1. 访问上方链接后，点击右上角的 **Generate new token** 按钮
2. 在下拉菜单中选择 **Generate new fine-grained personal access token**（推荐新的细粒度令牌）

> 💡 **为什么选择细粒度令牌？**
> - 权限更细致，更安全
> - 可以精确控制可访问的仓库范围
> - Media Saber 只需要访问公共仓库，细粒度令牌更符合最小权限原则

### 第二步：配置 Token 基本信息

#### 🔹 名称和说明

1. **Token name（令牌名称）**：输入一个描述性的名称
   - 例如：`Media Saber - Version Check and Updates`
   - 或：`媒体库系统 - 版本更新`

#### 🔹 过期时间设置

在 **Expiration** 部分，选择过期时间：

- **30 days** / **60 days** / **90 days** - 不同的有效期
- **No expiration** - **永不过期（推荐）** ✅

> 💡 **建议说明**：
> - 设置为 **永不过期** 可以避免定期更新 Token，用户一次配置后无需再修改
> - GitHub 账号安全由两步验证等其他安全措施保护
> - 如有需要可随时进入此页面重新生成或删除 Token

### 第三步：配置 Token 权限范围

#### 🔹 Repository access（仓库访问）

选择 **Public repositories**（公共仓库）：
- Media Saber 拉取的都是公共的配置和元数据文件
- 此选项表示只能访问公开仓库
- 自动获得对所有公共库的只读权限

#### 🔹 Permissions（权限设置）

在权限部分，确保只有以下权限被启用：

**✅ 必要权限：**
- `Contents` - **Read-only** 只读访问内容（用于拉取文件）

**其他权限保持默认（不需要勾选）**

> ⚠️ **安全提示**：
> - Media Saber 仅需读权限，不需要任何写权限
> - 公共仓库只读已经足够支撑所有功能需求
> - 不要勾选任何超出必要范围的权限

### 第四步：生成并复制 Token

1. 完成上述配置后，向下滑动到页面底部
2. 点击 **Generate token** 按钮生成令牌

3. **⚠️ 重要**：Token 只会显示一次，请立即复制并保存到安全位置

Token 格式示例：
```
github_pat_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

4. 点击 Token 右侧的复制按钮，或手动全选复制

5. 若页面关闭未记录，可返回 Personal access tokens 列表重新生成

> 💡 **提示**：新的细粒度 Token 以 `github_pat_` 开头，与之前的 `ghp_` 格式不同

---

## 📝 在 Media Saber 中配置 Token

获取到 GitHub Token 后，需要在系统设置中配置才能使用。

### 配置位置

1. 打开 Media Saber 系统设置页面
2. 进入 **基础设置** 模块（⚙️ 基础配置）
3. 找到 **GitHub Token** 配置项
4. 将复制的 Token 粘贴到输入框中

5. 点击保存或应用按钮确认配置

### 验证配置

配置完成后，可以通过以下方式验证：

1. **程序更新检查**：在系统菜单中检查版本更新是否能正常获取
2. **功能测试**：观察站点配置文件和 CTMD 信息拉取是否正常
3. **日志查看**：查看系统日志中是否有 GitHub 相关的错误信息

> 💡 **验证成功的表现**：
> - 程序更新检查可以正常获取最新版本
> - 站点配置文件能够正常拉取和更新
> - 系统日志中无 GitHub API 调用错误

---

## 🔒 安全最佳实践

### ✅ 应该做的事

- 📌 **定期轮换 Token** - 建议每 30-90 天更新一次
- 🔐 **最小权限原则** - 仅授予必要的权限范围
- 💾 **安全备份** - 保存 Token 到密码管理工具
- 🔍 **定期审查** - 检查 GitHub 的 Token 列表，删除未使用的
- 🚨 **及时撤销** - 如果 Token 泄露立即撤销

### ❌ 不应该做的事

- ❌ **不要分享 Token** - 不要上传到代码仓库或分享给他人
- ❌ **不要使用过期 Token** - 使用失效的 Token 会导致功能故障
- ❌ **不要设置无期限 Token** - 存在安全隐患
- ❌ **不要过度授权** - 避免授予 `delete_repo` 等危险权限
- ❌ **不要在公网环境** - 避免在公共网络获取或输入 Token

### 🛡️ 泄露处理

如果发现 Token 泄露，请立即：

1. 访问 GitHub 个人设置中的 Personal access tokens
2. 找到泄露的 Token，点击 **Delete（删除）**
3. 在 Media Saber 中删除该 Token，重新生成并配置
4. 检查 GitHub 账号的访问日志

---

## ❓ 常见问题

### Q1：为什么需要 GitHub Token？

**A**：GitHub API 对匿名请求有严格的速率限制（60 次/小时）。使用 Token 可以将限制提升到 5000 次/小时，确保程序更新、插件管理等功能的稳定性。

### Q2：Token 多久失效？

**A**：取决于生成时设置的过期时间。推荐设置 30-90 天，到期后需要重新生成。GitHub 会在 Token 即将过期时发送邮件提醒。

### Q3：Token 泄露了怎么办？

**A**：立即进入 GitHub 设置中的 Personal access tokens，找到该 Token 点击删除。然后重新生成新 Token，在 Media Saber 中更新配置即可。泄露的 Token 将失效。

### Q4：能否使用别人的 Token？

**A**：技术上可以，但**强烈不推荐**。这样会：
- 暴露别人的 GitHub Token
- 影响别人的 API 调用限额
- 存在严重的安全隐患
- 对别人的账号造成潜在威胁

### Q5：Token 一直提示错误怎么办？

**A**：检查以下几点：
1. Token 是否已复制完整，没有多余空格
2. Token 是否已过期，需要重新生成
3. GitHub 账号是否被限制（如两步验证）
4. 网络连接是否正常

### Q6：忘记复制 Token 字符串了怎么办？

**A**：GitHub 不会再次显示已生成的 Token 字符串。需要：
1. 进入个人设置 → Developer settings → Personal access tokens
2. 找到旧的 Token，点击 **Delete** 删除
3. 点击 **Generate new token** 重新生成

---

## 📚 相关文档

- [基础设置 - GitHub Token 配置项](/usage/system_settings/basic_settings.md#github-token)
- [系统设置总览](/usage/system_settings/)
- [GitHub 官方文档 - Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

---

## 💡 建议和反馈

如有任何问题或建议，欢迎提交 Issue 或讨论：
- GitHub Issues: [media-saber/issues](https://github.com/skyme5/media-saber/issues)
- 项目首页：[media-saber](https://github.com/skyme5/media-saber)
