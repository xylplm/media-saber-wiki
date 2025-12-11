import comp from "D:/myGithub/media-saber-wiki/docs/.vuepress/.temp/pages/docs/main_page/my_info/index.html.vue"
const data = JSON.parse("{\"path\":\"/docs/main_page/my_info/\",\"title\":\"我的信息\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"我的信息\",\"article\":false,\"tags\":null,\"categories\":null,\"editor\":\"markdown\",\"permalink\":\"/docs/main_page/my_info/\",\"date\":\"2023-09-27T12:16:17.000Z\"},\"git\":{\"updatedTime\":1755597655000,\"contributors\":[{\"name\":\"xylplm\",\"username\":\"xylplm\",\"email\":\"luoxiao123@outlook.com\",\"commits\":2,\"url\":\"https://github.com/xylplm\"},{\"name\":\"Autumn\",\"username\":\"Autumn\",\"email\":\"1150108426@qq.com\",\"commits\":1,\"url\":\"https://github.com/Autumn\"},{\"name\":\"luoxiao\",\"username\":\"luoxiao\",\"email\":\"luoxiao123@outlook.com\",\"commits\":2,\"url\":\"https://github.com/luoxiao\"}],\"changelog\":[{\"hash\":\"33876d79588e1f082c3b65e16967bb83e0168940\",\"time\":1755597655000,\"email\":\"luoxiao123@outlook.com\",\"author\":\"xylplm\",\"message\":\"fix： 文档完善\"},{\"hash\":\"ca291d1951d97b238cf4662273d0274553871c7b\",\"time\":1754819502000,\"email\":\"luoxiao123@outlook.com\",\"author\":\"luoxiao\",\"message\":\"优化 智能体相关配置文档\"},{\"hash\":\"c3855f787530980555c5eab5ba2544e74eea07ca\",\"time\":1753363086000,\"email\":\"luoxiao123@outlook.com\",\"author\":\"luoxiao\",\"message\":\"完善文档\"},{\"hash\":\"6fd6d3b8d5139f8f099c15b2db09838a96cef09a\",\"time\":1745506512000,\"email\":\"1150108426@qq.com\",\"author\":\"Autumn\",\"message\":\"更新\"},{\"hash\":\"aa4ae8dde1565472ebdc5fbefe58e4c7c24fb9d7\",\"time\":1744354305000,\"email\":\"luoxiao123@outlook.com\",\"author\":\"xylplm\",\"message\":\"fix:调整为go相关结构和创建空白wiki\"}]},\"filePathRelative\":\"02.使用文档/01.首页/05.我的信息.md\"}")
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
