import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Media Saber Wiki",
  description: "Media Saber Wiki 文档",

  theme,

  bundler: viteBundler(),

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
