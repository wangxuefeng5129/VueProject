<template>
    <div class="outer">
        <div class="NumberTitle">
            <p>在线/故障设备数</p>
            <p>Number of on-line/fault devices</p>
        </div>
        <div id="myChart" :style="{width: '5.4rem',height: '2.6rem'}"></div>
    </div>
</template>

<script>
    export default {
        name:'myChart',
        mounted(){
            this.drawLine()
        },
        methods:{
            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'));
                // 绘制图表
                myChart.setOption({
                    textStyle: {
                        fontSize:12
                    },
                    tooltip: {},
                    legend: {
                        data:['在线数','故障数'],
                        align: 'right',
                        right:10+'%',
                    },
                    dataset: {
                        source: [
                            ['product', '2019/5/4:14:00', '2019/5/4', '2019/5'],
                            ['24小时在线/故障数', 43.3, 85.8],
                            ['本周在线/故障数', 83.1, 73.4],
                            ['本月在线/故障数', 86.4, 65.2],
                        ]
                    },
                    xAxis: {type: 'category',axisLabel: {
                            show: true,
                            boundaryGap: true,
                        },},
                    yAxis: {
                        name: '数量',
                    },
                    series: [
                        {type: 'bar',name:'在线数',itemStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#9b02ff'},
                                            {offset: 0.5, color: '#2682d4'},
                                            {offset: 1, color: '#04b0d9'}
                                        ]
                                    )
                                }
                            },barWidth : 15+'%'},
                        {type: 'bar',name:'故障数',itemStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#c9a119'},
                                            {offset: 0.5, color: '#22b772'},
                                            {offset: 1, color: '#00bc87'}
                                        ]
                                    )
                                }
                            },barWidth : 15+"%"}
                    ]
                });
                window.addEventListener("resize", function () {
                    setTimeout(function () {
                        myChart.resize();
                    }, 500)
                });
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../../assets/styles/common';
    .NumberTitle{
        text-align:left;
        margin-left: 0.3rem;
        margin-top: 0.2rem;
        p{
          font-size:@baseFont;
        }
    }
</style>