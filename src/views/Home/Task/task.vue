<template>
    <div class="task-list">
            <div class="task-item">
               <div>
                   <i class="el-icon-tickets" />  任务列表
               </div>
               <div>
                   <el-button icon="el-icon-edit" circle></el-button>
               </div>
            </div>
            <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item
            v-for="(item,index) in taskList" :key="index"
               :title="item.title" class="p-10">
                <div>{{item.bodys}}</div>
            </el-collapse-item>
            
            </el-collapse>
    </div>
</template>
<script>
export default {
    data(){
        return{
            activeNames: ['0'],
            taskList:[
                { title:"星期一",bodys:"vue-element-diverse" },
                { title:"星期二",bodys:"vue-element-diverse" },
                { title:"星期三",bodys:"vue-element-diverse" },
                { title:"星期四",bodys:"vue-element-diverse" },
                { title:"星期五",bodys:"明天双休!!"}
            ]
        }
    },
     methods: {
      handleChange(val) {
        console.log(val);
      }
    }
}
</script>
<style lang="less" scoped>
.task-list{
    line-height: 40px;
    background-color: #59b4fc;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    color: #fff;
    .task-item{
        padding: 8px;
        display: flex;
        justify-content: space-between;
    }
}
/deep/.el-collapse-item__header{
    padding-left: 10px;
}
/deep/.el-collapse-item__content{
    padding-left: 10px;

}
</style>