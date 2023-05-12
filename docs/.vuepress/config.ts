import { defaultTheme, defineUserConfig } from "vuepress";
import sidebar from "./configs/sidebar";
import navbar from "./configs/nabbar";
import head from "./configs/head";

// debugger;
console.log(sidebar);

export default defineUserConfig({
  base: "/vuepress2/",
  lang: "zh-CN",
  title: "HokageYeah",
  description: "这是我的第一个 VuePress 站点",
  head: head,
  theme: defaultTheme({
    logo: "/logo/logo.jpg",
    repo: "HokageYeah/vuepress-theme",
    docsBranch: "main",
    docsDir: "docs",

    locales: {
      "/": {
        // navbar
        navbar,
        // sidebar
        sidebar,
        // page meta
        editLinkText: "在github上编辑此页",
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
      },
    },
    // // 默认主题配置
    // navbar: [
    //   {
    //     text: "首页",
    //     link: "/",
    //   },
    // ],
    // sidebar: [
    //   // SidebarItem
    //   {
    //     text: "ES6教程",
    //     link: "/",
    //     children: [
    //       {
    //         text: "ECMAScript 6 简介",
    //         link: "/《ES6 教程》笔记/01.ECMAScript 6 简介.md/",
    //       },
    //       {
    //         text: "变量的解构赋值",
    //         link: "/《ES6 教程》笔记/03.变量的解构赋值.md/",
    //       },
    //     ],
    //   },
    // ],
  }),
});
