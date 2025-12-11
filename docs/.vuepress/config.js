import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

const nav = [
  { text: '主页', link: '/' },
  {
    text: '新手指引',
    children: [
      { text: '开始', link: '/01.新手指引/01.开始/' },
      { text: '如何安装', link: '/01.新手指引/02.如何安装/' },
      { text: '如何更新', link: '/01.新手指引/03.如何更新/' },
      { text: '初始化配置', link: '/01.新手指引/04.初始化配置/' },
      { text: '进阶教程', link: '/01.新手指引/05.进阶教程/' },
    ],
  },
  {
    text: '使用文档',
    children: [
      { text: '首页', link: '/02.使用文档/' },
      { text: '智能体', link: '/02.使用文档/02.智能体/' },
      { text: '媒体服务', link: '/02.使用文档/03.媒体服务/' },
      { text: '寻影探剧', link: '/02.使用文档/04.寻影探剧/' },
      { text: '搜索任务', link: '/02.使用文档/05.搜索任务/' },
      { text: '站点管理', link: '/02.使用文档/06.站点管理/' },
      { text: '订阅管理', link: '/02.使用文档/07.订阅管理/' },
      { text: '下载管理', link: '/02.使用文档/07.下载管理/' },
      { text: '目录管理', link: '/02.使用文档/08.目录管理/' },
      { text: '媒体整理', link: '/02.使用文档/09.媒体整理/' },
      { text: '云端存储', link: '/02.使用文档/11.云端存储/' },
      { text: '修仙秘籍', link: '/02.使用文档/12.修仙秘籍/' },
      { text: '系统设置', link: '/02.使用文档/13.系统设置/' },
      { text: '其它', link: '/02.使用文档/20.其它/' },
    ],
  },
  {
    text: '客户端',
    children: [
      { text: '开始', link: '/03.客户端/01.开始/' },
      { text: 'iOS客户端', link: '/03.客户端/03.IOS客户端/' },
      { text: 'Android客户端', link: '/03.客户端/02.Android客户端/' },
      { text: '浏览器扩展', link: '/03.客户端/04.浏览器插件/' },
    ],
  },
  { text: '更新日志', link: '/04.更新日志/' },
  { text: '鸣谢', link: '/05.鸣谢/' },
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
