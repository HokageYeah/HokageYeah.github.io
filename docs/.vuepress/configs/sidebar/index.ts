import type { SidebarConfig } from "vuepress";
import { getFile, getFolderSidebar } from "../file-parsing-utils";

// 文件
// 决定左侧内容区域
const sidebar: SidebarConfig = {
  "/guide/": getFile("guide"),
  "/Books/": getFolderSidebar("Books"),
};

// console.log("查看数据：------->", sidebar);

// 决定左侧内容区域
// const sidebar: SidebarConfig = {
//   "/guide/": [
//     {
//       text: "指南",
//       collapsible: true, //可折叠的侧边栏
//       children: [
//         "/guide/03.getting-started.md",
//         "/guide/01.configuration.md",
//         "/guide/02.deployment.md",
//       ],
//     },
//   ],
//   "/ES6/": [
//     {
//       text: "ES6笔记",
//       collapsible: true, //可折叠的侧边栏
//       // children: ["/ES6/01ECMAScript.md", "/ES6/02ECMAScript.md"],

//       children: ["/ES6/12.Symbol.md", "/ES6/14.Proxy.md", "/ES6/15.Reflect.md"],
//     },
//     {
//       text: "指南",
//       collapsible: true, //可折叠的侧边栏
//       children: [
//         "/guide/03.getting-started.md",
//         "/guide/01.configuration.md",
//         "/guide/02.deployment.md",
//       ],
//     },
//   ],
//   "/Books/": [
//     {
//       text: "《ES6 教程》笔记",
//       collapsible: true, //可折叠的侧边栏
//       children: [
//         "/Books/guide/03.getting-started.md",
//         "/Books/guide/01.configuration.md",
//         "/Books/guide/02.deployment.md",
//       ],
//     },
//     {
//       text: "ES6笔记",
//       collapsible: true, //可折叠的侧边栏
//       // children: ["/ES6/01ECMAScript.md", "/ES6/02ECMAScript.md"],

//       children: [
//         "/Books/ES6/12.Symbol.md",
//         "/Books/ES6/14.Proxy.md",
//         "/Books/ES6/15.Reflect.md",
//       ],
//     },
//   ],
// };
export default sidebar;
