import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "主页",
    icon: "home",
    link: "/",
  },
  {
    text: "新手指引",
    icon: "compass",
    prefix: "/guide/",
    children: [
      { text: "开始", icon: "play", link: "start/info" },
      { text: "如何安装", icon: "download", link: "install/env" },
      { text: "如何更新", icon: "arrows-rotate", link: "update_version/dc" },
      { text: "初始化配置", icon: "gear", link: "init/initialize" },
      { text: "进阶教程", icon: "graduation-cap", link: "advanced/start" },
    ],
  },
  {
    text: "使用文档",
    icon: "book",
    prefix: "/usage/",
    children: [
      { text: "首页", icon: "house", link: "main_page/" },
      { text: "智能体", icon: "robot", link: "ai/ai" },
      { text: "媒体服务", icon: "server", link: "media_services/" },
      { text: "寻影探剧", icon: "magnifying-glass", link: "movie_tv_discovery/" },
      { text: "搜索任务", icon: "list-check", link: "search_tasks/" },
      { text: "站点管理", icon: "globe", link: "sites/" },
      { text: "订阅管理", icon: "rss", link: "subscription_management/" },
      { text: "下载管理", icon: "download", link: "download_management/" },
      { text: "目录管理", icon: "folder", link: "directory_management/" },
      { text: "媒体整理", icon: "boxes-stacked", link: "media_organization/" },
      { text: "云端存储", icon: "cloud", link: "cloud_storage/" },
      { text: "修仙秘籍", icon: "book-open", link: "cultivation_secrets/" },
      { text: "系统设置", icon: "sliders", link: "system_settings/" },
      { text: "其它", icon: "ellipsis", link: "other/" },
    ],
  },
  {
    text: "客户端",
    icon: "mobile-screen",
    prefix: "/client/",
    children: [
      { text: "客户端首页", icon: "mobile-screen", link: "" },
      { text: "iOS 客户端", icon: "fa6-brands:apple", link: "ios/" },
      { text: "Android 客户端", icon: "fa6-brands:android", link: "android/" },
      { text: "浏览器扩展", icon: "puzzle-piece", link: "brower_tool" },
    ],
  },
  { text: "更新日志", icon: "clock-rotate-left", link: "/update_version/" },
  { text: "鸣谢", icon: "heart", link: "/acknowledgements/" },
  {
    text: "反馈",
    icon: "comment",
    link: "https://github.com/xylplm/media-saber-public/issues",
  },
]);
