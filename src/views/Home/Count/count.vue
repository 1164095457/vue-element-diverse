<template>
    <div>
          <el-col class="count color1"  :lg="6">
                    <div>
                        <i class="el-icon-view"></i>
                    </div>
                    <div>
                        <ul>
                            <li>今日XXX</li>
                            <li class="count-text">
                                <countTo :startVal='startVal' :endVal='10088' :duration='duration' />
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col class="count color2" :lg="6">
                    <div>
                        <i class="el-icon-shopping-cart-2"></i>
                    </div>
                    <div>
                        <ul>
                            <li>今日XXX</li>
                            <li class="count-text">
                                <countTo :startVal='startVal' :endVal='99999' :duration='duration' />
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col class="count color3" :lg="6">
                    <div>
                        <i class="el-icon-truck"></i>
                    </div>
                    <div>
                        <ul>
                            <li>今日XXX</li>
                            <li class="count-text">
                                <countTo :startVal='startVal' :endVal='11200' :duration='duration' />
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col class="count color4" :lg="6">
                    <div>
                        <i class="el-icon-alarm-clock"></i>
                    </div>
                    <div>
                        <ul>
                            <li>今日XXX</li>
                            <li class="count-text">
                                <countTo :startVal='startVal' :endVal='19999' :duration='duration' />
                            </li>
                        </ul>
                    </div>
                </el-col>
    </div>
</template>
<script>
import countTo from 'vue-count-to';
export default {
    components:{
        countTo
    },
    data(){
        return {
        // 需要滚动的时间
        duration: 2500,
        // 初始值
        startVal: 0,
      }
    }
}
</script>
<style lang="less" scoped>
.count{
    border: 10px solid #fff;
    height: 150px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    font-size: 20px;
    
    i{
        font-size: 50px;
        margin-right: 5px;
    }
    .count-text{
        font-size: 30px;
    }
}
.color1{
    background-color:#74ca78;
}
.color2{
    background-color:#fcb041;
}
.color3{
    background-color:#59b4fc;
}
.color4{
    background-color:#ff675c;
}
</style>