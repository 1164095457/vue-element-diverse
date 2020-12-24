<template>
    <div class="bar">
        <div ref="bar" class="bar-item"></div>
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
        //  初始化msg
        initChart(){
            this.msg = this.$echarts.init(this.$refs.bar)
        },
        //  获取服务器数据
        getData(){
            //  模拟数据
            let res = [
                { "name":"星期一","value":"13"},
                { "name":"星期二","value":"33"},
                { "name":"星期三","value":"62"},
                { "name":"星期四","value":"23"},
                { "name":"星期五","value":"23"},
            ]
            this.allData = res
            //  获取完数据更新图表
            this.updateChart()
        },
        updateChart(){
            const sellerNames = this.allData.map(item =>{
                return item.name
            })
            const sellerValues = this.allData.map(item =>{
                return item.value
            })
            const option = {
                xAxis: {
                    type: 'category',
                    data: sellerNames
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data:sellerValues,
                    type: 'bar',
                    label:{
                        show:true,
                        position:'top',
                        color:'black'
                    },
                    itemStyle:{
                        color:new this.$echarts.graphic.LinearGradient(1,1,0,0,[
                            {
                                color:'#99d2ff',
                                offset:1,
                            },
                            {
                                color:'#5ab1ef',
                                offset:0,
                            }
                        ])
                    }
                },]
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
.bar-item{
    width: 100%;
    height: 400px;
}
</style>