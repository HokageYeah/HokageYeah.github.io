import { defaultTheme, defineUserConfig } from "vuepress";
import sidebar from "./configs/sidebar";
import navbar from "./configs/nabbar";
import head from "./configs/head";
import { searchPlugin } from "@vuepress/plugin-search";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import { commentPlugin } from "vuepress-plugin-comment2";
import vuepressPluginAnchorRight from "vuepress-plugin-anchor-right";

// debugger;
export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "HokageYeah",
  description: "这是我的第一个 VuePress 站点",
  locales: {
    "/": {
      // lang: 'zh-CN',
      title: "HokageYeah的笔记",
      description: "懂得越多，懂得越少",
    },
  },
  head: head,
  theme: defaultTheme({
    logo: "/logo/logo.jpg",
    repo: "HokageYeah/HokageYeah.github.io", // 设置 GitHub 仓库的用户名和仓库名
    docsBranch: "master",
    docsDir: "docs", // 设置存放文档源文件的目录路径

    locales: {
      "/": {
        // navbar
        navbar,
        // sidebar
        sidebar,
        // page meta
        editLinkText: "在github上编辑此页",
        lastUpdatedText: "上次更新",
        contributorsText: "贡献者",
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
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索内容",
        },
      },
    }),
    // 基于 github Dissicon 的评论项目 giscus
    // https://plugin-comment2.vuejs.press/
    // https://giscus.app/zh-CN
    commentPlugin({
      provider: "Giscus",
      repo: "HokageYeah/HokageYeah.github.io",
      repoId: "R_kgDOJiEJFA", // id
      category: "Announcements",
      categoryId: "DIC_kwDOJiEJFM4CWdHm", // id
      mapping: "pathname", // url
      lazyLoading: true,
      reactionsEnabled: true,
      inputPosition: "bottom",
    }),

    // 代码复制
    copyCodePlugin({
      locales: {
        "/": {
          copied: "复制成功",
          copy: "点击拷贝",
        },
      },
    }),

    // 右侧出现目录树
    vuepressPluginAnchorRight({
      // 在这里进行插件的配置
      // 例如设置目录字体颜色和排版
      color: '#ff0000',
      layout: "horizontal",
    }),
  ],
});
