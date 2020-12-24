<template>
    <div>
        <el-card class="box-card" v-loading="loading">
            <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/form' }">表格</el-breadcrumb-item>
            </el-breadcrumb>
            <el-divider></el-divider>

            <el-button size="mini" @click="tables(tableData.length)">选中几条</el-button>

            <el-table
                :data="tableData.slice((currentPage - 1) * pagesize, currentPage*pagesize)"
                border
                style="width: 100%"
                @selection-change="handleSelectionChange"
                >
                <el-table-column type="index" width="50">
                </el-table-column>
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column label="date" width="180">
                    <template slot-scope="scope">
                        <i  class="el-icon-time" /> <span>{{scope.row.date | date}}</span>
                    </template>
                </el-table-column>
                <el-table-column  prop="title" label="title" width="100">
                </el-table-column>
                <el-table-column prop="article" label="article" width="100" >
                </el-table-column>
                <el-table-column  prop="content" label="content" width="300">
                </el-table-column>
                
                <el-table-column prop="region" label="region" width="180">
                </el-table-column>
                <el-table-column label="state" width="100" >
                    <template slot-scope="scope" class="state-item">
                        <el-tag type="success" v-if="scope.row.state == 1" >正常</el-tag>
                        <el-tag type="warning" v-else-if="scope.row.state == 2">维护中</el-tag>
                    </template>
                </el-table-column>
                
                <el-table-column prop="user" label="user" width="100">
                </el-table-column>
                 <el-table-column prop="user" label="score">
                     <template slot-scope="scope">
                         <el-rate
                            v-model="scope.row.score"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template="{value}">
                        </el-rate>
                     </template>
                </el-table-column>
                <el-table-column
                label="operation"
                width="150">
                <template slot-scope="scope">
                    <el-button type="warning" @click.native.prevent="delete(scope.row)" size="small">编辑</el-button>
                    <el-button type="danger" @click.native.prevent="delete(scope.row)" size="small">删除</el-button>
                </template>
                </el-table-column>
            </el-table>

            <div class="block">
                <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[1, 10, 20,50,100]"
                :page-size="pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="tableData.length">
                </el-pagination>
            </div>
        </el-card>
    </div>
</template>
<script>
import dayjs from 'dayjs'      
export default {
    filters:{
         // 转换日期格式
        date(val){
        return dayjs(val).format("YYYY-MM-DD hh:mm")
        }
    },
    data() {
        return {
        loading:true,
        currentPage:1,
        pagesize:10,  
        tableData: [
        { date: '2020 10:15:47 GMT+0800', title: 'Make up', article: 'v-e-d', content: 'I will try my best to be as close as possible to my ideal', region: 'Guangzhou', state: 1, user:' lin',score:2 },
        { date: '2020 10:15:47 GMT+0800', title: 'Make up', article: 'v-e-d', content: 'I will try my best to be as close as possible to my ideal', region: 'Guangzhou', state: 2, user:' lin',score:5 },
        { date: '2020 10:15:47 GMT+0800', title: 'Make up', article: 'v-e-d', content: 'I will try my best to be as close as possible to my ideal', region: 'Guangzhou', state: 1, user:' lin',score:5 },
        { date: '2020 10:15:47 GMT+0800', title: 'Make up', article: 'v-e-d', content: 'I will try my best to be as close as possible to my ideal', region: 'Guangzhou', state: 2, user:' lin',score:5 },
        { date: '2020 10:15:47 GMT+0800', title: 'Make up', article: 'v-e-d', content: 'I will try my best to be as close as possible to my ideal', region: 'Guangzhou', state: 1, user:' lin',score:1.5 },
        { date: '2020 10:15:47 GMT+0800', title: 'Make up', article: 'v-e-d', content: 'I will try my best to be as close as possible to my ideal', region: 'Guangzhou', state: 2, user:' lin',score:5 },
        { date: '2020 10:15:47 GMT+0800', title: 'Make up', article: 'v-e-d', content: 'I will try my best to be as close as possible to my ideal', region: 'Guangzhou', state: 1, user:' lin',score:0 },
        { date: '2020 10:15:47 GMT+0800', title: 'Make up', article: 'v-e-d', content: 'I will try my best to be as close as possible to my ideal', region: 'Guangzhou', state: 2, user:' lin',score:5 },
        { date: '2020 10:15:47 GMT+0800', title: 'Make up', article: 'v-e-d', content: 'I will try my best to be as close as possible to my ideal', region: 'Guangzhou', state: 1, user:' lin',score:4.8 },
        { date: '2020 10:15:47 GMT+0800', title: 'Make up', article: 'v-e-d', content: 'I will try my best to be as close as possible to my ideal', region: 'Guangzhou', state: 2, user:' lin',score:5 },
        { date: '2020 10:15:47 GMT+0800', title: 'Make up', article: 'v-e-d', content: 'I will try my best to be as close as possible to my ideal', region: 'Guangzhou', state: 1, user:' lin',score:2.5 },
        { date: '2020 10:15:47 GMT+0800', title: 'Make up', article: 'v-e-d', content: 'I will try my best to be as close as possible to my ideal', region: 'Guangzhou', state: 2, user:' lin',score:5 },
        ],
        selections:[]
        }
    },
    created(){
        setTimeout(()=>{
            this.loading = false
        },500)
    },
    methods: {
        handleClick(row) {},
        handleSizeChange(val) {
             this.pagesize = val;
        },
        handleCurrentChange(val) {
            this.currentPage = val;
        },
        handleSelectionChange(val){
            this.selections = val.map(e =>{
                return e
            })
        },
        tables(){
            let item = this.selections
            this.$message({
                message:`你选中了${item.length}条数据`,
                type:'success'
            })
        }
    },
}
</script>
<style lang="less" scoped>
/deep/td{
    color: #7b7b7b;
}
</style>