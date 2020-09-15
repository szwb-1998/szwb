<template>
  <div id="app">
   
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{margin:0;padding:0}
.table-bg{
  background-color: #ffffff;
  padding:20px;
  margin:15px 0;
}
.el-dialog__header{
  border:1px solid #ddd;
  padding:15px 20px 10px!important;
}
</style>