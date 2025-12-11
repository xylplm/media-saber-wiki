import comp from "D:/myGithub/media-saber-wiki/docs/.vuepress/.temp/pages/docs/server/library.html.vue"
const data = JSON.parse("{\"path\":\"/docs/server/library\",\"title\":\"我的媒体库\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"我的媒体库\",\"article\":false,\"tags\":[\"媒体库\",\"媒体服务器\",\"Emby\",\"Jellyfin\",\"Plex\"],\"categories\":null,\"editor\":\"markdown\",\"permalink\":\"/docs/server/library\",\"date\":\"2023-09-27T12:16:17.000Z\"},\"git\":{\"updatedTime\":1754820370000,\"contributors\":[{\"name\":\"syueya\",\"username\":\"syueya\",\"email\":\"1525817566@qq.com\",\"commits\":1,\"url\":\"https://github.com/syueya\"},{\"name\":\"xylplm\",\"username\":\"xylplm\",\"email\":\"luoxiao123@outlook.com\",\"commits\":2,\"url\":\"https://github.com/xylplm\"},{\"name\":\"Autumn\",\"username\":\"Autumn\",\"email\":\"1150108426@qq.com\",\"commits\":1,\"url\":\"https://github.com/Autumn\"},{\"name\":\"luoxiao\",\"username\":\"luoxiao\",\"email\":\"luoxiao123@outlook.com\",\"commits\":1,\"url\":\"https://github.com/luoxiao\"}],\"changelog\":[{\"hash\":\"7fe0b1a76c340a76c98c57988ac59c471ad020e3\",\"time\":1754820370000,\"email\":\"luoxiao123@outlook.com\",\"author\":\"luoxiao\",\"message\":\"fix顺序\"},{\"hash\":\"f9f9bf48314c9efdd1030bdaf662259eb8b4b2e8\",\"time\":1753411006000,\"email\":\"luoxiao123@outlook.com\",\"author\":\"xylplm\",\"message\":\"完善媒体服务相关文档\"},{\"hash\":\"77b0a5c20fc368528854f7f9c01f98a3c2a7fe4c\",\"time\":1744452055000,\"email\":\"1150108426@qq.com\",\"author\":\"Autumn\",\"message\":\"更新\"},{\"hash\":\"aa4ae8dde1565472ebdc5fbefe58e4c7c24fb9d7\",\"time\":1744354305000,\"email\":\"luoxiao123@outlook.com\",\"author\":\"xylplm\",\"message\":\"fix:调整为go相关结构和创建空白wiki\"},{\"hash\":\"0589fbe999f232b7da2ed95d9f35fbb6ad05a670\",\"time\":1698328243000,\"email\":\"1525817566@qq.com\",\"author\":\"syueya\",\"message\":\"重构目录结构\"}]},\"filePathRelative\":\"02.使用文档/03.媒体服务/01.我的媒体库.md\"}")
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
