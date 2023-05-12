import type { SidebarConfig } from "vuepress";

// 决定左侧内容区域

const sidebar: SidebarConfig = {
  "/guide/": [
    {
      text: "指南",
      children: [
        "/guide/getting-started.md",
        "/guide/configuration.md",
        "/guide/deployment.md",
      ],
    },
  ],
  "/ES6/": [
    {
      text: "ES6笔记",
      children: [
        "/ES6/01ECMAScript.md",
        "/ES6/02ECMAScript.md",
      ],
    },
  ],
};
export default sidebar;
