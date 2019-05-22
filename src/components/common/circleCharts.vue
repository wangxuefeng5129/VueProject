<template>
    <div :id=circleId :style="{width: '2.6rem',height: '2.5rem'}" style="float: left"></div>
</template>

<script>
    import '../../assets/styles/common.less'
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
                itemWidth:null,
                itemHeight:null,
                itemGap:null,
            }
        },
        mounted(){
            this.drawline();
        },
        methods:{
            Getscreen(){
              if(document.body.clientWidth >=1920 && document.body.clientWidth <=3000){
                  this.itemWidth=30;
                  this.itemHeight=15;
                  this.itemGap=20;
              }
              if(document.body.clientWidth >= 3000){
                  this.itemWidth=65;
                  this.itemHeight=30;
                  this.itemGap=70;
              }
            },
            drawline(){
                this.Getscreen();
                let myChart = this.$echarts.init(document.getElementById(this.circleId));
                myChart.setOption({
                    title : {
                        text:this.title,
                        x:'center',
                        y:'80%',
                        textStyle:{
                            fontSize:'0.12rem',
                            color:'#ffffff'
                        }
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)",
                        textStyle:{
                            fontSize:'0.12rem'
                        }
                    },
                    legend: {
                        /*orient: 'vertical',*/
                        left: 'center',
                        top:15+'%',
                        itemGap:this.itemGap,
                        itemWidth:this.itemWidth,
                        itemHeight:this.itemHeight,
                        textStyle:{
                            fontSize:'100%',
                            color:'#949699'
                        },
                        data: [this.on,this.off]
                    },
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius : '30%',
                            center: ['50%', '55%'],
                            data:[
                                {value:335, name:this.on,itemStyle:{
                                        normal:{
                                            color: new this.$echarts.graphic.LinearGradient(
                                                0, 0, 0, 1,
                                                [
                                                    {offset: 0, color: '#11f1f1'},
                                                    //{offset: 0.5, color: '#2682d4'},
                                                    {offset: 1, color: '#4c48c0'}
                                                ]
                                            )
                                        }
                                    },
                                    label:{
                                        normal:{
                                            color:'#1ad6f5'
                                        }
                                    }
                                },
                                {value:310, name:this.off,itemStyle:{
                                        normal:{
                                            color: new this.$echarts.graphic.LinearGradient(
                                                0, 0, 0, 1,
                                                [
                                                    {offset: 0, color: '#ffff00'},
                                                    //{offset: 0.5, color: '#22b772'},
                                                    {offset: 1, color: '#ff6e02'}
                                                ]
                                            )
                                        }
                                    },
                                    label:{
                                        normal:{
                                            color:'#1ad6f5'
                                        }
                                    }
                                },
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                                }
                            },
                            label:{
                                normal:{
                                    position:'outer',
                                    fontSize:'100%'
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