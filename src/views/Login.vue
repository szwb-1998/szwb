<template>
 <el-row class="login-bg">
     <el-col :span="8" class="login-box">
     <h3>小候商城管理系统</h3>
     <el-form :model="forminfo" ref="form" >
         <el-form-item >
             <el-input v-model="forminfo.username"  placeholder="请输入账号">
                  <template slot="prepend">
                      <i class="el-icon-sunny"></i>
                  </template>
             </el-input>
         </el-form-item>
            <el-form-item >
             <el-input v-model="forminfo.password" show-password placeholder="请输入密码">
                  <template slot="prepend">
                      <i class="el-icon-moon"></i>
                      </template>
             </el-input>
         </el-form-item>
         <el-form-item>
             <el-button class="login-btn" type="primary" @click="login">立即登录</el-button>
             
         </el-form-item>
     </el-form>
     
     </el-col>
   
 </el-row>
</template>

<script>
export default {
 data(){
 return{
     forminfo:{
          username:"",
          password:""
     }
 }
 },
 created(){},
 methods:{
     login(){}
 },
 components:{}
}

</script>
<style scoped>
.login-bg{
    width:100vw;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/img/bg.jpg");
    
}
.login-box{
    background-color: #fff;
    box-shadow: 0 0 4px 0 rgba(0,0,0,.2);
    padding:30px 40px;
    border:1px solid #eee; 
}
.login-box h3{
    line-height: 40px;
    text-align: center;
    margin-bottom: 20px;
}
.login-btn{
    display: block;
    width:100%;
}
</style>