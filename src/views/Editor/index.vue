<template>
    <div>
        <el-card class="box-card" v-loading="loading">
            <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/form' }">编辑器</el-breadcrumb-item>
            </el-breadcrumb>
            <el-divider></el-divider>




            
           
        </el-card>

        
    </div>
</template>
<script>
  export default {
    data() {
      return {
        loading:true
      }
    },
    created(){
        setTimeout(()=>{
            this.loading = false
        },500)
    },
    
  }
</script>