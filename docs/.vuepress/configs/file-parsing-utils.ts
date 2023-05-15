import fs from "fs";
import path from "path";
const sortSep = ".";
const Num = (n) => parseInt(n, 10);

// 文件里面只有md的方法
function getFile(pathname: string) {
  //   获取文件路径
  const p = path.resolve(__dirname, "../../" + pathname);
  if (pathname.indexOf("/") != -1) {
    //多级目录
    // 2022es 的新语法at(-1)取最后一个数组元素
    pathname = pathname.split("/").at(-1) as string;
  }
  //   检查给定路径中是​​否已存在文件
  if (!fs.existsSync(p)) return [];
  //   获取文件下所有的文件名称
  const filesAry = fs.readdirSync(p);
  const filterAry = filesAry.filter((item: string) => item.endsWith(".md"));
  //   排序
  const sortAry = filterAry.sort((a, b) => {
    let n1, n2;
    n1 = Num(a.split(sortSep)[0]);
    n2 = Num(b.split(sortSep)[0]);
    if (a === "index.md") return 1;
    return n1 - n2;
  });
  const mapDir = sortAry.map((item: string) => {
    const formatDir = item;
    return `/${pathname}/${formatDir}`;
  });
  return [
    {
      text: pathname,
      collapsible: true, //可折叠的侧边栏
      children: mapDir,
    },
  ];
}

// 二级菜单
function getDirectory(directoryPath: string) {
  const p = path.resolve(__dirname, "../../" + directoryPath);
  //   withFileTypes为true时候，
  //     file.name // 可获取到文件名或文件夹名
  //     file.isDirectory() // 可判断是否为一个文件夹
  const files = fs.readdirSync(p, {
    withFileTypes: true,
  });
  const filNames: string[] = [];
  files.forEach((element) => {
    if (element.isDirectory()) {
      filNames.push(element.name);
    }
  });
  return filNames;
}

// 文件里面还是文件夹的方法 二级菜单
function getFolderSidebar(folderPath: string) {
  const sidebar: any[] = [];
  const filesAry = getDirectory(folderPath);
  filesAry.forEach((element) => {
    const filepath = getFile(folderPath + "/" + element);
    if (!filepath) return [];
    const children = filepath[0].children.map((pathStr) => {
      return `/${folderPath}${pathStr}`;
    });
    sidebar.push({ ...filepath[0], children });
  });
  return sidebar;
}

export { getFile, getFolderSidebar };
