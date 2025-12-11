import comp from "D:/myGithub/media-saber-wiki/docs/.vuepress/.temp/pages/02.使用文档/index.html.vue"
const data = JSON.parse("{\"path\":\"/02.%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3/\",\"title\":\"使用文档\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"02.使用文档/README.md\"}")
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
