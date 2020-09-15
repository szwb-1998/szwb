<template>
 <el-dialog
  :title="info.isAdd ? '添加角色':'修改角色'"
  :visible.sync="info.isShow"
  width="40%">
  <el-form :model="frominfo" ref="form" :rules="rules" label-width="140px">
     <el-form-item label="角色名称"  prop="rolename">
        <el-input v-model="frominfo.rolename" placeholder="请输入角色名称"></el-input>
         </el-form-item>
          <el-form-item label="角色权限">
          <el-tree default-expand-all node-key="id" ref="tree" :data="menulist"  show-checkbox :props="{children:'children',label:'title'}"></el-tree>


         </el-form-item>
           <el-form-item label="角色状态">
         <el-switch
        v-model="frominfo.status"
        :active-value="1" :inactive-value="2"
        ></el-switch>
         </el-form-item>
       
          <el-form-item label="">
     <el-button type="primary" @click="submit">提交</el-button>
     <el-button type="warning" @click="reset">重置</el-button>
      </el-form-item>

    
  </el-form>
</el-dialog>

</template>

<script>
import { addRole,editRole } from "@/request/role"
import {mapGetters,mapActions} from "vuex"
let defaultItem ={
    
        rolename:"",
         menus:"",
         status:1
     
}
let resetItem ={
    ...defaultItem
}
export default {
    props:{
    info:{
        type:Object,
        default(){
            return{
                isAdd:true,
                isShow:false
            }
        }
    }
    },
 data(){
 return{
     frominfo:{...defaultItem},
     rules:{
         rolename:[{required:true,message:"必填!",trigger:'blur'}],
     }
 }
 },
 computed: {
     ...mapGetters({
          menulist:"menu/menulist"
     })
 },
 mounted(){
     if(!this.menulist.length){
    
         this.get_menu_list();
     }
 },
 methods:{
     ...mapActions({
         get_menu_list:"menu/get_menu_list",
         get_role_list:"role/get_role_list"
     }),
      setinfo(val){
          
         defaultItem={...val};
          this.frominfo = {...val};
      },
    async submit(){
        
        let idarr = this.$refs.tree.getCheckedKeys().concat(this.$refs.tree.getHalfCheckedKeys());
        if(idarr.length){
            this.frominfo.menus = idarr;
        }else{
            this.message.warning('请选择权限');
            return;
        }
  
            // 表单验证！
            this.$refs.form.validate(async valid=>{
                if(valid){ // 如果验证通过！
                    let res;
                    if(this.info.isAdd){ // 添加还是修改！
                        res = await addRole(this.frominfo);
                    }else{
                        res = await editRole(this.frominfo)
                    }
                    if(res.code==200){
                        this.$message.success(res.msg)
                        this.info.isShow = false;
                        this.get_role_list();

                       this.frominfo= {...resetItem}// 无论是修改成功还是添加成功，都应该让表单为空！
                    }else{
                        this.$message.error(res.msg)
                    }
                }
            })
        },
     reset(){
        this.frominfo ={...defaultItem};
     }
 },
 components:{}
}

</script>
<style scoped>
</style>