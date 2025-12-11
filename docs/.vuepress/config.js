import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

const nav = [
  { text: '主页', link: '/' },
  {
    text: '新手指引',
    children: [
      { text: '开始', link: '/guide/start/info' },
      { text: '如何安装', link: '/guide/install/env' },
      { text: '如何更新', link: '/guide/update_version/dc' },
      { text: '初始化配置', link: '/guide/init/initialize' },
      { text: '进阶教程', link: '/guide/advanced/start' },
    ],
  },
  {
    text: '使用文档',
    children: [
      { text: '首页', link: '/docs/main_page/index/' },
      { text: '智能体', link: '/docs/intelligent_agent/agent/' },
      { text: '媒体服务', link: '/docs/media_service/overview/' },
      { text: '寻影探剧', link: '/docs/search_drama/overview/' },
      { text: '搜索任务', link: '/docs/search/overview/' },
      { text: '站点管理', link: '/docs/site_management/overview/' },
      { text: '订阅管理', link: '/docs/subscription_management/overview/' },
      { text: '下载管理', link: '/docs/download_management/overview/' },
      { text: '目录管理', link: '/docs/directory_management/overview/' },
      { text: '媒体整理', link: '/docs/media_organization/overview/' },
      { text: '云端存储', link: '/docs/cloud_storage/overview/' },
      { text: '修仙秘籍', link: '/docs/cultivation_secrets/network_diagnosis/' },
      { text: '系统设置', link: '/docs/system_settings/overview/' },
      { text: '其它', link: '/docs/other/glossary' },
    ],
  },
  {
    text: '客户端',
    children: [
      { text: '开始', link: '/client/start/info' },
      { text: 'iOS客户端', link: '/client/ios/install' },
      { text: 'Android客户端', link: '/client/android/install' },
      { text: '浏览器扩展', link: '/client/brower_tool' },
    ],
  },
  { text: '更新日志', link: '/update_version' },
  { text: '鸣谢', link: '/Acknowledgements' },
  {
    text: '反馈',
    link: 'https://github.com/xylplm/media-saber-public/issues',
  },
]

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'Media Saber Wiki',
  description: 'Media Saber Wiki 文档',

  theme: defaultTheme({
    logo: '/img/logo.png',
    logoDark: '/img/logo-w.png',

    navbar: nav,

    // 简单的sidebar配置，允许自动生成
    sidebar: 'auto',

    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',

    docsRepositoryUrl: 'https://github.com/xylplm/media-saber-wiki',
    docsBranch: 'main',
    docsDir: 'docs',
  }),

  bundler: viteBundler(),
})
