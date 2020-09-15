<template>
<el-container class="page">
    <el-aside :width="iscollapse ?'64px':'220px'" class="page-nav">
      <left />
    </el-aside>
    <el-container class="page-content">
        <el-header class="page-header">
          <top />
        </el-header>
        <el-main height="" class="page-main">
            <!-- Main content -->
            <router-view />
        </el-main>
    </el-container>
</el-container>

</template>

<script>
import top from "./top"
import left from "./left"
import {mapState} from "vuex"
export default {
 data(){
 return{}
 },
 computed: {
  ...mapState(['iscollapse'])
 },
 created(){},
 methods:{},
 components:{
     top,left
 }
}

</script>
<style scoped>
.page{
    width:100vw;
    height:100vh;
}
.page-nav{
    height: 100%;
   background-color:#CCCC99;
}
.page-content{
    height:100%;
   
     background-color:#FFFF66
}
.page-header{
    background-color:  rgba(255, 255, 66, 0.548);
    box-shadow: 0 0 4px 0 rgba(253, 144, 195, 0.37);
}
</style>