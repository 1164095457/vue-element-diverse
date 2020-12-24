<template>
    <div class="line">
        <div ref="line" class="line"></div>
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
            this.msg = this.$echarts.init(this.$refs.line)
        },
        getData(){
            let res = [
                { "name":"星期一","value":"10"},
                { "name":"星期二","value":"30"},
                { "name":"星期三","value":"160"},
                { "name":"星期四","value":"100"},
                { "name":"星期五","value":"200"},
                { "name":"星期六","value":"150"},
                { "name":"星期日","value":"10"},
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
                    data:sellerNames
                    
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data:sellerValues,
                    type: 'line',
                    smooth: true,
                     itemStyle : {  
                        normal : {  
                            color:'#5c7bd9',  
                            lineStyle:{  
                                color:'#5c7bd9'  
                            }  
                        }  
                    },  
                }]
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
.line{
    width: 100%;
    height: 400px;
}
</style>