<template>
    <div v-loading="loading">
        <el-card class="box-card">
            <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/form' }">Excel导出</el-breadcrumb-item>
            </el-breadcrumb>
            <el-divider></el-divider>
            <el-button type="success" @click="exportTable">Excel导出</el-button>
            <el-table
                id="table-list"
                :data="tableData"
                border
                style="width: 100%">
                
                <el-table-column  prop="title" label="title" width="180">
                </el-table-column>
                <el-table-column prop="article" label="article" width="180" >
                </el-table-column>
                <el-table-column  prop="content" label="content" >
                </el-table-column>
                
               
            </el-table>

        </el-card>
    </div>
</template>
<script>
import FileSaver from "file-saver"
import XLSX from "xlsx"
export default {

    data() {
        return {
        loading:true,
        currentPage:1,
        pagesize:10,  
        tableData: [
        {title: 'Make up', article: 'v-e-d', content: 'I will try my best to be as close as possible to my ideal1' },
        {title: 'Make up', article: 'v-e-d', content: 'I will try my best to be as close as possible to my ideal2' },
        {title: 'Make up', article: 'v-e-d', content: 'I will try my best to be as close as possible to my ideal3' },
        {title: 'Make up', article: 'v-e-d', content: 'I will try my best to be as close as possible to my ideal4' },
        {title: 'Make up', article: 'v-e-d', content: 'I will try my best to be as close as possible to my ideal5' },
        {title: 'Make up', article: 'v-e-d', content: 'I will try my best to be as close as possible to my ideal6' },
        {title: 'Make up', article: 'v-e-d', content: 'I will try my best to be as close as possible to my ideal7' }
        ]
        }
    },
    created(){
        setTimeout(()=>{
            this.loading = false
        },500)
    },
    methods: {
        exportTable(){
        var wb = XLSX.utils.table_to_book(document.querySelector("#table-list"));
            /* 获取二进制字符串作为输出 */
            var wbout = XLSX.write(wb, {
                bookType: "xlsx",
                bookSST: true,
                type: "array"
            });
            try {
                FileSaver.saveAs(
                //Blob 对象表示一个不可变、原始数据的类文件对象。
                //Blob 表示的不一定是JavaScript原生格式的数据。
                //File 接口基于Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。
                //返回一个新创建的 Blob 对象，其内容由参数中给定的数组串联组成。
                new Blob([wbout], { type: "application/octet-stream" }),
                //设置导出文件名称
                "sheetjs.xlsx"
                );
            } catch (e) {
                if (typeof console !== "undefined") console.log(e, wbout);
            }
            return wbout;
        }
    }
}
</script>