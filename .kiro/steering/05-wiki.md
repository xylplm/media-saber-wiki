---
inclusion: fileMatch
fileMatchPattern: "**"
---

# Wiki 文档规范（media-saber-wiki）

## 技术栈

- VuePress 2 + vuepress-theme-hope
- Markdown 编写，支持 frontmatter 元数据

## 目录结构

- 文档源文件在 `src/` 目录下
- 按功能模块分目录（如 `src/usage/cultivation_secrets/`）
- 每个目录的 `README.md` 是该模块的入口页

## 文档风格

- 以用户视角编写，描述"能做什么"和"怎么操作"
- 使用项目主题化命名（修仙秘籍/秘术宝阁/启灵/封印/归墟等）
- 适当使用 emoji 作为章节标题前缀增加可读性
- 插件列表用表格形式（插件名 + 一句话说明），紧凑易读

## Frontmatter 规范

```yaml
---
title: 页面标题
article: false  # 目录页设为 false
dir:
  text: 侧边栏显示名
  order: 排序数字
tags:
  - 相关标签
---
```

## 图片引用

- 图片放在对应目录的 `images/` 子目录下
- 使用相对路径引用：`./images/xxx.jpg`
- 建议宽度标注：`<div align="center"><img src="./images/xx.jpg" width="800"/></div>`

## 本地预览

```bash
cd media-saber-wiki
npm run dev
```

## 注意事项

- 文档内容需要与实际前端交互保持同步
- 功能重构后及时更新对应的用户文档
- 不写开发者内部术语，面向最终用户
