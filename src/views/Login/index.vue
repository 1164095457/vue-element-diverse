<template>
        <div class="login-container">
            <el-card header="请登录" class="login-card">
                <el-form @submit.native.prevent="login">
                    <el-form-item label="用户名">
                        <el-input ></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input type="password" ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" native-type="subimt">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </div>
</template>

<style lang="less" scoped>
.login-container{
  width: 30rem;
  margin:12rem auto;
}
html{
    height: 100vh;
}
</style>