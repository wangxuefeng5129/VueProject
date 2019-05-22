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
            getInterval(){
              let _this = this;
              return _this.$axios.get('Statistics/OnlineFault').then(response=>{
                  if(response.status === 200){
                      let res = response.data.data;
                      this.Interval = res.Interval;
                  }
              })
            },
            drawLine(){
                return new Promise((resolve,reject)=>{
                    // 基于准备好的dom，初始化echarts实例
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
                    resolve()
                })
            },

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