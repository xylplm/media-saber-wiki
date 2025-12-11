import comp from "D:/myGithub/media-saber-wiki/docs/.vuepress/.temp/pages/04.更新日志/index.html.vue"
const data = JSON.parse("{\"path\":\"/04.%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97/\",\"title\":\"更新日志\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"04.更新日志/README.md\"}")
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
