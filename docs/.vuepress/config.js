import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { searchPlugin } from '@vuepress/plugin-search'
import { markdownImagePlugin } from '@vuepress/plugin-markdown-image'
import { linksCheckPlugin } from '@vuepress/plugin-links-check'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'

const nav = [
  { text: "主页", link: "/" },
  {
    text: "新手指引",
    children: [
      { text: "开始", link: "/guide/start/info" },
      { text: "如何安装", link: "/guide/install/env" },
      { text: "如何更新", link: "/guide/update_version/dc" },
      { text: "初始化配置", link: "/guide/init/initialize" },
      { text: "进阶教程", link: "/guide/advanced/start" },
    ],
  },
  {
    text: "使用文档",
    children: [
      { text: "首页", link: "/usage/main_page/" },
      { text: "智能体", link: "/usage/ai/ai" },
      { text: "媒体服务", link: "/usage/media_services/" },
      { text: "寻影探剧", link: "/usage/movie_tv_discovery/" },
      { text: "搜索任务", link: "/usage/search_tasks/" },
      { text: "站点管理", link: "/usage/sites/" },
      { text: "订阅管理", link: "/usage/subscription_management/" },
      { text: "下载管理", link: "/usage/download_management/" },
      { text: "目录管理", link: "/usage/directory_management/" },
      { text: "媒体整理", link: "/usage/media_organization/" },
      { text: "云端存储", link: "/usage/cloud_storage/" },
      { text: "修仙秘籍", link: "/usage/cultivation_secrets/" },
      { text: "系统设置", link: "/usage/system_settings/" },
      { text: "其它", link: "/usage/other/glossary" },
    ],
  },
  {
    text: "客户端",
    children: [
      { text: "开始", link: "/client/" },
      { text: "iOS客户端", link: "/client/ios/" },
      { text: "Android客户端", link: "/client/android/" },
      { text: "浏览器扩展", link: "/client/brower_tool" },
    ],
  },
  { text: "更新日志", link: "/update_version/" },
  { text: "鸣谢", link: "/acknowledgements/" },
  {
    text: "反馈",
    link: "https://github.com/xylplm/media-saber-public/issues",
  },
];

export default defineUserConfig({
  lang: "zh-CN",

  title: "Media Saber Wiki",
  description: "Media Saber Wiki 文档",

  theme: defaultTheme({
    logo: "/img/logo.png",
    logoDark: "/img/logo-w.png",

    navbar: nav,

    // sidebar 根据第一层目录生成
    sidebar: 'heading',

    editLinkText: "在 GitHub 上编辑此页",
    lastUpdatedText: "上次更新",
    contributorsText: "贡献者",

    docsRepositoryUrl: "https://github.com/xylplm/media-saber-wiki",
    docsBranch: "main",
    docsDir: "docs",
  }),

  bundler: viteBundler(),
  plugins: [
    // 搜索插件
    searchPlugin({
      // 配置项
    }),
    // Markdown 图片增强插件
    markdownImagePlugin({
      // 启用 figure
      figure: true,
      // 启用图片懒加载
      lazyload: true,
      // 启用图片标记
      mark: true,
      // 启用图片大小
      size: true,
    }),
    // 链接检查插件
    linksCheckPlugin({
      // 选项
      dev: true, // 在开发环境中启用链接检查
      build: true, // 在构建环境中启用链接检查
    }),
    // PrismJS 语法高亮插件
    prismjsPlugin({
      // 配置项
    }),
  ],
});
