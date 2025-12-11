import comp from "D:/myGithub/media-saber-wiki/docs/.vuepress/.temp/pages/03.客户端/index.html.vue"
const data = JSON.parse("{\"path\":\"/03.%E5%AE%A2%E6%88%B7%E7%AB%AF/\",\"title\":\"客户端\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"03.客户端/README.md\"}")
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
