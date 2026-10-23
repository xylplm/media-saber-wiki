# AGENTS.md

Media Saber 用户手册（VuePress 2 + vuepress-theme-hope）。独立克隆本仓库时的 AI 协作约束；本仓库详细规范见 `.kiro/steering/05-wiki.md`（通用规范见同目录 `00-common.md`）；在完整工作区内开发时以工作区 `.kiro/steering/` 为最全版本。

## 语言

- 始终用简体中文回复与写 commit message；一句话言简意赅

## 硬约束

- 文档**面向最终用户**：以用户视角写「能做什么、怎么操作」，不写开发者内部术语
- 使用项目主题化命名（修仙秘籍/秘术宝阁/启灵/封印/归墟/天序/拨序等）
- Frontmatter 规范：目录页 `article: false` + `dir.text/order`；每模块目录 `README.md` 为入口页
- 图片放对应目录 `images/` 子目录，相对路径引用
- 文档内容必须与实际前端交互保持同步，功能重构后及时更新

## 本地预览

```bash
npm run dev
```
