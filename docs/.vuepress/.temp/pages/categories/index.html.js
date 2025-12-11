import comp from "D:/myGithub/media-saber-wiki/docs/.vuepress/.temp/pages/categories/index.html.vue"
const data = JSON.parse("{\"path\":\"/categories/\",\"title\":\"分类\",\"lang\":\"zh-CN\",\"frontmatter\":{\"categoriesPage\":true,\"title\":\"分类\",\"permalink\":\"/categories/\",\"article\":false},\"git\":{\"updatedTime\":1698328243000,\"contributors\":[{\"name\":\"xylplm\",\"username\":\"xylplm\",\"email\":\"luoxiao123@outlook.com\",\"commits\":2,\"url\":\"https://github.com/xylplm\"},{\"name\":\"syueya\",\"username\":\"syueya\",\"email\":\"1525817566@qq.com\",\"commits\":1,\"url\":\"https://github.com/syueya\"}],\"changelog\":[{\"hash\":\"0589fbe999f232b7da2ed95d9f35fbb6ad05a670\",\"time\":1698328243000,\"email\":\"1525817566@qq.com\",\"author\":\"syueya\",\"message\":\"重构目录结构\"},{\"hash\":\"d51b264619304b2099eab5f5528b708072f16a48\",\"time\":1688102347000,\"email\":\"luoxiao123@outlook.com\",\"author\":\"xylplm\",\"message\":\"init\"},{\"hash\":\"2ee003815204bc26f78fd71a1f239ca97f4e0f42\",\"time\":1688092554000,\"email\":\"luoxiao123@outlook.com\",\"author\":\"xylplm\",\"message\":\"init project\"}]},\"filePathRelative\":\"@pages/categoriesPage.md\"}")
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
