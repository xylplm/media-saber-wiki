import comp from "D:/myGithub/media-saber-wiki/docs/.vuepress/.temp/pages/01.新手指引/index.html.vue"
const data = JSON.parse("{\"path\":\"/01.%E6%96%B0%E6%89%8B%E6%8C%87%E5%BC%95/\",\"title\":\"新手指引\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"01.新手指引/README.md\"}")
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
