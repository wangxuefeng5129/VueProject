<template>
    <div :id=circleId :style="{width: '2.6rem',height: '1.6rem'}" style="float: left"></div>
</template>

<script>
    export default {
        name:'circleCharts',
        props:{
            title:{
                type:String,
            },
            circleId:{
                type:String
            },
            on:{
                type:String
            },
            off:{
                type:String
            }
        },
        data(){
            return{

            }
        },
        mounted(){
            this.drawline()
        },
        methods:{
            drawline(){
                let myChart = this.$echarts.init(document.getElementById(this.circleId));
                myChart.setOption({
                    title : {
                        text:this.title,
                        x:'right',
                        textStyle:{
                            fontSize:12
                        }
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: [this.on,this.off]
                    },
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:335, name:this.on},
                                {value:310, name:this.off},
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
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