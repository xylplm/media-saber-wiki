import comp from "D:/myGithub/media-saber-wiki/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/img/logo-w.png\",\"heroText\":\"Media Saber\",\"tagline\":\"新一代智能媒体管理平台 | 高效稳定 | 功能强大 | 开箱即用\",\"actions\":[{\"text\":\"立即开始 →\",\"link\":\"/01.新手指引/01.开始/\",\"type\":\"primary\"}],\"features\":[{\"title\":\"新手指引\",\"details\":\"从零开始，快速上手Media Saber，详细的安装配置教程助你轻松入门\"},{\"title\":\"使用文档\",\"details\":\"全面的功能说明文档，让你的Media Saber发挥最大潜能\"},{\"title\":\"多端客户端\",\"details\":\"支持Android、iOS、浏览器插件，随时随地管理你的媒体库\"},{\"title\":\"AI智能体\",\"details\":\"智能识别、自动整理、MCP服务，让媒体管理更加智能化\"},{\"title\":\"寻影探剧\",\"details\":\"剧榜风云、影踪寻宝、开播日历，发现精彩内容从未如此简单\"},{\"title\":\"云端存储\",\"details\":\"多平台云端存储支持，统一管理你的媒体资源\"}],\"footer\":\"MIT License | Copyright © 2023-present xylplm\"},\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
