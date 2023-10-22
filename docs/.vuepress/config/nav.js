module.exports = [
  { text: "主页", link: "/" },

  {
    text: '新手指引',
    link: '/guide/start/info/',
    items: [
      { text: '开始', link: '/guide/start/info/' },
      { text: '如何安装', link: '/guide/install/start/' },
      { text: '初始化配置', link: '/guide/init/setting/' },
      { text: '如何更新', link: '/guide/update_version/start/'},
    ],
  },

  {
    text: '使用文档',
    link: '/docs/start/info/',
    items: [
      { text: '开始', link: '/docs/start/info/' },
      { text: '功能使用', link: '/docs/use/media_library/' },
      { text: '系统设置', link: '/docs/setting/base/' },
      { text: '系统插件', link: '/docs/plugin/info/'},
      { text: '辅助功能', link: '/docs/tools/info/'},
      { text: '外联服务', link: '/docs/link_service/info/'},
      { text: '站点配置', link: '/docs/sites/setting/'},
      { text: '媒体服务', link: '/docs/setting/ugos/'},
      { text: '其它', link: '/docs/other/glossary/'},
    ],
  },

  {
    text: '客户端',
    link: '/client/start/info/',
    items: [
      { text: '开始', link: '/guide/start/info/' },
      { text: 'IOS客户端', link: '/client/ios/info/' },
      { text: 'Android客户端', link: '/client/android/info/' },
    ],
  },

  { text: "更新日志", link: "/update_version/" },

  { text: "赞助", link: "/zhanzhu/" },
  {
    text: "反馈",
    link: "https://github.com/xylplm/media-saber-wiki/issues",
  },
  { text: "Docker", link: "https://hub.docker.com/r/xylplm/media-saber" },
];