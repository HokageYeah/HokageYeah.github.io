# 部署

## 部署方式
两种部署方式
1. github actions
   - 将 `.github/workflows/ci.yml` 文件注释打开
   - 检查配置，默认部署分支是 `gh-pages`
   
2. push 打包后的静态文件夹
检查配置,默认配置如下
```shell
# 项目发布域名
web_url=https://wuxin0011.github.io/vuepress2/
# 项目git 地址
git_source=https://github.com/wuxin0011/vuepress2
# 上传分支，如果是 master 请使用 main_branch=master
main_branch=main
# 项目打包生成的上传分支
pages_branch=gh-pages
# 上传消息
git_message="deploy $web_url"
```
部署
```shell
pnpm run deploy
```

