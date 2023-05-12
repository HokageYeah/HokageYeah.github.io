import type { NavbarConfig } from 'vuepress'

// 导航栏区域内容
// 该配置决定 navbar 滑块中有多少个内容
// 你可以把它当成 router 来理解
const navbar: NavbarConfig = [
    {
        text: '指南',
        link: '/guide/',
        children:[
            '/guide/getting-started.md',
        ]
    },
]

export default navbar