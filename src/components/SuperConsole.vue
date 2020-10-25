<template>
  <div class="console">
    <div class="sidebar">
      <span style="font-size: 18px">
        <strong>导航菜单</strong>
      </span>
      <ul>
        <li v-for="item in navBar" :key="item.name" @click="onNavSwitch(item)" :class="{'sidebarActive':item.temp==funcTemplate}">{{item.name}}</li>
      </ul>
    </div>
    <div class="content">
      <component :is="funcTemplate"></component>
    </div>
    <div class="clearfloat"></div>
  </div>
</template>
<script>
import funcGeneral from '@/components/Console/funcGeneral'
import submitOrder from '@/components/Console/submitOrder'
import orderManager from '@/components/Console/orderManager'
import submitFeedback from '@/components/Console/submitFeedback'
export default {
  name: "Console",
  data() {
    return {
      navBar:[
        {
          name:'概览',
          temp: funcGeneral,
        },
        {
          name:'工单管理',
          temp: orderManager
        },
        {
          name:'反馈查询',
          temp: submitFeedback
        }
      ],
      funcTemplate:funcGeneral
    };
  },
  methods:{
    onNavSwitch(item){
      this.funcTemplate=item.temp
    }
  }
};
</script>
<style>
.console {
  width: 100%;
  /* height: 700px; */
  /* background-color: black; */
}
.sidebar {
  /* display: inline-block; */
  float: left;
  width: 15%;
  margin: 0;
  padding: 25px 0 25px 0;
  height: 100%;
  background-color: azure;
}
.sidebar > div {
  border-right-style: solid;
  border-right-width: 1px;
  border-right: gray;
}

.sidebar li {
  width: 75%;
  height: 35px;
  line-height: 35px;
}
.sidebar li:hover {
  cursor: pointer;
  color: white;
  background-color: gray;
  transition: all 0.5s;
}
.sidebarActive{
  background-color: gray;
  color: white;
}
.content {
  display: inline-block;
  width: 85%;
  height: 100%;
  margin: 0;
  /* padding: 10px; */
  /* background-color: coral; */
}
.clearfloat {
  clear: both;
}
</style>