import comp from "D:/myGithub/media-saber-wiki/docs/.vuepress/.temp/pages/blog/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/\",\"title\":\"博客文章\",\"lang\":\"zh-CN\",\"frontmatter\":{\"archivesPage\":true,\"title\":\"博客文章\",\"permalink\":\"/blog/\",\"article\":false},\"git\":{\"updatedTime\":1688102347000,\"contributors\":[{\"name\":\"xylplm\",\"username\":\"xylplm\",\"email\":\"luoxiao123@outlook.com\",\"commits\":2,\"url\":\"https://github.com/xylplm\"}],\"changelog\":[{\"hash\":\"d51b264619304b2099eab5f5528b708072f16a48\",\"time\":1688102347000,\"email\":\"luoxiao123@outlook.com\",\"author\":\"xylplm\",\"message\":\"init\"},{\"hash\":\"2ee003815204bc26f78fd71a1f239ca97f4e0f42\",\"time\":1688092554000,\"email\":\"luoxiao123@outlook.com\",\"author\":\"xylplm\",\"message\":\"init project\"}]},\"filePathRelative\":\"@pages/archivesPage.md\"}")
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
