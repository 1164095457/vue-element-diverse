<template>
    <div class="pie">
        <div ref="pie" class="pie-item"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg:null,
            allData:null
        }
    },
    mounted(){
        this.initChart()
        this.getData()
        window.addEventListener('resize',this.resizeChart)
    },
    destroyed(){
        window.addEventListener('resize',this.resizeChart)
    },
    methods:{
        initChart(){
            this.msg = this.$echarts.init(this.$refs.pie)
        },
        getData(){
            let res = [
                { "name":"直接访问", "value":"335" },
                { "name":"邮件营销", "value":"335" },
                { "name":"联盟广告", "value":"335" },
                { "name":"视频广告", "value":"335" },
                { "name":"搜索引擎", "value":"335" },
            ]
            this.allData = res
            //  获取完数据更新图表
            this.updateChart()
        },
        updateChart(){
            const sellerNames = this.allData.map(item =>{
                return item.name
            })
            const seller = this.allData.map(item =>{
                return item
            })
            
            const option = {
               
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data:sellerNames
                },
                color : [ '#2ec7c9', '#b6a2de', '#ffb980', '#5ab1ef', '#d87a80'],
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data:seller,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
            this.msg.setOption(option)
        },
        resizeChart(){
            this.msg ? this.msg.resize() : ''
        }
    }
}
</script>
<style lang="less" scoped>
.pie-item{
    width: 100%;
    height: 400px;
}
</style>