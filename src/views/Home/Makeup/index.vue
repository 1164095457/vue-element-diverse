<template>
    <div class="makeup">
        <div class="block">
            <el-carousel height="200px">
             <el-carousel-item >
                <img src="@/assets/vue-element-diverse.png" alt="">
            </el-carousel-item>
            <el-carousel-item >
                <img src="@/assets/home-user.jpg" alt="">
            </el-carousel-item>
            </el-carousel>
        </div>
           
         <h2 style="text-align:center;margin:10px 0;">vue-element-diverse</h2>

        <p>
            <i class="el-icon-user">：欢迎持续关注vue-element-diverse</i>
        </p>
            <i class="iconfont icon-github">：https://github.com/1164095457/vue-element-diverse</i>
        <p>
            
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            percentage: 95,
            ding:null
        }
    }
}
</script>

<style lang="less" scoped>

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .block{
      img{
          width: 100%;
          height: 200px;
      }
      
  }
</style>
