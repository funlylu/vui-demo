/*
 * @Author: koko
 * @Date: 2022-03-23 17:07:05
 * @FilePath: \san-player\vue.config.js
 * @LastEditTime: 2022-03-23 17:07:05
 * @LastEditors: koko
 * @Description:  构建配置文件
 */
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  productionSourceMap: true,
  pages: {
    index: {
      entry: "examples/main.js", // 显示示例demo
      template: "public/index.html",
      filename: "index.html",
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("examples"));
  },
};
