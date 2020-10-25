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
      <component :is="funcTemplate" v-if="isAlive"></component>
    </div>
    <div class="clearfloat"></div>
  </div>
</template>
<script>
import funcGeneral from '@/components/Console/funcGeneral.vue'
import submitOrder from '@/components/Console/submitOrder.vue'
import queryOrder from '@/components/Console/queryOrder.vue'
import submitFeedback from '@/components/Console/submitFeedback.vue'
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
          name:'提交工单',
          temp: submitOrder,
        },
        {
          name:'工单查询',
          temp: queryOrder
        },
        {
          name:'提交反馈',
          temp: submitFeedback
        }
      ],
      funcTemplate:funcGeneral,
      isAlive:true
    };
  },
  methods:{
    onNavSwitch(item){
      this.funcTemplate=item.temp
      this.reload()
    },
    reload(){
      this.isAlive=false
      this.$nextTick(()=>this.isAlive=true)
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