<template>
    <div>
        <div class="loginPanel">
            <h2>请登录</h2>
            <div class="loginRow">
                <span class="label">用户名</span>
                <input type="text" v-model="username">
            </div>
            <div class="loginRow">
                <span class="label">密码</span>
                <input type="password" v-model="password">
            </div>
            <div class="loginRow">
                <span class="label">验证码</span>
                <input type="text" class="veriText" v-model="vericode">
                <div class="veriImg" @click="changeVeriCode">
                    <img src="" alt="验证码">
                </div>
            </div>
            <div class="buttonsRow">
                <input type="button" value="登录" class="loginButton" @click="login">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Main',
    data(){
        return{
            username:'',
            password:'',
            vericode:''
        }
    },
    methods:{
        login(){
            console.log('登录')
            var that = this
            this.$ajax.post('/api/login',{
                'username': that.username,
                'passwd': that.password
            }).then(res=>{
                if(res.data.isSuper==1)
                    this.$router.push('/superconsole')
                else
                    this.$router.push('/console')
            }).catch(e=>{
                alert("登陆失败！错误信息："+e)
            })
        },
        changeVeriCode(){
            console.log('更换验证码')
        }
    },
    mounted(){
        this.$ajax.get("/api/test").then(res=>{
            console.log(res.data)
        })
    }
}
</script>
<style>
.loginPanel{
    width: 50%;
    padding: 35px;
    padding-top: 25px;
    margin: 0 auto;
    border-radius: 10px;
    background-color: #ddf4fd;
}
.label{
    display: inline-block;
    width: 50px;
    margin-right: 10px;
    text-align: right;
}
.loginRow{
    padding: 5px;
}
.buttonsRow{
    padding-top: 20px;
}
.loginButton{
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
    width: 150px;
    height: 35px;
}
.veriText{
    width: 50px;
}
.veriImg{
    display: inline-block;
    width: 100px;
    height: 100%;
    background-color: bisque;
    cursor: pointer;
}
</style>