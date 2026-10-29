---
title: 单点登录（OIDC）接入指南
article: false
tags: null
order: 2
categories:
  - 快速上手
  - 进阶教程
author:
  - 凌霄
editor: markdown
date: 2026-10-28 17:30:00

---

## 🚀 这是什么

如果你的 NAS 上已经跑了 **Authentik / Authelia / Pocket ID / Keycloak** 等身份认证服务（IdP），可以把 Media Saber 接入进去：

* 登录页出现「**单点登录**」按钮，点一下即可进入（IdP 会话有效时甚至不用再输密码）
* 用户账号与 IdP 身份绑定后，密码的复杂度、两步验证、Passkey 全部交给 IdP 管理
* 密码登录**永远保留**，两种方式随时切换；IdP 停机不影响已有会话与密码登录

> 没有部署 IdP？完全不用管这个功能——默认关闭，登录页与以前一模一样。想尝鲜推荐 [Pocket ID](https://github.com/stonith404/pocket-id)：Go 单二进制、约 50MB 内存、几分钟部署。

---

## 🧭 接入三步曲

<font color="#c00000">总流程：1️⃣ IdP 建应用 → 2️⃣ 粘贴回调地址 → 3️⃣ 回填配置测试并开启</font>

### 第一步：在 IdP 中新建应用

在你的 IdP 管理界面新建一个 OIDC 应用（Authentik 叫 Provider，Pocket ID 叫 Client），类型选择 **Confidential（机密客户端）**，需要拿到三样东西：

| 拿什么 | 在哪找 |
| --- | --- |
| 认证服务地址（issuer） | 以 IdP 展示的 Issuer **原样复制**，不同 IdP 形态不同（有的只有域名，有的带应用路径），详见下方各 IdP 示例 |
| 客户端 ID（Client ID） | 创建应用后生成 |
| 客户端密钥（Client Secret） | 创建应用后生成 |

### 第二步：粘贴回调地址

打开 Media Saber **设置 → 安全设置 → 登录方式**：

1. 先填写「**实例访问地址**」——用户访问 Media Saber 用的固定地址（建议域名，例如 `https://nas.example.com`）
2. 页面会生成**回调地址**，复制后粘贴到 IdP 应用的「重定向 URI（Redirect URI）」里：
   - `https://nas.example.com/auth/oidc/callback`（电脑浏览器和手机 App 都用这一条）

> ⚠️ 实例有多个访问地址（域名/IP/内网穿透）时，回调地址以你**访问登录页所用的地址**为准——两条回调的域名端口部分必须与之一致。

### 第三步：回填配置、测试、开启

回到 Media Saber 的 设置 → 安全设置 → 登录方式：

1. 填入认证服务地址、客户端 ID、客户端密钥
2. 点「**测试连接**」——三项检查（可达性 / 签发者一致 / 必备端点齐全）逐条呈现结果
3. 测试通过后打开「启用 OIDC 登录」并保存

立即生效，无需重启。登录页会出现单点登录按钮（文案可在配置里自定义）。

---

## 📘 主流 IdP 配置示例

> 每家 IdP 的管理界面差异较大，但都要做同样四件事：**新建 OIDC 应用 → 填回调地址 → 拿 Client ID/Secret → 查 Issuer 地址**。找不到对应入口时优先搜「Applications / Clients / Providers」菜单。

### Authentik

1. 管理后台 → **Applications → Applications → Create**：名称随意（如 Media Saber），slug 如 `media_saber`
2. 同时创建 Provider：类型选 **OAuth2/OpenID Connect**，Client type 选 **Confidential**，Redirect URI 填 Media Saber 的回调地址
3. 认证服务地址：`https://<authentik地址>/application/o/<slug>/`——在 Provider 详情页的 **OpenID Configuration Issuer** 原样复制
4. Client ID / Secret 在 Provider 详情页直接复制

### Authelia

编辑 `configuration.yml`，在 `identity_providers.oidc` 下新增客户端后重载配置：

```yaml
identity_providers:
  oidc:
    clients:
      - id: media_saber
        description: Media Saber
        secret: '<argon2 哈希>'
        redirect_uris:
          - https://nas.example.com/api/v1/user/oidc/callback
        scopes: [openid, profile, email]
```

* 认证服务地址：**就是你的 Authelia 站点地址**（如 `https://auth.example.com`，不带路径）
* ⚠️ 4.38+ 版本配置文件里放的是口令的 **argon2 哈希**：用 `authelia crypto hash generate argon2` 生成，生成时的**明文口令**填进 Media Saber 的「客户端密钥」

### Pocket ID

1. 管理界面 → **OIDC Clients → Add**：填名称，Callback URL 填 Media Saber 的回调地址
2. 创建后直接复制 Client ID / Client Secret
3. 认证服务地址：你的 Pocket ID 站点地址（如 `https://idp.example.com`）

### Casdoor

1. 管理后台 → **Applications → Add**：Redirect URLs 填 Media Saber 的回调地址
2. 应用页面直接复制 Client ID / Client Secret
3. 认证服务地址：你的 Casdoor 站点地址（如 `https://door.example.com`，不带路径）

### ZITADEL

1. 项目里新增应用：类型 **Web**、协议 **OIDC**；Auth Method 选 **Basic**；Redirect URI 填回调地址
2. 内网 http 地址需勾选 **Dev Mode**（否则只接受 https 回调）
3. 应用详情复制 Client ID / Client Secret
4. 认证服务地址：你的 ZITADEL 实例地址（如 `https://auth.example.com`）

### Keycloak

1. 进入目标 Realm → **Clients → Create client**：Client type = OpenID Connect，Client ID 如 `media_saber`
2. **Client authentication = On**（机密客户端），**Standard flow = On**，Valid redirect URIs 填回调地址
3. **Credentials** 页复制 Client Secret
4. 认证服务地址：`https://<keycloak地址>/realms/<realm名>`——Realm Settings → Endpoints 里 OpenID Endpoint Configuration 地址去掉 `/.well-known/openid-configuration` 的部分

### 群晖 SSO Server

1. 套件中心安装 **SSO Server** → 应用程序 → 新增，协议选 **OIDC**
2. 填应用名与 Media Saber 的回调地址，创建后获取 Client ID / Client Secret
3. 认证服务地址：以 SSO Server 应用详情展示的端点信息为准（一般是 DSM 的访问地址）
4. ⚠️ 需要 https 且证书可信，自签证书可能被浏览器或 IdP 拒绝

### 通用排错

| 现象 | 原因与处理 |
|---|---|
| 测试连接「签发者不一致」 | 认证服务地址没有原样复制 IdP 展示的 Issuer（注意尾部斜杠与路径），按提示里的「实际」值修正 |
| IdP 提示 redirect_uri 无效 | 回调地址必须与 IdP 里登记的**逐字符一致**（协议/域名/端口/路径） |
| IdP 拒绝 http 回调 | 多数 IdP 要求 https 回调（localhost 除外）；给 Media Saber 配 https，或换较宽松的 IdP（Pocket ID / Casdoor） |
| 测试通过但登录失败 | 客户端密钥的正确性测试连接验证不了，检查密钥是否复制完整 |

---

## 👥 账号是怎么对上的

用户首次点「单点登录」时，系统按下面的顺序找账号：

```
1. 之前绑定过 → 直接进入
2. IdP 用户名与本系统某账号同名 → 跳转"确认绑定"页，
   输入该账号的当前密码完成关联（防止恶意抢注同名身份，只此一次）
3. 没有匹配 → 提示"未找到匹配账号"，联系管理员在用户管理创建账号
```

* 账号全部由管理员在用户管理创建，系统**不会自动创建账号**（安全考量）
* **管理员账号**永远不会被自动匹配，只能由管理员本人在「我的信息 → 安全配置 → 单点登录」里主动关联

---

## 🔗 绑定管理

| 操作 | 谁在哪做 | 说明 |
| --- | --- | --- |
| 关联 | 用户本人：我的信息 → 安全配置 → 单点登录 → 关联OIDC账户 | 需输入当前密码确认 |
| 解绑 | 用户本人：同一位置 → 解绑 | 需密码确认；当前登录不掉线，仅下次登录改走密码 |
| 清除 | 管理员：用户管理 → 编辑用户 → 清除绑定 | 救援场景（用户 IdP 注销又忘密码）；不影响用户当前会话 |

> 无密码账号的关联/解绑按钮会置灰：先由管理员设置密码，否则解绑后谁也进不了该账号。

---

## 📱 手机 App 的单点登录

App 登录页点「OIDC 登录」后会**拉起系统浏览器**完成认证：

1. 浏览器打开认证服务授权页，正常登录（支持 Passkey / 二步验证）
2. 认证完成后浏览器展示「登录成功」，并自动尝试拉起 Media Saber App
3. 若浏览器未能自动跳转，手动切回 App 即可——**App 会自动完成登录**，无需任何额外操作

> 浏览器打不开/拉起失败都不影响登录：App 会在后台自动完成登录流程。等待页还提供授权链接的一键复制，可粘贴到任意浏览器手动打开。

---

## 📷 扫码登录

扫码登录**不依赖 OIDC/IdP**，是一个独立的登录方式：已登录的 App 用户扫一下电脑屏幕上的二维码，即可授权该浏览器登录自己的账号。

### 管理员开启

设置 → 安全设置 → 登录方式 → **扫码登录**卡 → 打开开关并保存。

默认开启（不依赖 IdP 配置，装好即用）；关闭后登录页扫码入口立即隐藏、进行中的二维码立即失效。

### 使用流程

1. 电脑浏览器打开登录页，点击右上角紫色折角图标切换到**扫码登录**
2. 屏幕显示二维码（120 秒有效，圆角方框倒计时实时可见）
3. 打开手机 App → 个人中心 → 右上角**扫码图标**
4. 对准二维码扫描 → App 展示确认页（服务器地址 + 待授权设备）
5. 点「确认登录」→ 电脑浏览器自动跳转进入系统

二维码过期后点击「刷新二维码」重新生成；手机上点「取消」则电脑端立即提示已取消。

### 授权确认页说明

| 信息 | 含义 |
|---|---|
| 登录服务器 | 二维码所属的 Media Saber 服务器（防止扫到其他实例的码） |
| 待授权设备 | 发起扫码的电脑设备名与类型 |
| 倒计时条 | 剩余有效时间，与服务器同步 |

### 安全说明

* 二维码 120 秒有效、一次性使用，过期或使用后立即失效
* 确认登录只能由**扫码用户本人**操作，扫码后别人无法冒认
* 确认页展示服务器地址，扫到其他实例的码会明确拒绝
* 扫码登录的会话在设备管理中标注为「扫码登录」

---

## 🖥️ 各端登录方式标识

登录成功后，你可以在以下位置看到每次登录使用的**登录方式**（密码登录 / OIDC / 扫码登录）：

| 位置 | 端 | 展示 |
|---|---|---|
| 我的信息 → 安全配置 → 设备管理 | Web | 设备名旁的标签（密码登录 / OIDC / 扫码登录） |
| 安全中心 → 登录审计 | Web | 每条登录成功记录的「客户端」列内标注 |
| 个人中心 → 设备管理 | App | 设备副标题「IP · 登录方式」 |

> 早期产生的登录记录没有登录方式标记，随会话自然过期后自动补全。

### 我的信息 → 安全配置

已绑定 OIDC 的用户会看到**绑定状态卡**：

* **已绑定**：显示绑定标签 + 「解绑」按钮（需密码确认）
* **未绑定**：显示「关联OIDC账户」按钮（需密码确认，确认后跳转 IdP 完成关联）
* 账号未设置密码时按钮置灰（需管理员先设置密码）

### 安全中心 → 登录审计

管理员可在 安全设置 → 登录审计 中查看所有用户的登录记录。每条登录成功事件的「客户端」列会标注登录方式：

* **密码**：账号密码登录（默认形态不额外标注时）
* **OIDC**：通过 IdP 单点登录进入
* **扫码**：通过 App 扫码授权进入

---

## ❓ 常见问题

**测试连接通过了，但登录还是失败？**
测试连接不校验客户端密钥的正确性（协议限制），首次真实登录才会验证。请检查密钥是否复制完整。

**提示"签发者不一致"？**
认证服务地址末尾的斜杠、大小写要与 IdP 给出的完全一致，以 IdP 展示的原样复制。

**IdP 挂了会怎样？**
单点登录会提示"认证服务暂不可达"；密码登录与已登录设备完全不受影响。

**换 IdP 怎么迁移？**
先关闭单点登录开关（已绑定关系保留），到用户管理逐个清除绑定（或让用户自行解绑），配置新 IdP 后重新开启即可。

**手机 App 支持吗？**
App 端单点登录将在后续版本提供，本版本先覆盖 Web。
