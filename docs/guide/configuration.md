---
title: 配置
description: 配置
---


## 路由配置


### navbar

改配置决定导航栏显示内容

```js
const navbar: NavbarConfig = [
    {
        text: '指南',
        link: '/guide/',
        children:[
            '/guide/getting-started.md',
        ]
    },
    {
        text: '插件',
        children: [
            {
                text: '常用功能',
                children: [
                    '/reference/plugin/back-to-top.md',
                ],
            },

        ],
    },
    {
        text: '了解更多',
        children: [
            {
                text: '深入',
                children: [
                    '/advanced/architecture.md',
                    {
                        text: 'Cookbook',
                        link: '/advanced/1/',
                    },
                    '/advanced/architecture.md',
                    {
                        text: 'Cookbook',
                        link: '/advanced/2/',
                    },
                ],
            },

        ],
    },

]
```



### sidebar

该配置决定显示左侧内容


```js
const sidebar: SidebarConfig = {
    '/guide/': [
        {
            text: '指南',
            children: [
                '/guide/getting-started.md',
                '/guide/configuration.md',
                '/guide/deployment.md',
            ],
        },
    ],
    '/advanced/': [
        {
            text: '菜单演示',
            children: [
                '/advanced/architecture.md',
                '/advanced/02-test.md',
            ],
        },

    ],
    '/reference/': [

        {
            text: '二级菜单演示',
            collapsible: true,
            children: [
                {
                    text: '常用功能',
                    children: [
                        '/reference/plugin/back-to-top.md',
                    ],
                }
            ],
        },
    ],
}
```


## 评论配置

评论采用 `github giscus `

- [插件地址](https://plugin-comment2.vuejs.press/)
- [申请 giscus 配置](https://giscus.app/zh-CN)

申请完毕之后，在 `.vuepress/config.ts` 中配置
```js
commentPlugin({
    provider: "Giscus",
    repo: 'wuxin0011/blog-giscus-comment',
    repoId: 'R_kgDOJADaHw', // id
    category: 'Announcements',
    categoryId: 'DIC_kwDOJADaH84CUUwQ', // id
    mapping: 'pathname', // url
    lazyLoading: true,
    reactionsEnabled: true,
    inputPosition: 'bottom',
})
```



