<template>
  <div id="app">
    <div class="header">
      <h1>欢迎来到教室信息管理系统！</h1>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  min-width: 1000px;
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
.header{
  height: 100px;
  margin: 0 auto;
  padding-left: 20px;
  background-color: #ddf4fd;
  line-height: 100px;
  text-align: left;
  margin-bottom: 50px;
}
.header h1{
  display: inline;
  font-size: 25px;
}
</style>
