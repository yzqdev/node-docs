import { exec } from "child_process";
import fs from "fs";
import path from "path";
function readFileList(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  let dirPath = { name: path.resolve(dir).split("\\").pop(), files: [] };
  files.forEach((item, index) => {
    var fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && item != "res") {
      readFileList(path.join(dir, item), filesList); //递归读取文件
    } else {
      if (path.extname(item) == ".rst") {
        console.log(item);
        exec(`pandoc ${item} -f rst -t markdown -o ${item.split(".")[0]}.md`);
        dirPath.files.push(fullPath.replace("\\", "/"));
      }
      // filesList.push(fullPath.replace("\\", "/"));
    }
  });
  filesList.push(dirPath);
  return filesList;
}
var filesList = [];
readFileList("./", filesList);
//
console.log(filesList);
