<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <color-picker>----</color-picker>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      color: "#ff0000",
    };
  },
  methods: {
    headleChangeColor() {
      console.log("颜色改变");
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: red;
  margin-top: 60px;
  background-color: aquamarine;
  height: 800px;
  width: 100%;
  user-select: none;
}
</style>
