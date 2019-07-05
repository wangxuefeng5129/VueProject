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
            },
            OnValues:{
              type:Number
            },
            OffValues:{
              type:Number
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
                let w = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
                var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
                var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
                var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
                var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
                if(w >=1920 && w <=3000){
                    this.itemWidth=30;
                    this.itemHeight=15;
                    this.itemGap=20;
                    if(isIE11){
                        this.itemGap=50
                    }
                    if(isIE){
                        this.itemGap=50
                    }
                }
                if(w >= 3000){
                    this.itemWidth=65;
                    this.itemHeight=30;
                    this.itemGap=70;
                    if(isIE11){
                        this.itemGap=100
                    }
                    if(isIE){
                        this.itemGap=100
                    }
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
                            radius: ['20%', '30%'],
                            center: ['50%', '55%'],
                            data:[
                                {value:this.OnValues, name:this.on,itemStyle:{
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
                                {value:this.OffValues, name:this.off,itemStyle:{
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
                                    shadowColor: 'rgba(0, 0, 0, 1)',
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
