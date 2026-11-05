---
title: MS 技能包
article: false
tags:
  - MS
  - 技能包
  - OpenClaw
  - 爱马仕
  - Hermes
  - 小龙虾
  - npx
categories:
editor: markdown
date: 2026-04-24 00:00:00
---

# 🎯 MS 技能包

> 💡 MS 技能包是一组专为 Media Saber 设计的 AI Agent 技能，安装后可直接在 OpenClaw 小龙虾、Hermes 爱马仕等客户端中通过自然语言完成影视订阅与管理、追剧日历、漏集补齐、推荐与榜单浏览、云端资源与站点种子下载、站点与下载管理、系统体检与状态查询等操作。

📦 技能包仓库：<https://github.com/fanxuankai/cli-anything-harnesses>

---

## 📋 技能包列表

仓库 `skills/` 目录下目前共有 **14 个技能包**：

| 技能包 | 功能简介 | 依赖 CLI |
|---|---|---|
| `ms-sub` | 搜索影视、订阅影视、管理订阅、查季集和演员 | `cli-anything-ms` |
| `ms-gap-filler` | 检查电视剧漏集，按后端决策补齐订阅 | `cli-anything-ms` |
| `ms-calendar` | 追剧日历、全平台播出日历和 iCal 订阅地址 | `cli-anything-ms` |
| `ms-recommend` | 影视推荐 | `cli-anything-ms` |
| `ms-rank` | 影视榜单 | `cli-anything-ms` |
| `ms-cloud-resource` | 云端资源与站点种子查询、下载提交与任务跟踪 | `cli-anything-ms` |
| `ms-cloud-resource-rank` | 云端资源贡献榜 | `cli-anything-ms` |
| `ms-media-server` | 媒体服务器状态、同步、媒体库与库内检索 | `cli-anything-ms` |
| `ms-site-state` | 站点状态与统计 | `cli-anything-ms` |
| `ms-site-signin` | 站点签到查询与执行 | `cli-anything-ms` |
| `ms-download` | 下载器与下载任务管理 | `cli-anything-ms` |
| `ms-status` | 系统总览、系统体检和版本更新 | `cli-anything-ms` |
| `ms-nas-state` | NAS 系统状态（支持极空间、绿联、飞牛、PVE，支持多设备） | `cli-anything-ms` |
| `cli-anything-cliproxyapi` | CLIProxyAPI 代理管理 | `cli-anything-cliproxyapi` |

::: tip 💡 前置依赖
除 `cli-anything-cliproxyapi` 外，其余 13 个技能均依赖 `cli-anything-ms`，技能安装完成后需确保该 CLI 可用：

```bash
pip install cli-anything-ms
```

::: warning ⚠️ 版本要求
`cli-anything-ms` **0.12.0** 及以上的接口需要 Media Saber 后端为 **2026-11 及以后**的版本；旧版后端请搭配 `cli-anything-ms` 0.11.x 使用。升级后建议把已安装的技能也带 `--force` 重装一遍，保证技能描述与 CLI 行为一致。
:::

---

## 📦 一次性安装全部技能

如果你想一次装好所有技能包：

::: tabs

@tab npx 首次安装

```bash
npx skills add fanxuankai/cli-anything-harnesses --list
npx skills add fanxuankai/cli-anything-harnesses --skill ms-sub
npx skills add fanxuankai/cli-anything-harnesses --skill ms-gap-filler
npx skills add fanxuankai/cli-anything-harnesses --skill ms-recommend
npx skills add fanxuankai/cli-anything-harnesses --skill ms-rank
npx skills add fanxuankai/cli-anything-harnesses --skill ms-cloud-resource
npx skills add fanxuankai/cli-anything-harnesses --skill ms-cloud-resource-rank
npx skills add fanxuankai/cli-anything-harnesses --skill ms-media-server
npx skills add fanxuankai/cli-anything-harnesses --skill ms-site-state
npx skills add fanxuankai/cli-anything-harnesses --skill ms-site-signin
npx skills add fanxuankai/cli-anything-harnesses --skill ms-download
npx skills add fanxuankai/cli-anything-harnesses --skill ms-nas-state
npx skills add fanxuankai/cli-anything-harnesses --skill ms-calendar
npx skills add fanxuankai/cli-anything-harnesses --skill ms-status
npx skills add fanxuankai/cli-anything-harnesses --skill cli-anything-cliproxyapi
```

注：`npx skills add ...` 适合首次安装或交互式添加/查看可用技能（更偏“添加/列出”语义）。

@tab npx 强制安装 / 覆盖（@openclaw/skills）

```bash
npx -y @openclaw/skills install fanxuankai/cli-anything-harnesses/skills/ms-sub --force
npx -y @openclaw/skills install fanxuankai/cli-anything-harnesses/skills/ms-gap-filler --force
npx -y @openclaw/skills install fanxuankai/cli-anything-harnesses/skills/ms-recommend --force
npx -y @openclaw/skills install fanxuankai/cli-anything-harnesses/skills/ms-rank --force
npx -y @openclaw/skills install fanxuankai/cli-anything-harnesses/skills/ms-cloud-resource --force
npx -y @openclaw/skills install fanxuankai/cli-anything-harnesses/skills/ms-cloud-resource-rank --force
npx -y @openclaw/skills install fanxuankai/cli-anything-harnesses/skills/ms-media-server --force
npx -y @openclaw/skills install fanxuankai/cli-anything-harnesses/skills/ms-site-state --force
npx -y @openclaw/skills install fanxuankai/cli-anything-harnesses/skills/ms-site-signin --force
npx -y @openclaw/skills install fanxuankai/cli-anything-harnesses/skills/ms-download --force
npx -y @openclaw/skills install fanxuankai/cli-anything-harnesses/skills/ms-nas-state --force
npx -y @openclaw/skills install fanxuankai/cli-anything-harnesses/skills/ms-calendar --force
npx -y @openclaw/skills install fanxuankai/cli-anything-harnesses/skills/ms-status --force
npx -y @openclaw/skills install fanxuankai/cli-anything-harnesses/skills/cli-anything-cliproxyapi --force
```

注：`@openclaw/skills install ... --force` 保证覆盖已安装的同名技能，用于强制更新或脚本化安装（自动确认 `-y`）。

@tab OpenClaw 小龙虾

在 OpenClaw 对话框中逐条粘贴：

```text
请安装技能 https://github.com/fanxuankai/cli-anything-harnesses/tree/main/skills/ms-sub
请安装技能 https://github.com/fanxuankai/cli-anything-harnesses/tree/main/skills/ms-gap-filler
请安装技能 https://github.com/fanxuankai/cli-anything-harnesses/tree/main/skills/ms-recommend
请安装技能 https://github.com/fanxuankai/cli-anything-harnesses/tree/main/skills/ms-rank
请安装技能 https://github.com/fanxuankai/cli-anything-harnesses/tree/main/skills/ms-cloud-resource
请安装技能 https://github.com/fanxuankai/cli-anything-harnesses/tree/main/skills/ms-cloud-resource-rank
请安装技能 https://github.com/fanxuankai/cli-anything-harnesses/tree/main/skills/ms-media-server
请安装技能 https://github.com/fanxuankai/cli-anything-harnesses/tree/main/skills/ms-site-state
请安装技能 https://github.com/fanxuankai/cli-anything-harnesses/tree/main/skills/ms-site-signin
请安装技能 https://github.com/fanxuankai/cli-anything-harnesses/tree/main/skills/ms-download
请安装技能 https://github.com/fanxuankai/cli-anything-harnesses/tree/main/skills/ms-nas-state
请安装技能 https://github.com/fanxuankai/cli-anything-harnesses/tree/main/skills/ms-calendar
请安装技能 https://github.com/fanxuankai/cli-anything-harnesses/tree/main/skills/ms-status
请安装技能 https://github.com/fanxuankai/cli-anything-harnesses/tree/main/skills/cli-anything-cliproxyapi
```

@tab Hermes 爱马仕

```bash
hermes skills install fanxuankai/cli-anything-harnesses/skills/ms-sub --force
hermes skills install fanxuankai/cli-anything-harnesses/skills/ms-gap-filler --force
hermes skills install fanxuankai/cli-anything-harnesses/skills/ms-recommend --force
hermes skills install fanxuankai/cli-anything-harnesses/skills/ms-rank --force
hermes skills install fanxuankai/cli-anything-harnesses/skills/ms-cloud-resource --force
hermes skills install fanxuankai/cli-anything-harnesses/skills/ms-cloud-resource-rank --force
hermes skills install fanxuankai/cli-anything-harnesses/skills/ms-media-server --force
hermes skills install fanxuankai/cli-anything-harnesses/skills/ms-site-state --force
hermes skills install fanxuankai/cli-anything-harnesses/skills/ms-site-signin --force
hermes skills install fanxuankai/cli-anything-harnesses/skills/ms-download --force
hermes skills install fanxuankai/cli-anything-harnesses/skills/ms-nas-state --force
hermes skills install fanxuankai/cli-anything-harnesses/skills/ms-calendar --force
hermes skills install fanxuankai/cli-anything-harnesses/skills/ms-status --force
hermes skills install fanxuankai/cli-anything-harnesses/skills/cli-anything-cliproxyapi --force
```

:::

::: tip 💡 提示
`--force` 参数用于覆盖已存在的同名技能，避免旧版本残留，建议每次安装都带上。
:::

---

## ✨ 技能介绍

### 📺 ms-sub · 搜索与影视订阅

> 用 `cli-anything-ms` 搜索影视、订阅影视、管理已有订阅、查季集和演员信息

**功能一：搜索影视**

适用于「搜索电影流浪地球」「搜一下电视剧西游记」「先搜一下」等场景。

- 每次搜索前先确认用户要找电影还是电视剧，不明确时先询问
- 去掉外壳词，只保留用于搜索的标题部分
- 优先搜索 TMDB；TMDB 搜不到时（国产综艺、冷门动漫等），会提示可以全源聚合搜索再试一次，结果按来源分组展示
- 精确匹配优先；多个候选时展示最多 3 个让用户确认；无结果时明确告知
- 只搜索时，展示候选后停止，不自动进入订阅流程

**功能二：订阅影视**

适用于「订阅电影流浪地球」「订阅电视剧西游记第二季」「检查复仇者联盟有没有订阅，没有就订阅」等场景。

- 订阅流程必须建立在搜索结果之上，不跳过搜索直接订阅
- 订阅时会把搜索结果里的 TMDB 编号一并透传，后端识别更准
- 订阅前同时检查是否已订阅和是否已入库：
  - 已订阅 → 回复 `ℹ️ 已订阅`
  - 未订阅但已入库 → 默认不再新增订阅，明确告知用户
  - 既没订阅也没入库 → 执行新增订阅，成功后回复 `✅ 订阅成功`
- 电视剧未指定季数时，默认订阅第 1 季
- 筛选器、下载器、保存目录等细节配置由后端订阅默认设置自动兜底，无需逐项确认
- 使用搜索返回的规范标题和年份，不使用用户输入的原始文字

**功能三：查看与管理订阅**

- 「看看电影订阅」「电视剧订阅前 20 个」：直接查询订阅列表，支持分页，用自然中文说明名称、年份、类型、季数和状态
- 「暂停这个订阅」「恢复订阅」「删掉这个订阅」「刷新这个订阅」「刷新全部电视剧订阅」：管理已有订阅的生命周期
  - 删除是不可逆操作，执行前必须复述目标订阅名称让用户确认
  - 暂停会停止自动与手动触发；恢复会立即补搜一次

**功能四：查季集与演员**

- 「XX 第二季一共多少集」「更新到哪了」：查询指定季的集数信息，汇总总集数、播出日期和已入库情况
- 「XX 还演过什么」：查询演员详情介绍（需要演员编号，可从影片详情获取）

::: tip 💡 说明
- 一句话包含多个搜索、查看订阅或订阅意图时，逐个处理并逐条返回结果
- 订阅前不仅看是否已订阅，还要考虑是否已入库
- 不做批量编辑、批量对齐默认配置、重新订阅这类管理操作
:::

**效果演示：**

<img src="./images/skill/自动订阅.png" alt="影视订阅演示" style="max-width:100%;border-radius:8px;" />

**安装：**

::: tabs

@tab npx

```bash
npx -y @openclaw/skills install fanxuankai/cli-anything-harnesses/skills/ms-sub --force
```

@tab OpenClaw 小龙虾

在 OpenClaw 对话框中粘贴 GitHub 链接：

```text
请安装技能 https://github.com/fanxuankai/cli-anything-harnesses/tree/main/skills/ms-sub
```

或使用命令行：

```bash
openclaw skills install fanxuankai/cli-anything-harnesses/skills/ms-sub
```

@tab Hermes 爱马仕

```bash
hermes skills install fanxuankai/cli-anything-harnesses/skills/ms-sub --force
```

:::

---

### 🔍 ms-gap-filler · 漏集补齐

> 查电视剧漏集，并按后端给出的决策把缺集并入订阅或新建订阅

**工作流程：**

1. **检查漏集** — 无论说「查漏集」还是「补漏集」，都先通过媒体健康接口查询漏集问题（`media-health page --type missing`），按原始顺序处理
2. **汇总展示** — 按剧为单位给出摘要（标题、年份、缺哪一季、缺哪些集），不直接倾倒 JSON；查完后追问用户是否要补漏集
3. **确认补齐范围** — 支持两种方式：
   - 指定某一部剧名（按标题近似匹配）
   - 补前 N 个（默认前 3 个，最多 10 个，按原始顺序计数）
4. **预览决策再执行** — 每部剧先预览后端决策并用人话告知，再执行补订阅：
   - `create` → 还没有订阅，将新建订阅
   - `merge` → 已有订阅，把缺失的集并入现有订阅
   - `research` → 已有订阅，重新触发搜索
   - `noop` → 无需处理，跳过
   - 同一部剧只执行一次，不再逐季拆分
5. **返回结果** — 执行前告知将补哪些剧、各自会怎么做，执行后逐条返回并给出成功/失败汇总

**触发场景举例：**
- 查漏集
- 补漏集
- 把前 3 个补一下
- 补猎罪图鉴

::: tip 💡 说明
- 此技能只处理电视剧漏集，不处理电影，也不处理未匹配、可升级、缺字幕等其他健康问题
- 漏集结果为空时直接告知「无漏集」，不继续执行
- 支持忽略单个漏集问题（「别再提醒这部剧」）和恢复已忽略的问题
- 单条失败不中断后续，最终给出完整汇总
:::

**效果演示：**

<img src="./images/skill/电视剧查漏集.png" alt="漏集补齐演示" style="max-width:100%;border-radius:8px;" />

**安装：**

::: tabs

@tab npx

```bash
npx -y @openclaw/skills install fanxuankai/cli-anything-harnesses/skills/ms-gap-filler --force
```

@tab OpenClaw 小龙虾

在 OpenClaw 对话框中粘贴 GitHub 链接：

```text
请安装技能 https://github.com/fanxuankai/cli-anything-harnesses/tree/main/skills/ms-gap-filler
```

或使用命令行：

```bash
openclaw skills install fanxuankai/cli-anything-harnesses/skills/ms-gap-filler
```

@tab Hermes 爱马仕

```bash
hermes skills install fanxuankai/cli-anything-harnesses/skills/ms-gap-filler --force
```

:::

---

### 📅 ms-calendar · 追剧日历

> 查看订阅日历的按天更新安排、全平台播出日历，或获取加到手机日历 App 的 iCal 订阅地址

**工作流程：**

1. **订阅日历** — 「今天有什么更新」「本周追剧日历」「XX 什么时候更新」时查询订阅日历，默认未来 7 天，按天分组展示剧名、季集和具体时间；支持 `--days` 调整范围、从指定日期开始、只看某部剧
2. **全平台播出日历** — 「最近有什么在播」「这周有什么新剧」时走平台播出日历：先查媒体类型，再查平台，然后看一段时间内每天的播出数量；对某天感兴趣时再看当天播出明细
3. **iCal 订阅地址** — 「把追剧日历加到手机日历」时获取完整订阅地址，并说明一步添加方法；地址包含访问凭据，会提醒不要公开分享

**触发场景举例：**
- 今天有什么更新
- 本周追剧日历
- 最近有什么在播
- 把追剧日历加到手机日历
- 给我日历订阅地址

::: tip 💡 说明
- 此技能只查日历，不新增订阅、不刷新订阅；想订阅某部剧交给 `ms-sub`
- 获取订阅地址需要已配置外部访问域名和 API Key，缺失时会给出一句话指引
:::

**安装：**

::: tabs

@tab npx

```bash
npx -y @openclaw/skills install fanxuankai/cli-anything-harnesses/skills/ms-calendar --force
```

@tab OpenClaw 小龙虾

在 OpenClaw 对话框中粘贴 GitHub 链接：

```text
请安装技能 https://github.com/fanxuankai/cli-anything-harnesses/tree/main/skills/ms-calendar
```

或使用命令行：

```bash
openclaw skills install fanxuankai/cli-anything-harnesses/skills/ms-calendar
```

@tab Hermes 爱马仕

```bash
hermes skills install fanxuankai/cli-anything-harnesses/skills/ms-calendar --force
```

:::

---

### 🌟 ms-recommend · 影视推荐

> 查看 ms 影视推荐时使用，通过 `cli-anything-ms` 逐步查询推荐来源、频道、动态选项和条目

**工作流程：**

1. **确定推荐来源** — 用户未指定平台时，先列出可用来源让用户选择；已指定时映射为 CLI alias（如 `豆瓣` → `douban`，`TMDB` → `tmdb`）
2. **确定频道** — 通常为 `movie` 或 `tv`，不明确时展示选项让用户确认
3. **读取动态选项** — 必须先读取当前平台和频道的筛选项，不硬编码参数；用户提到的偏好（如「高分」「2025」「动作」）按 `text` 匹配成真实 `value`
4. **获取推荐条目** — 构造完整 `--options` JSON 后查询，默认第 1 页、每页 10 条
5. **展示结果** — 输出简洁摘要（标题、年份、类型、评分、RSS 状态、入库状态），不直接倾倒 JSON

**触发场景举例：**
- 影视推荐
- 豆瓣电影推荐
- TMDB 高分电影推荐
- 推荐 2025 年动作片
- 推荐豆瓣电视剧，近期热度，华语

::: tip 💡 说明
- 此技能只做推荐浏览，不执行订阅
- 用户提到的筛选条件不在当前平台选项里时，会明确告知并要求调整
- 未指定筛选项时，为所有选项组填空字符串（使用平台默认值）
:::

**效果演示：**

<img src="./images/skill/影视推荐.png" alt="影视推荐演示" style="max-width:100%;border-radius:8px;" />

**安装：**

::: tabs

@tab npx

```bash
npx -y @openclaw/skills install fanxuankai/cli-anything-harnesses/skills/ms-recommend --force
```

@tab OpenClaw 小龙虾

在 OpenClaw 对话框中粘贴 GitHub 链接：

```text
请安装技能 https://github.com/fanxuankai/cli-anything-harnesses/tree/main/skills/ms-recommend
```

或使用命令行：

```bash
openclaw skills install fanxuankai/cli-anything-harnesses/skills/ms-recommend
```

@tab Hermes 爱马仕

```bash
hermes skills install fanxuankai/cli-anything-harnesses/skills/ms-recommend --force
```

:::

---

### 🏆 ms-rank · 影视榜单

> 查看 ms 影视榜单时使用，通过 `cli-anything-ms` 逐步查询榜单来源、分类、主题和条目

**工作流程：**

1. **确定榜单来源** — 用户未指定平台时，先列出可用来源；已指定时映射为 CLI alias（如 `豆瓣` → `douban`，`TMDB` → `tmdb`）
2. **确定榜单分类** — 按 `name` 优先、`code` 次之匹配用户意图；多个候选时展示让用户确认
3. **确定榜单主题** — 同样按名称匹配，不明确时先展示候选，不自动选择
4. **获取榜单条目** — 默认第 1 页、每页 10 条；支持「前 N 个」和「第 N 页」
5. **展示结果** — 输出简洁摘要（标题、年份、类型、评分、是否已订阅、是否已入库）

**触发场景举例：**
- 影视榜单
- 豆瓣电视榜单
- 看豆瓣热播国产剧
- 榜单前 10 个
- 看电影年榜 2025

::: tip 💡 说明
- 此技能只做榜单浏览，不执行订阅
- 分类和主题有歧义时，一律要求用户确认，不猜测
:::

**效果演示：**

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
  <img src="./images/skill/榜单-豆瓣热播.png" alt="豆瓣热播榜单演示" style="width:100%;border-radius:8px;" />
  <img src="./images/skill/榜单-tmdb高分电影推荐.png" alt="TMDB高分电影榜单演示" style="width:100%;border-radius:8px;" />
</div>

**安装：**

::: tabs

@tab npx

```bash
npx -y @openclaw/skills install fanxuankai/cli-anything-harnesses/skills/ms-rank --force
```

@tab OpenClaw 小龙虾

在 OpenClaw 对话框中粘贴 GitHub 链接：

```text
请安装技能 https://github.com/fanxuankai/cli-anything-harnesses/tree/main/skills/ms-rank
```

或使用命令行：

```bash
openclaw skills install fanxuankai/cli-anything-harnesses/skills/ms-rank
```

@tab Hermes 爱马仕

```bash
hermes skills install fanxuankai/cli-anything-harnesses/skills/ms-rank --force
```

:::

---

### ☁️ ms-cloud-resource · 云端资源与站点种子

> 用 `cli-anything-ms` 查询云端资源和站点种子，并可继续发起下载、转存和跟踪任务进度

**工作流程：**

1. **解析查询意图** — 识别关键词、TMDB ID、页码、贡献者 ID、季/集等筛选条件；支持「按体积排序」「看最新发布」
2. **查询资源** — 支持关键词搜索和 TMDB ID 搜索；TMDB 搜索时需明确电影或电视剧类型；结果同时包含网盘资源和站点种子
3. **展示结果** — 最多展示 5 条，说明标题、大小、网盘、贡献者、TMDB、链接类型、是否可下载
4. **确认执行动作** — 只有用户明确说「下载」「转存」时才提交，基于本轮搜索结果中的 `download_request` 执行：
   - 网盘资源（云分享/云下载）提交转存或离线下载任务
   - 站点种子（PT/磁力）直接提交到下载器
5. **任务跟踪** — 「下载好了吗」「转存完成没」时按资源类型查进度：网盘资源查云存储任务（状态、进度百分比、失败原因），站点种子查下载任务

**触发场景举例：**
- 查庆余年云端资源
- 搜网盘资源
- 下载第 1 个云端资源
- 转存这个资源
- 帮我下这个种子
- 找 TMDB 95842 第 1 季第 46 集
- 看贡献者 931 的资源

::: tip 💡 说明
- 不手写 `download_request`，只使用搜索结果里已有的字段
- 资源不支持的使用方式会被前置拦截（如网盘资源标注的能力不符）
- 不自动批量下载全部结果，除非用户明确要求
- 只查任务进度，不重试、不取消、不清空任务
- 不删除、不移动、不重命名云端文件
:::

**安装：**

::: tabs

@tab npx

```bash
npx skills add fanxuankai/cli-anything-harnesses --skill ms-cloud-resource
```

@tab OpenClaw 小龙虾

在 OpenClaw 对话框中粘贴 GitHub 链接：

```text
请安装技能 https://github.com/fanxuankai/cli-anything-harnesses/tree/main/skills/ms-cloud-resource
```

或使用命令行：

```bash
openclaw skills install fanxuankai/cli-anything-harnesses/skills/ms-cloud-resource
```

@tab Hermes 爱马仕

```bash
hermes skills install fanxuankai/cli-anything-harnesses/skills/ms-cloud-resource --force
```

:::

---

### 🏅 ms-cloud-resource-rank · 云端资源贡献榜

> 用 `cli-anything-ms` 查看云端资源 HASH 上报贡献榜

**工作流程：**

1. **识别榜单类型** — 支持今日榜、7 天榜、总榜、我的贡献等
2. **获取榜单数据** — 查询贡献排名与数量统计
3. **格式化展示** — 输出简洁榜单摘要，避免原始 JSON

**触发场景举例：**
- 云端资源贡献榜
- 洪荒封神榜
- 荣耀数量榜
- 今日榜 / 7 天榜 / 总榜
- 我的贡献排名

**安装：**

::: tabs

@tab npx

```bash
npx skills add fanxuankai/cli-anything-harnesses --skill ms-cloud-resource-rank
```

@tab OpenClaw 小龙虾

在 OpenClaw 对话框中粘贴 GitHub 链接：

```text
请安装技能 https://github.com/fanxuankai/cli-anything-harnesses/tree/main/skills/ms-cloud-resource-rank
```

或使用命令行：

```bash
openclaw skills install fanxuankai/cli-anything-harnesses/skills/ms-cloud-resource-rank
```

@tab Hermes 爱马仕

```bash
hermes skills install fanxuankai/cli-anything-harnesses/skills/ms-cloud-resource-rank --force
```

:::

---

### 🗂️ ms-media-server · 媒体服务器状态与同步

> 用 `cli-anything-ms` 查看媒体服务器状态、同步信息、媒体库、播放数据，并支持库内实时检索

**工作流程：**

1. **默认查询** — 用户说「媒体服务器」「同步信息」时，列出服务器名称、类型、是否开启、电影数、电视剧数、同步耗时等
2. **服务器选择** — 用户给了名称按名称匹配；有多个候选时让用户确认；未指定时先列出让用户选择
3. **常用查询** — 支持媒体库列表、同步统计、同步明细（含漏集筛选）、正在播放、最近添加、继续观看
4. **库内检索** — 「库里有没有 XX」「我库里的电影/剧」「帮我在 Emby 里搜 XX」时在媒体服务器实时库中检索，直接回答有没有并列出匹配条目；想看某片时会把媒体服务器的播放页链接直接给出
5. **立即同步** — 只有用户明确说「同步」「立即同步」「刷新媒体库」时才执行，执行后只说明任务已发起

**触发场景举例：**
- 媒体服务器状态
- 媒体服务同步信息
- 库里有没有流浪地球
- 媒体库列表
- 同步历史
- 正在播放 / 最近添加 / 继续观看
- 立即同步媒体库

::: tip 💡 说明
- 默认只读，不删除服务器、不编辑配置
- 不直接调用后端接口，统一通过 `cli-anything-ms`
:::

**安装：**

::: tabs

@tab npx

```bash
npx skills add fanxuankai/cli-anything-harnesses --skill ms-media-server
```

@tab OpenClaw 小龙虾

在 OpenClaw 对话框中粘贴 GitHub 链接：

```text
请安装技能 https://github.com/fanxuankai/cli-anything-harnesses/tree/main/skills/ms-media-server
```

或使用命令行：

```bash
openclaw skills install fanxuankai/cli-anything-harnesses/skills/ms-media-server
```

@tab Hermes 爱马仕

```bash
hermes skills install fanxuankai/cli-anything-harnesses/skills/ms-media-server --force
```

:::

---

### 📊 ms-site-state · 站点状态与统计

> 用 `cli-anything-ms` 查看站点状态、上传下载量、魔力值、做种与签到状态

**工作流程：**

1. **默认查询** — 用户说「站点状态」「站点统计」时，先查总体上传量、下载量、做种数量、做种体积和魔力值，再列出重点站点状态
2. **站点列表** — 支持按启用状态、类型（统计/签到/搜索）、站点名称筛选
3. **单站查询** — 用户指定站点名称时，查询该站最新数据；多个候选时让用户确认
4. **手动刷新** — 用户觉得数据旧并明确要求「刷新站点数据」时发起刷新任务，提交后建议稍后重查；这是本技能唯一的写操作
5. **展示规则** — 最多展示前 10 个站点，重点说明站点名、是否登录、签到状态、分享率、上传/下载量、魔力值、做种数据

**触发场景举例：**
- 站点状态
- 站点统计
- 各站上传下载
- 哪些站没登录
- 今天站点数据

::: tip 💡 说明
- 此技能默认只读，不签到、不修改站点配置；仅「刷新站点数据」这一个显式写操作
- 有未登录站点时会明确点名
:::

**安装：**

::: tabs

@tab npx

```bash
npx skills add fanxuankai/cli-anything-harnesses --skill ms-site-state
```

@tab OpenClaw 小龙虾

在 OpenClaw 对话框中粘贴 GitHub 链接：

```text
请安装技能 https://github.com/fanxuankai/cli-anything-harnesses/tree/main/skills/ms-site-state
```

或使用命令行：

```bash
openclaw skills install fanxuankai/cli-anything-harnesses/skills/ms-site-state
```

@tab Hermes 爱马仕

```bash
hermes skills install fanxuankai/cli-anything-harnesses/skills/ms-site-state --force
```

:::

---

### ✅ ms-site-signin · 站点签到

> 用 `cli-anything-ms` 查看站点签到记录，或执行指定站点/全部站点签到

**工作流程：**

1. **查看签到记录** — 用户问「签到记录」「哪些站签到失败」时查询签到历史（支持只看失败记录），优先点名失败、未登录或异常站点
2. **执行签到** — 只有用户明确说「签到」「执行签到」「给某站签到」时才执行；指定站点签到前先确认目标 ID
3. **全部签到** — 用户明确要求全部已开启签到的站点签到时执行，执行后建议查看签到记录确认结果

**触发场景举例：**
- 站点签到记录
- 哪些站点签到失败
- 给馒头签到
- 执行站点签到
- 全部站点签到

::: tip 💡 说明
- 用户只是问「站点状态」「是否已签到」时，不执行签到
- 站点名称匹配到多个候选时，先让用户确认
- 不修改站点配置、Cookie 或开关
:::

**安装：**

::: tabs

@tab npx

```bash
npx skills add fanxuankai/cli-anything-harnesses --skill ms-site-signin
```

@tab OpenClaw 小龙虾

在 OpenClaw 对话框中粘贴 GitHub 链接：

```text
请安装技能 https://github.com/fanxuankai/cli-anything-harnesses/tree/main/skills/ms-site-signin
```

或使用命令行：

```bash
openclaw skills install fanxuankai/cli-anything-harnesses/skills/ms-site-signin
```

@tab Hermes 爱马仕

```bash
hermes skills install fanxuankai/cli-anything-harnesses/skills/ms-site-signin --force
```

:::

---

### ⬇️ ms-download · 下载任务管理

> 用 `cli-anything-ms` 查看下载器、下载中任务与下载历史，并执行暂停/恢复/删除

**工作流程：**

1. **默认查询** — 用户说「下载任务」「下载中」时，展示下载中任务的标题、进度、速度、状态、是否暂停、站点和保存路径（最多 10 条）
2. **下载器** — 用户问「下载器」「下载器状态」时，说明下载器名称、类型、是否开启、是否默认、地址等（不展示账号密码）
3. **下载历史** — 用户问「下载历史」时查询历史记录，支持按标题、类型或站点筛选
4. **任务选择** — 用户给了下载 ID 直接使用；只说「第几个」「这个下载」时基于当前结果选择；不能确定时先让用户确认
5. **变更操作** — 只有用户明确要求时才执行暂停/恢复/删除；只有用户明确说「同时删除文件」时删除命令才附带删除文件

**触发场景举例：**
- 下载任务
- 下载器状态
- 下载中
- 下载历史
- 暂停这个下载
- 恢复下载
- 删除下载任务

::: tip 💡 说明
- 默认只读，不新增种子/磁力/订阅下载
- 不清空下载历史、不编辑下载器配置、不删除下载器
- 执行后只说明操作已提交，不承诺任务已完成
:::

**安装：**

::: tabs

@tab npx

```bash
npx skills add fanxuankai/cli-anything-harnesses --skill ms-download
```

@tab OpenClaw 小龙虾

在 OpenClaw 对话框中粘贴 GitHub 链接：

```text
请安装技能 https://github.com/fanxuankai/cli-anything-harnesses/tree/main/skills/ms-download
```

或使用命令行：

```bash
openclaw skills install fanxuankai/cli-anything-harnesses/skills/ms-download
```

@tab Hermes 爱马仕

```bash
hermes skills install fanxuankai/cli-anything-harnesses/skills/ms-download --force
```

:::

---

### 🖥️ ms-nas-state · NAS 系统状态

> 查 NAS 系统信息、系统状态、硬件状态、运行状态，或想查看 CPU、内存、存储、磁盘温度、网络、风扇、UPS 信息时使用，调用 `cli-anything-ms` 获取最新状态并用中文总结

::: tip 💡 支持设备
目前已支持 **极空间、绿联、飞牛、PVE** 四种设备。其中极空间、绿联、飞牛支持系统消息推送。可在修仙秘籍安装对应设备的服务助手即可体验。

**所有 NAS 信息都支持多设备！** 可同时管理和查看多台 NAS 的状态。
:::

**工作流程：**

1. **确认 CLI 可用** — 确保 `cli-anything-ms` 已安装，如果安装失败直接转述原因并停止
2. **调用 NAS 信息接口** — 固定执行 `cli-anything-ms --json system nas-info`，不调用旧的 `zspace_service_assistant` 插件接口
3. **理解返回结果** — 返回结果是 NAS 设备列表，默认总结全部设备；用户指定设备名或型号时只回答匹配设备。每个设备可能包含 `raw` 字符串，可尝试按 JSON 解析补充扩展信息
4. **提取重点信息** — 优先提取以下字段：
   - 设备名称、厂商、型号、在线状态、系统版本、运行时长
   - CPU 占用、温度
   - 内存总量、已用量、使用率
   - 存储空间容量、已用空间、使用率
   - 磁盘型号、容量、温度、状态、是否待机
   - 网络 IP、上下行速度
   - 风扇转速
   - UPS 厂商、型号、连接状态、电池或供电信息
5. **总结回复** — 先给一句整体状态概述，多台 NAS 时逐台简洁总结，再补充关键指标摘要；只问某类指标时优先回答该部分

**触发场景举例：**
- 查 NAS 系统信息
- 查 CPU 温度
- 查内存使用率
- 查磁盘状态
- 查网络速度
- 查存储空间
- 查 UPS 信息

::: tip 💡 异常提示规则
- NAS 状态不是在线时，会显式提示
- CPU、磁盘或 SSD 温度明显偏高时，会显式提示关注
- 内存或存储空间使用率较高时，会显式提示
- 某块磁盘状态不正常时，会点名指出
- 接口调用失败时直接转述失败原因，不编造系统状态
- 不做历史对比和趋势分析，不主动给出修复建议（除非用户追问）
:::

**效果演示：**

<img src="./images/skill/极空间nas系统状态.png" alt="NAS系统状态演示" style="max-width:100%;border-radius:8px;" />

**安装：**

::: tabs

@tab npx

```bash
npx -y @openclaw/skills install fanxuankai/cli-anything-harnesses/skills/ms-nas-state --force
```

@tab OpenClaw 小龙虾

在 OpenClaw 对话框中粘贴 GitHub 链接：

```text
请安装技能 https://github.com/fanxuankai/cli-anything-harnesses/tree/main/skills/ms-nas-state
```

或使用命令行：

```bash
openclaw skills install fanxuankai/cli-anything-harnesses/skills/ms-nas-state
```

@tab Hermes 爱马仕

```bash
hermes skills install fanxuankai/cli-anything-harnesses/skills/ms-nas-state --force
```

:::

---

### 🩺 ms-status · 系统总览与体检

> 一句话总览 ms 系统运行情况、查看系统体检结果和版本更新状态

**工作流程：**

1. **一句话总览** — 「系统状态」「家里服务怎么样」「今天概况」时查看工作台聚合概览，像正常汇报一样总结站点、系统、媒体库、播放四个方面的关键数字，异常或为零的项点名
2. **系统体检** — 「体检怎么样」「有没有什么问题」时先看低成本的即时概览（资源占用、任务队列）；数值明显偏高会显式提示；追问明细时再看完整体检报告，只点名非正常检查项并转述结论和建议
3. **版本状态** — 「有没有新版本」时查询版本更新状态，有更新时告知最新版本号，只提示不引导升级

**触发场景举例：**
- 系统状态
- 家里服务怎么样
- 体检有没有问题
- 有没有新版本

::: tip 💡 说明
- 硬件细节（磁盘温度、风扇、UPS）问的是 NAS 本身，交给 `ms-nas-state`；这个技能只管 ms 服务侧
- 不做任何变更操作（不重测体检项、不忽略问题、不升级系统）
:::

**安装：**

::: tabs

@tab npx

```bash
npx -y @openclaw/skills install fanxuankai/cli-anything-harnesses/skills/ms-status --force
```

@tab OpenClaw 小龙虾

在 OpenClaw 对话框中粘贴 GitHub 链接：

```text
请安装技能 https://github.com/fanxuankai/cli-anything-harnesses/tree/main/skills/ms-status
```

或使用命令行：

```bash
openclaw skills install fanxuankai/cli-anything-harnesses/skills/ms-status
```

@tab Hermes 爱马仕

```bash
hermes skills install fanxuankai/cli-anything-harnesses/skills/ms-status --force
```

:::

---

### 🔧 cli-anything-cliproxyapi · CLIProxyAPI 代理管理

> 通过 Management API 管理 CLIProxyAPI 代理服务器的完整 CLI 工具

**连接配置：**

优先级：`--url/--key` 参数 > 环境变量 `CPA_URL/CPA_KEY` > `~/.cliproxyapi-cli.yaml` 配置文件

```bash
# 方式一：环境变量
export CPA_URL=http://127.0.0.1:8317
export CPA_KEY=your-management-key

# 方式二：保存到配置文件
cli-anything-cliproxyapi config save-connection --url http://127.0.0.1:8317 --key your-key
```

**功能模块一览：**

| 模块 | 主要命令 | 说明 |
|---|---|---|
| `server` | `status` / `version` | 健康检查、获取最新版本 |
| `config` | `get` / `set-yaml` / `proxy-url` / `routing` / `retry` | 配置读写 |
| `auth` | `list` / `upload` / `download` / `status` / `codex-quota` | 认证文件管理 |
| `oauth` | `login` / `iflow-cookie` / `callback` / `status` | OAuth 登录 |
| `keys` | `list` / `add` / `delete`（支持 claude / gemini / codex / openai-compat / vertex） | API 密钥管理 |
| `models` | `list` / `aliases` / `excluded` | 模型管理 |
| `usage` | `stats` / `export` / `import` | 使用统计 |
| `logs` | `list` / `clear` / `errors` / `by-id` | 日志管理 |
| `amp` | `config` / `upstream-url` / `model-mappings` | Amp 集成 |
| `api-call` | `-X METHOD --url URL` | 通过代理发起通用请求 |

**OAuth 支持的登录提供商：**
`anthropic` / `codex` / `gemini` / `antigravity` / `qwen` / `kimi` / `iflow`

**使用示例：**

```bash
# 检查服务器状态
cli-anything-cliproxyapi server status

# 列出所有认证文件
cli-anything-cliproxyapi auth list

# 获取已启用 Codex 凭证额度
cli-anything-cliproxyapi auth codex-quota

# 发起 Claude OAuth 登录
cli-anything-cliproxyapi oauth login anthropic

# 添加 API 密钥
cli-anything-cliproxyapi keys claude add --api-key "sk-ant-..."

# 查看使用统计
cli-anything-cliproxyapi usage stats
```

**安装：**

::: tabs

@tab npx

```bash
npx -y @openclaw/skills install fanxuankai/cli-anything-harnesses/skills/cli-anything-cliproxyapi --force
```

@tab OpenClaw 小龙虾

在 OpenClaw 对话框中粘贴 GitHub 链接：

```text
请安装技能 https://github.com/fanxuankai/cli-anything-harnesses/tree/main/skills/cli-anything-cliproxyapi
```

或使用命令行：

```bash
openclaw skills install fanxuankai/cli-anything-harnesses/skills/cli-anything-cliproxyapi
```

@tab Hermes 爱马仕

```bash
hermes skills install fanxuankai/cli-anything-harnesses/skills/cli-anything-cliproxyapi --force
```

:::

---

## ❓ 常见问题

### 🔧 安装失败

**Q：执行安装命令后报错 `command not found: npx`？**

**A：** 说明本机未安装 Node.js。请先安装 Node.js（建议 v18 及以上）：

- 官网下载：<https://nodejs.org>
- 或使用 nvm：`nvm install --lts`

安装完成后重新执行安装命令。

---

**Q：执行安装命令后报错 `command not found: hermes`？**

**A：** 说明 Hermes 爱马仕未安装或未加入 PATH。请参考 Hermes 官方文档完成安装，或改用 npx 方式安装技能。

---

**Q：OpenClaw 对话框输入 GitHub 链接后没有反应或提示找不到技能？**

**A：** 请检查以下几点：
1. ✅ 确认粘贴的是完整 GitHub URL，格式为 `https://github.com/...`，不是短路径
2. ✅ 确认网络可以正常访问 GitHub，必要时配置代理
3. ✅ 确认 OpenClaw 版本支持从 GitHub 子目录安装技能（建议使用最新版本）
4. 🔄 如仍无法安装，改用命令行方式：`openclaw skills install fanxuankai/cli-anything-harnesses/skills/<技能名>`

---

**Q：安装时提示 `pip install cli-anything-ms` 失败？**

**A：** 常见原因及解决方法：

- **网络问题**：配置 pip 国内镜像源：
  ```bash
  pip install cli-anything-ms -i https://pypi.tuna.tsinghua.edu.cn/simple
  ```
- **Python 版本过低**：需要 Python 3.9 及以上，执行 `python --version` 确认版本
- **权限问题**：尝试加 `--user` 参数：
  ```bash
  pip install cli-anything-ms --user
  ```

---

### 🎯 技能不生效

**Q：技能安装成功，但 AI 没有按技能流程执行，直接给了普通回复？**

**A：** 技能安装后需要在新会话中才能生效（OpenClaw 在会话开始时加载技能快照）。请关闭当前对话，重新开启一个新会话后再试。

---

**Q：技能安装成功，执行时提示 `cli-anything-ms: command not found`？**

**A：** 技能依赖的 CLI 工具未安装。执行以下命令安装：

```bash
pip install cli-anything-ms
```

安装完成后确认可用：

```bash
cli-anything-ms --version
```

如果安装后仍提示找不到命令，可能是 pip 安装路径不在 PATH 中，尝试：

```bash
python -m pip install cli-anything-ms
# 或
pip install cli-anything-ms --user
# 然后将 ~/.local/bin 加入 PATH
```

---

**Q：执行订阅时提示「还没有安装秘籍」或「插件未启用」？**

**A：** 这是 Media Saber 后端返回的错误，说明对应插件未安装或未启用：
- `ms-sub` / `ms-gap-filler` / `ms-calendar` / `ms-recommend` / `ms-rank` / `ms-cloud-resource` / `ms-cloud-resource-rank` / `ms-media-server` / `ms-site-state` / `ms-site-signin` / `ms-download` / `ms-status`：确认 Media Saber 已正常运行，且 `cli-anything-ms` 配置的连接地址和 API Key 正确
- `ms-nas-state`：需要在 Media Saber 修仙秘籍中安装对应设备的服务助手（极空间/绿联/飞牛/PVE）

---

**Q：`ms-nas-state` 返回空列表或「NAS 状态数据结构异常」？**

**A：** 可能原因：
1. Media Saber 中未安装对应设备的服务助手（需在修仙秘籍中安装极空间/绿联/飞牛/PVE 对应的服务助手）
2. NAS 设备当前离线或无法连接
3. Media Saber 与 NAS 之间的通信异常

建议先在 Media Saber 修仙秘籍中确认已安装并启用对应设备的服务助手，再重试。

---

### 🔄 更新技能

**Q：如何更新已安装的技能到最新版本？**

**A：** 重新执行安装命令并带上 `--force` 参数即可覆盖旧版本：

::: tabs

@tab npx 首次安装

```bash
# 首次安装或交互式添加：
npx skills add fanxuankai/cli-anything-harnesses --skill <技能名>
```

@tab npx 强制覆盖 / 更新（建议用于已装技能）

```bash
# 强制覆盖已安装的同名技能（脚本或确保刷新时使用）：
npx -y @openclaw/skills install fanxuankai/cli-anything-harnesses/skills/<技能名> --force
```

@tab Hermes 爱马仕

```bash
hermes skills install fanxuankai/cli-anything-harnesses/skills/<技能名> --force
```

:::

---

## 📚 相关文档

- 🤖 [智能体介绍](./README.md) - AI 功能模块总览
- 🔌 [MCP 服务文档](./mcp.md) - MCP 集成和配置指南
- ⚙️ [基础设置](/usage/system_settings/basic_settings.html) - 配置 AI API 相关设置
- 🔑 [我的信息](/usage/main_page/my_info.html) - 获取和管理 API Key

---

## 🔗 相关仓库

- 📦 技能包仓库：<https://github.com/fanxuankai/cli-anything-harnesses>
