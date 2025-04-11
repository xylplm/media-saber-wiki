module.exports = [
  { text: "主页", link: "/" },

  {
    text: '新手指引',
    link: '/guide/start/info/',
    items: [
      { text: '开始', link: '/guide/start/info/' },
      { text: '如何安装', link: '/guide/install/start/' },
      { text: '如何更新', link: '/guide/update_version/ugreen/'},
      { text: '初始化配置', link: '/guide/init/setting/' },
      { text: '进阶教程', link: '/guide/advanced/start/' },
    ],
  },

  {
    text: '使用文档',
    link: '/docs/server/library/',
    items: [
      { text: '媒体服务', link: '/docs/server/library/' },
      { text: '站点管理', link: '/docs/sites/site/' },
      { text: '媒体管理', link: '/docs/media/subscribe/'},
      { text: '我的插件', link: '/docs/plugin/info/'},
      { text: '系统设置', link: '/docs/setting/base/'},
      { text: '其它', link: '/docs/other/glossary/'},
    ],
  },

  {
    text: '客户端',
    link: '/client/start/info/',
    items: [
      { text: '开始', link: '/client/start/info/' },
      { text: 'IOS客户端', link: '/client/ios/install/' },
      { text: 'Android客户端', link: '/client/android/install/' },
    ],
  },

  { text: "浏览器扩展", link: "/brower_tool/" },

  { text: "更新日志", link: "/update_version/" },

  { text: "赞赏", link: "/zanshang/" },
  {
    text: "反馈",
    link: "https://github.com/xylplm/media-saber-wiki/issues",
  },
  { text: "Docker", link: "https://hub.docker.com/r/xylplm/media-saber" },
];