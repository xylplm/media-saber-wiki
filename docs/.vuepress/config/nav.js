module.exports = [
  { text: "主页", link: "/" },

  {
    text: '新手指引',
    link: '/guide/start/info/',
    items: [
      { text: '开始', link: '/guide/start/info/' },
      { text: '如何安装', link: '/guide/install/start/' },
      { text: '如何更新', link: '/guide/update_version/dc/'},
      { text: '初始化配置', link: '/guide/init/initialize/' },
      { text: '进阶教程', link: '/guide/advanced/start/' },
    ],
  },

  {
    text: '使用文档',
    link: '/docs/main_page/index/',
    items: [
      { text: '首页', link: '/docs/main_page/index/' },
      { text: '媒体服务', link: '/docs/server/library/' },
      { text: '寻影探剧', link: '/docs/explore_series/drama_rankings/' },
      { text: '搜索', link: '/docs/search/search/' },
      { text: '站点管理', link: '/docs/sites/site/' },
      { text: '订阅管理', link: '/docs/subscription_management/movie_subscription/' },
      { text: '下载管理', link: '/docs/download_management/current_downloads/' },
      { text: '目录管理', link: '/docs/directory_management/file_management/' },
      { text: '媒体整理', link: '/docs/media_organization/manual_identification/'},
      { text: '网盘管理', link: '/docs/cloud_management/115/'},
      { text: '修仙秘籍', link: '/docs/cultivation_secrets/main/'},
      { text: '系统设置', link: '/docs/system_settings/basic_settings/'},
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
      { text: "浏览器扩展", link: "/client/brower_tool/" },
    ],
  },

  { text: "更新日志", link: "/update_version/" },

  { text: "鸣谢", link: "/Acknowledgements/" },
  {
    text: "反馈",
    link: "https://github.com/xylplm/media-saber-public/issues",
  }
];