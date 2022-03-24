/*
 * @Author: koko
 * @Date: 2022-03-23 17:14:03
 * @FilePath: \san-player\scripts\template.js
 * @LastEditTime: 2022-03-24 09:52:47
 * @LastEditors: koko
 * @Description: 是生成组件代码的模板文件
 */
module.exports = {
  vueTemplate: (compoenntName,cssName) => {
    compoenntName =
      compoenntName.charAt(0).toLowerCase() + compoenntName.slice(1);
    return `<!--
    * @Author: koko
    * @Date: 2022-03-24 09:42:55
    * @LastEditTime: 2022-03-24 09:43:13
    * @LastEditors: koko
    * @Description: 
   -->
   
   <template>
     <div class="st-${cssName}">${compoenntName}</div>
   </template>
   <script>
   export default {
     name: "${compoenntName}",
     data() {
       return {};
     },
     props: {},
     methods: {},
   };
   </script>
   <style lang="scss" scope>
   .st-${cssName} {
   }
   </style>
   `;
  },
  entryTemplate: (compoenntName) => {
    return `/*
    * @Author: koko
    * @Date: 2022-03-24 09:39:29
    * @LastEditTime: 2022-03-24 09:40:09
    * @LastEditors: koko
    * @Description: ${compoenntName}
    */
   
   import ${compoenntName} from "./${compoenntName}";
   
   ${compoenntName}.install = function (Vue) {
     Vue.component(${compoenntName}.name, ${compoenntName});
   };
   
   if (typeof window !== "undefined" && window.Vue) {
     window.Vue.component(${compoenntName}.name, ${compoenntName});
   }
   `;
  },
  mdDocs: (title) => {
    return `# ${title} 组件
    <!-- {.md} -->
    ---
    <!-- {.md} -->
    ## 如何使用
    <!-- {.md} -->
    ## Attributes
    <!-- {.md} -->
    | 参数 | 说明 | 类型 | 可选值 | 默认值 |
    |-----|-----|-----|-----|-----|
    | - | - | - | - | - |`;
  },
};
