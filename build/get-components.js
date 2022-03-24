/*
 * @Author: koko
 * @Date: 2022-03-23 17:22:10
 * @FilePath: \san-player\build\get-components.js
 * @LastEditTime: 2022-03-23 17:23:23
 * @LastEditors: koko
 * @Description: 获取 packages 目录下的所有组件
 */

const fs = require("fs");
const path = require("path");
const excludes = ["index.js", "theme-chalk", "mixins", "utils", ".DS_Store"];
module.exports = function () {
  const dirs = fs.readdirSync(path.resolve(__dirname, "../packages"));
  return dirs.filter((dirName) => excludes.indexOf(dirName) === -1);
};
