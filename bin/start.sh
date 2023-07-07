#!/usr/bin/env sh
set -e

# 执行打包命令镜像 pnpm/npm/yarn
build_source=pnpm
build_command=docs:dev






# 无需修改配置
# 日志路径
path="$(pwd)/log"
log=$path/$build_command-error.log


exec_project(){
   cd $1
   echo "项目启动中……🍖"
   $build_source $build_command 2>>$log
   echo "项目启动成功 🚀"
   cd -
}

log_check(){
   # 判断检测文件（包括目录）是否存在，如果是，则返回 true。
   if [ -e  $path ]
   then
       echo "日志目录已存在，错误日志将输出到 $log"
   else 
      echo "生成日志目录"
      mkdir -p  $path 
   fi
}

log_check


if [[ "$0" == "$build_command.sh" || "$0" == "./$build_command.sh" ]]
then
   exec_project ..
else
   exec_project .
fi


