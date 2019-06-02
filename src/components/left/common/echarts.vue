<template>
    <div class="outer">
        <div class="commonTitle title">
            <span>在线/故障设备数</span>
            <span>Number of on-line/fault devices</span>
        </div>
        <div class="bg">
            <div id="myChart" :style="{width: '4.7rem',height: '2.4rem'}"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'myChart',
        data(){
          return{
              Interval:null,
              itemGap:null,
              itemHeight:null,
              itemWidth:null,
          }
        },
        mounted(){
            this.showSort()
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
            getInterval(){
              let _this = this;
              return _this.$axios.get('Statistics/OnlineFault').then(response=>{
                  if(response.status === 200){
                      let res = response.data.data;
                      this.Interval = res.Interval;
                      console.log(this.Interval)
                  }
              })
            },
            drawLine(){
                /*return new Promise((resolve,reject)=>{
                    // 基于准备好的dom，初始化echarts实例

                    resolve()
                })*/
                this.Getscreen();
                let myChart = this.$echarts.init(document.getElementById('myChart'));
                window.console.log(this.Interval);
                // 绘制图表
                myChart.setOption({
                    textStyle: {
                        fontSize:'100%',
                        color:'#ffffff'
                    },
                    tooltip: {
                        textStyle:{
                            fontSize:'0.12rem',
                        },
                    },
                    legend: {
                        data:['正常数','故障数'],
                        align: 'right',
                        right:7+'%',
                        top:10+'%',
                        itemGap:this.itemGap,
                        itemWidth:this.itemWidth,
                        itemHeight:this.itemHeight,
                        fontSize:'100%',
                        textStyle:{
                            color:'#949699'
                        }
                    },
                    dataset: {
                        source: [
                            ['product', this.Interval[2].starttime+'-'+this.Interval[2].endtime, this.Interval[1].starttime+'-'+this.Interval[1].endtime, this.Interval[0].starttime+'-'+this.Interval[0].endtime],
                            ['24小时正常/故障数', this.Interval[2].sumtotal-this.Interval[2].faults, this.Interval[2].faults],
                            ['本周正常/故障数', this.Interval[1].sumtotal-this.Interval[1].faults, this.Interval[1].faults],
                            ['本月正常/故障数', this.Interval[0].sumtotal-this.Interval[0].faults, this.Interval[0].faults],
                        ]
                    },
                    grid:{
                        x:14+'%',
                        x2:0+'%',
                        y2:18+'%',
                        top:20+'%'
                    },
                    xAxis: {type: 'category',axisLabel: {
                            boundaryGap: true,
                            color:'#ffffff',
                            fontSize:'0.12rem',
                            show:true,
                            inside:false
                        },
                        axisLine:{
                            show:true,
                            lineStyle:{
                                color:'RGB(9,51,144)'
                            }
                        }
                    },
                    yAxis: {
                        name: '数量',
                        axisLabel:{
                            color:'#ffffff',
                            fontSize:'0.12rem',
                        },
                        splitLine:{
                            show:false
                        },
                        axisLine:{
                            show:true,
                            lineStyle:{
                                color:'RGB(9,51,144)'
                            }
                        }
                    },
                    series: [
                        {type: 'bar',name:'正常数',itemStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#11f1f1'},
                                            //{offset: 0.5, color: '#2682d4'},
                                            {offset: 1, color: '#4c48c0'}
                                        ]
                                    )
                                }
                            },barWidth : 12+'%'},
                        {type: 'bar',name:'故障数',itemStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#ffff00'},
                                            //{offset: 0.5, color: '#22b772'},
                                            {offset: 1, color: '#ff6e02'}
                                        ]
                                    )
                                }
                            },barWidth : 12+"%"}
                    ]
                });
                window.addEventListener("resize", function () {
                    setTimeout(function () {
                        myChart.resize();
                    }, 500)
                });
            },
            /*drawLine(){
                var imgDatUrl = 'image://data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTdweCIgaGVpZ2h0PSIxMDlweCIgdmlld0JveD0iMCAwIDE3IDEwOSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDYuMiAoNDQ0OTYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPjI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjI1LjcwODEzMTglIiB5MT0iMzEuMTc4Njk2NyUiIHgyPSI4Ny4xMDI2NDY0JSIgeTI9IjUwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNDQ1QjdDIiBzdG9wLW9wYWNpdHk9IjAiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzQ0NUI3QyIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLkuqTpgJrov5DooYznu5/orqHmlLkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OTUuMDAwMDAwLCAtMTg4LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iMi4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ1Ny4wMDAwMDAsIDU2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IjEu5Zyw6Z2i5Lqk6YCa6L+Q6JCl54+t5qyh5YiG5p6QIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwgNDQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMi4wMDAwMDAsIDg1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iMiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUmVjdGFuZ2xlLTMiIGZpbGw9IiMwNzFFM0IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExLjQwNzQwNywgNTkuMjAzNzA0KSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0xMS40MDc0MDcsIC01OS4yMDM3MDQpICIgcG9pbnRzPSI4LjE0ODE0ODE1IDkuNzc3Nzc3NzggMTQuNjY2NjY2NyA2LjUxODUxODUyIDE0LjY2NjY2NjcgMTA4LjYyOTYzIDguMTQ4MTQ4MTUgMTExLjg4ODg4OSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlJlY3RhbmdsZS02IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMC45NTI2OTgsIDEwNi43MjU4ODEpIHJvdGF0ZSgyNS4wMDAwMDApIHRyYW5zbGF0ZSgtMTAuOTUyNjk4LCAtMTA2LjcyNTg4MSkgIiBwb2ludHM9IjYuMDkwMTk4NDEgMTAzLjg2MTU1IDEzLjI0NzYzNTcgMTAzLjczMDI3NSAyMS4wMDgxOTg4IDEwNC4yMTY2MzkgMTYuNTAxMjcxMSAxMDkuNzIxNDg3IDAuODk3MTk4MTA3IDEwOS4yOTU2MzciPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJSZWN0YW5nbGUtMyIgZmlsbD0iIzBEQ0U4NSIgcG9pbnRzPSIxNC42NjY2NjY3IDkuNzc3Nzc3NzggMjEuMTg1MTg1MiA2LjUxODUxODUyIDIxLjE4NTE4NTIgMTA4LjYyOTYzIDE0LjY2NjY2NjcgMTExLjg4ODg4OSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlJlY3RhbmdsZS00IiBmaWxsPSIjNDQ1QjdDIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNC42NzUwMTUsIDYuNTEwMjY5KSByb3RhdGUoNDUuMDAwMDAwKSB0cmFuc2xhdGUoLTE0LjY3NTAxNSwgLTYuNTEwMjY5KSAiIHBvaW50cz0iMTIuODk5NTgwMiA0LjAwMjM5NDM5IDE5LjI3ODEwMDggMS45MDcxODMzNCAxNi45NjQ3MDE3IDguNzk5OTU1MDYgMTAuMDcxOTMgMTEuMTEzMzU0MSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4='
                var dimensions = ['24小时正常/故障数', '本周正常/故障数', '本月正常/故障数'];
                var currentMonth = [];
                this.Interval.forEach((item,index)=>{
                   currentMonth.push(item.sumtotal)
                });
                var lastMonth = [];
                this.Interval.forEach((item,index)=>{
                    lastMonth.push(item.faults)
                })
                let myChart = this.$echarts.init(document.getElementById('myChart'));
                myChart.setOption({
                    xAxis: {
                        data: dimensions,
                        axisLabel: {
                            color: '#51637D'
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#51637D'
                            }
                        },
                        axisTick: {
                            show: false,
                            lineStyle: {
                                color: '#51637D'
                            }
                        }
                    },
                    yAxis: {
                        splitLine: {
                            show: false
                        },
                        axisLabel: {
                            color: '#51637D'
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#51637D'
                            }
                        },
                        axisTick: {
                            lineStyle: {
                                color: '#51637D'
                            }
                        }
                    },
                    series: [{
                        name: '本月',
                        type: 'pictorialBar',
                        symbol: imgDatUrl,
                        barGap: 0,
                        symbolSize: ['100%', '100%'],
                        // symbolRepeat: true,
                        // symbolOffset: [0, 10],
                        data: currentMonth
                    }, {
                        name: '上月',
                        type: 'pictorialBar',
                        barGap: 0,
                        symbol: imgDatUrl,
                        symbolSize: ['100%', '100%'],
                        // symbolRepeat: true,
                        // symbolOffset: [0, 10],
                        data: lastMonth
                    }]
                })
            },*/
            async showSort(){
                await this.getInterval();
                await this.drawLine();
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../../assets/styles/common';
    .outer{
        margin-top: 0.3rem;
        margin-left: 0.3rem;
    }
    .title{
        margin-bottom: 0.2rem;
    }
    .bg{
        width: 4.71rem;
        height: 2.5rem;
        background:url("./../../../assets/images/left.png") no-repeat center center;
        background-size: cover;
    }
</style>