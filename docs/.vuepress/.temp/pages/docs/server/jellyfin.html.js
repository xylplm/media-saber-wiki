import comp from "D:/myGithub/media-saber-wiki/docs/.vuepress/.temp/pages/docs/server/jellyfin.html.vue"
const data = JSON.parse("{\"path\":\"/docs/server/jellyfin\",\"title\":\"Jellyfin\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Jellyfin\",\"article\":false,\"tags\":[\"Jellyfin\",\"媒体服务器\",\"流媒体\",\"开源\"],\"categories\":null,\"editor\":\"markdown\",\"permalink\":\"/docs/server/jellyfin\",\"date\":\"2023-09-27T12:16:17.000Z\"},\"git\":{\"updatedTime\":1754820370000,\"contributors\":[{\"name\":\"xylplm\",\"username\":\"xylplm\",\"email\":\"luoxiao123@outlook.com\",\"commits\":1,\"url\":\"https://github.com/xylplm\"},{\"name\":\"luoxiao\",\"username\":\"luoxiao\",\"email\":\"luoxiao123@outlook.com\",\"commits\":1,\"url\":\"https://github.com/luoxiao\"}],\"changelog\":[{\"hash\":\"7fe0b1a76c340a76c98c57988ac59c471ad020e3\",\"time\":1754820370000,\"email\":\"luoxiao123@outlook.com\",\"author\":\"luoxiao\",\"message\":\"fix顺序\"},{\"hash\":\"f9f9bf48314c9efdd1030bdaf662259eb8b4b2e8\",\"time\":1753411006000,\"email\":\"luoxiao123@outlook.com\",\"author\":\"xylplm\",\"message\":\"完善媒体服务相关文档\"}]},\"filePathRelative\":\"02.使用文档/03.媒体服务/07.jellyfin.md\"}")
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
