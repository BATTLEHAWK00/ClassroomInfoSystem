<template>
    <div>
        <h1>反馈提交</h1>
        <div class="feedbackRow">
            <span>反馈类型:</span>
            <select name="" id="feedbackLabel" v-model="category"></select>
        </div>
        <div class="feedbackRow">
            <textarea name="" id="feedbackText" v-model="desc"></textarea>
        </div>
        <div class="feedbackRow">
            <input type="button" value="提交" @click="submit">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            category:'',
            desc:''
        }
    },
    methods:{
        submit(){
            var that = this
            this.$ajax.post('/api/feedbacksubmit',{
                'category':that.category,
                'desc':that.desc
            }).then(res=>{
                if(res.status==200)
                {
                    alert("提交成功！")
                    that.category=''
                    that.desc=''
                }
            })
        }
    }
}
</script>
<style>
#feedbackLabel{
    width: 100px;
}
.feedbackRow{
    padding: 10px;
}
#feedbackText{
    width:60%;
    height:200px;
    resize:none;
    font-size:18px;
}
</style>