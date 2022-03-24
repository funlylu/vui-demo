/*
 * @Author: koko
 * @Date: 2022-03-23 17:21:49
 * @FilePath: \san-player\build\build-entry.js
 * @LastEditTime: 2022-03-23 17:23:39
 * @LastEditors: koko
 * @Description: 生成自定义组件导出 packages/index.js
 */
const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");
const uppercamelize = require("uppercamelcase");
const Components = require("./get-components")();
const packageJson = require("../package.json");
const log = (message) => console.log(chalk.green(`${message}`));
const version = process.env.VERSION || packageJson.version;
function buildPackagesEntry() {
  const uninstallComponents = [];
  const importList = Components.map(
    (name) => `import ${uppercamelize(name)} from './${name}'`
  );
  const exportList = Components.map((name) => `${uppercamelize(name)}`);
  const intallList = exportList.filter(
    (name) => !~uninstallComponents.indexOf(uppercamelize(name))
  );
  const content = `import 'normalize.css'
${importList.join("\n")}
const version = '${version}'
const components = [
 ${intallList.join(",\n ")}
]
const install = Vue => {
 if (install.installed) return
 components.map(component => Vue.component(component.name, component))
}
if (typeof window !== 'undefined' && window.Vue) {
 install(window.Vue)
}
export {
 install,
 version,
 ${exportList.join(",\n ")}
}
export default {
 install,
 version,
 ...components
}
`;
  fs.writeFileSync(path.join(__dirname, "../packages/index.js"), content);
  log("packages/index.js 文件已更新依赖");
  log("exit");
}
buildPackagesEntry();
