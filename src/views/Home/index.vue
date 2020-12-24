<template>
    <div class="home">
        <el-card class="box-card">
            <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            </el-breadcrumb>
            <el-divider></el-divider>


            <el-row >
              <Count />
            </el-row>

            <el-row>
                <el-col class="echarts-box"  :lg="6">
                     <Bars/>
                </el-col>
                 <el-col class="echarts-box" :lg="6">
                     <Pie/>
                </el-col>
                 <el-col class="echarts-box" :lg="12">
                      <Lines />
                </el-col>
            </el-row>
           
            
            <el-row>
                <el-col class="b-10" :lg="8">
                    <Task />
                </el-col>
                <el-col class="b-10" :lg="7">
                    <Makeup />
                </el-col>
                <el-col class="b-10" :lg="9">
                    <Recommend />
                </el-col>
            </el-row>

        </el-card>
      
    </div>
</template>
<script>
import Count from './Count/count'
import Task from './Task/task'
import Makeup from './Makeup'
import Recommend from './Recommend'
import Bars from '@/components/Echarts/Bar.vue'
import Pie from '@/components/Echarts/Pie.vue'
import Lines from '@/components/Echarts/Line.vue'
export default {
    components:  {Count, Task, Makeup,Recommend, Bars, Pie, Lines}
}
</script>
<style lang="less" scoped>
.box-card{
    height: 870px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 10px;     
        height: 1px;
    }
&::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: #b4b3b3;
    }
&::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 10px;
        background: #EDEDED;
    }
}
.echarts-box{
    background-color: #fafafa;
    border: 10px solid #fff;
    border-radius: 15px;
    padding: 5px;
}

</style>