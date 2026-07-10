---
title: 安装扩展
article: false
order: 1
tags:
  - 浏览器扩展
  - 安装
---

# 安装扩展

Chrome 和 Edge 用户建议优先使用官方扩展商店。Release 手动包适合无法访问商店、需要指定测试版本或使用其他 Chromium 浏览器的场景。

## 🏪 官方商店安装

### Chrome

打开 [Chrome 网上应用店](https://chromewebstore.google.com/detail/media-saber-tools/ibflljhbofedginadhkfehbpbefijfid)，点击“添加至 Chrome”。

### Edge

打开 [Microsoft Edge 加载项](https://microsoftedge.microsoft.com/addons/detail/hlpcdobmkgdflggmhpmgoejbfjndpadb)，点击“获取”。

商店版本由平台负责安全校验和自动更新，普通用户不需要手动下载 Release 包。

## 📦 Release 手动安装包

从 [浏览器扩展固定最新版 Release](https://github.com/xylplm/media-saber-public/releases/tag/browser-extension) 下载对应文件。

### Chrome / Edge 安装包格式

| 格式 | 用途 | 推荐场景 |
|---|---|---|
| `.zip` | 解压后的扩展目录 | 兼容性最好，推荐手动安装 |
| `.crx` | Chromium 打包扩展 | 部分浏览器支持拖拽安装 |
| `.crx.zip` | 内含 `.crx` 的压缩包 | 浏览器拦截 CRX 直链下载时使用 |

### Chromium 浏览器安装 `.zip`

Chrome、Edge、Brave、Vivaldi、Opera、Opera GX、Arc、Yandex、Chromium 等浏览器通常使用 Chrome 包：

1. 下载 `media-saber-tools-chrome.zip`，解压到固定目录。
2. 打开扩展管理页：Chrome 使用 `chrome://extensions/`，Edge 使用 `edge://extensions/`；其他浏览器从设置中进入扩展管理。
3. 开启“开发者模式”。
4. 点击“加载已解压的扩展程序”。
5. 选择包含 `manifest.json` 的解压目录。

360、QQ 等浏览器的扩展策略可能因版本不同而变化，建议先尝试 `.zip` 包。

### Chromium 浏览器安装 `.crx`

1. 打开浏览器扩展管理页并开启“开发者模式”。
2. 尝试把 `.crx` 文件拖入扩展管理页。
3. 如果浏览器拒绝安装，请改用 `.zip` 解压加载或官方商店版本。

如果下载的是 `.crx.zip`，先解压得到 `.crx`，再按上述步骤尝试安装。`.crx.zip` 只是下载容器，不是另一种扩展格式。

> Chrome、Edge 及其他 Chromium 浏览器的 CRX 安全策略可能不同。浏览器拒绝 CRX 通常是策略限制，不代表文件损坏。

## 🦊 Firefox

Release 提供 Firefox MV2 和 Firefox MV3 两个 `.zip` 包：

1. 下载对应版本并解压。
2. 打开 `about:debugging#/runtime/this-firefox`。
3. 点击“临时载入附加组件…”。
4. 选择解压目录中的 `manifest.json`。

临时载入的扩展会在浏览器关闭后失效。长期使用建议等待 Mozilla Add-ons 商店版本，或使用 Firefox 开发版 / ESR 并按照其签名策略安装。

## 🧭 Safari

Safari 包需要通过 Xcode 封装为 Safari Web Extension：

1. 下载 `media-saber-tools-safari.zip` 并解压。
2. 在 macOS 上使用 Xcode 创建或封装 Safari Web Extension。
3. 编译应用并在“系统设置 → Safari → 扩展”中启用。

Safari 的安装流程与 Chrome、Edge 不同，普通用户建议优先选择已提供官方商店版本的浏览器。

## 🔄 升级

- 商店安装：由商店自动更新。
- `.zip` 手动安装：下载新包，覆盖原目录后点击“重新加载”。
- `.crx` 手动安装：删除旧手动版本后重新加载；如果被拒绝则改用 `.zip`。
- Firefox 临时载入：浏览器重启后需要重新载入。

下一步：[首次配置](./configuration.md)
