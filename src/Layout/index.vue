<template>
    <div>
        <el-container >
            <el-aside width="auto"  class="layout-aside">
                <el-menu 
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose" 
                    :collapse="isCollapse"
                    background-color="#222d3b"
                    text-color="#fff"
                    active-text-color="#1a99ff"
                    router
                    :default-active="$route.path"
                    >
                    <el-menu-item class="logo">
                        <div>
                            <img src="@/assets/logo.png" alt="">
                            <span>vue-element-diverse</span>
                        </div>
                    </el-menu-item>
                    <el-menu-item index="/home">
                        <i class="el-icon-s-home"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-submenu index="1">
                        <template slot="title">
                        <i class="el-icon-s-order"></i>
                        <span slot="title">table表格</span>
                        </template>
                        <el-menu-item index="/table">表格列表</el-menu-item>
                        <el-menu-item index="/excel">Excel导出</el-menu-item>                        
                    </el-submenu>
                     <el-submenu index="2">
                        <template slot="title">
                        <i class="el-icon-edit"></i>
                        <span slot="title">form表单</span>
                        </template>
                        <el-menu-item index="/form">表单</el-menu-item>                        
                        <el-menu-item index="/editor">编辑器</el-menu-item>
                    </el-submenu>
                    </el-menu>
		    </el-aside>

            
            <!-- 头部 -->
            <el-container>
                <el-header>
                    <div class="layout-header">
                        <div class="header-left">
                            <i class="el-icon-s-unfold" @click="isCollapse = !isCollapse"></i>
                        </div>
                        <div class="header-right">
                            <div style="margin-right:20px;">管理员：admin</div>
                            <div class="user-image">
                                <el-image
                                src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1549131754,2955370505&fm=26&gp=0.jpg"
                                fit="cover">
                            </el-image>
                            </div>
                           <div style="cursor:pointer;">
                                <el-dropdown trigger="click" >
                                    <span class="el-dropdown-link">
                                        <i class="el-icon-arrow-down el-icon--right"></i>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>设置</el-dropdown-item>
                                        <el-dropdown-item>
                                            <span @click="login">退出</span>
                                        </el-dropdown-item>
                                    </el-dropdown-menu>
                                 </el-dropdown>
                           </div>
                        </div>
                    </div>
                </el-header>

                <!-- 主体内容 -->
               <el-main class="main">
                    <router-view />
               </el-main>
            </el-container>



        </el-container>
    </div>
</template>


<script>
  export default {
    data() {
      return {
          defaultUrl:'/',
          isCollapse: false
      }
    },
    mounted(){
        let href = window.location.href
        this.defaultUrl = href.split('/#')[1]
    },
    watch:{
        '$route':'getPath'
    },
    methods:{
        handleOpen(){},
        handleClose(){},
        getPath(){
            this.defaultUrl = this.$route.path
        },
        login(){
            this.$router.push('/login')
        }
    }
  };
</script>

<style scoped lang="less">
.el-header {
  background-color: #fff;
  color: #333;
}
.el-aside {
  color: #333;
  height: 100vh;
  background: #222d3b;
}
 .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh;
}
.el-submenu .el-menu-item{
    min-width:100px;
}
.layout-header{
    display: flex;
    justify-content: space-between;
    .header-left{
        display: flex;
        align-items: center;
        i{
            font-size: 26px;
            cursor:pointer;
            &:hover{
                color:#1a99ff;
            }
        }
    }
    .header-right{
        margin-right: 10px;
        display: flex;
        align-items: center;
        .user-image{
            display: flex;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-top: 5px;
            box-shadow:0px 0px 10px 3px #4CAF50;
            .el-image{
                border-radius: 50%;
            }
        }
        .el-dropdown{
            margin-top: 5px;
            .el-icon-arrow-down{
                font-size: 25px;
            }
        }
        
    }
}
.logo{
    margin-left:-12px;
    font-weight: 600;
    height: 70px;
    border-bottom: 1px solid #cccccc24;
    margin-top: 10px;
    img{
        width: 40px;
    }
}
.main{
    height: 0px;
}

</style>