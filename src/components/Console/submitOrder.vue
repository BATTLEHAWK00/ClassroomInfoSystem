<template>
  <div style="padding: 0 50px 50px 50px;">
    <h1>工单提交</h1>
    <div style="text-align:left; margin: 0 auto; width:70%;">
      <div class="orderSubmitRow">
        <div class="orderSubmitCol">
          <span>工单名：</span>
          <input type="text" name="" id="" v-model="name" />
        </div>
        <div class="orderSubmitCol">
          <span>教室楼栋：</span>
          <select name="" id="" style="width: 75px" v-model="building"></select>
        </div>
        <div class="orderSubmitCol">
          <span>教室编号：</span>
          <select name="" id="" style="width: 75px" v-model="classroom"></select>
        </div>
      </div>
      <div class="orderSubmitRow">
        <span>工单描述：</span>
        <textarea id="orderDesc" v-model="desc"></textarea>
      </div>
      <div class="orderSubmitRow">
        <input type="button" value="提交" @click="submit" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      name:'',
      building:'',
      classroom:'',
      desc:''
    }
  },
  methods:{
    submit(){
      var that = this
      this.$ajax.post('/api/ordersubmit',
      {
        'name': that.name,
        'building': that.building,
        'classroom': that.classroom,
        'desc': that.desc
      }).then((res)=>{
        if(res.status==200)
          alert("提交成功！")
          that.name=''
          that.building=''
          that.classroom=''
          that.desc=''
      })
    }
  }
}
</script>
<style>
#orderDesc {
  display: block;
  width: 80%;
  height: 100px;
  resize: none;
}
.orderSubmitRow {
  padding: 10px;
}
.orderSubmitCol {
  display: inline-block;
  padding: 10px 50px 10px 0;
}
</style>