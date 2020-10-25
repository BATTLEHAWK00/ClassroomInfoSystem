<template>
    <div>
        <h1>工单查询</h1>
        <div>
            <div class="tableheader">
                <!-- <span>筛选</span> -->
            </div>
            <div class="tablecontent">
                <table class="table"  style="margin:0 auto;">
                    <tr>
                        <th style="width:100px">单号</th>
                        <th style="width:200px">单名</th>
                        <th style="width:100px">楼栋</th>
                        <th style="width:100px">教室</th>
                        <th style="width:100px">状态</th>
                        <th style="width:200px">时间</th>
                        <th style="width:300px">操作</th>
                    </tr>
                    <tr v-for="item in tabledata" :key="item.number">
                        <td>{{item.number}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.building}}</td>
                        <td>{{item.classroom}}</td>
                        <td>{{item.status | statusFilter}}</td>
                        <td>{{item.date}}</td>
                        <td class="tableOperation">
                            <a @click="operWithdrawal(item)">撤回</a>
                            <a @click="operDetails(item)">查看详情</a>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="tablefooter">

            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            tabledata:[
                {
                    number:"123456",
                    name:"asd(前端数据)",
                    building:"asd",
                    classroom:"asd",
                    date:"2020-10-1",
                    status:"处理中",
                }
            ]
        }
    },
    methods:{
        operWithdrawal(item){
            console.log("撤回工单："+item.number)
        },
        operDetails(item){
            console.log("查看详情："+item.number)
        }
    },
    filters:{
        statusFilter(str){
            switch (str) {
                case 1:
                    return "待处理"
                case 2:
                    return "处理中"
                case 3:
                    return "处理完毕"
                default:
                    return "错误"                
            }
        }
    },
    beforeMount(){
        var that = this
        this.$ajax.get("/api/queryorder").then(res=>{
            res.data.res.forEach(element => {
                that.tabledata.push(element)
            });
                
        })
    }
}
</script>
<style>
.tableheader{
    width: 100%;
    height: 50px;
}
.tablecontent{
    height: 300px;
}
.table{
    text-align: right;
    border-collapse: collapse;
}
.table tr td{
    border-color: #bcbcbc;
    border-width: 1px;
    border-style: solid;
    padding: 5px;
}
.tableOperation a{
    color: blueviolet;
    margin-right: 10px;
    text-decoration: none;
}
.tableOperation a:hover{
    cursor: pointer;
    text-decoration: underline;
}
.tablefooter{
    width: 100%;
    height: 50px;
}
</style>