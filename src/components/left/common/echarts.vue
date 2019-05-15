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
        data(){
          return{
              Interval:null,
          }
        },
        mounted(){
            this.showSort()
        },
        methods:{
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
                    let myChart = this.$echarts.init(document.getElementById('myChart'));
                    window.console.log(this.Interval);
                    // 绘制图表
                    myChart.setOption({
                        textStyle: {
                            fontSize:'100%',
                            color:'orange'
                        },
                        tooltip: {
                            textStyle:{
                                fontSize:'0.12rem'
                            }
                        },
                        /*legend: {
                            data:['在线数','故障数'],
                            align: 'right',
                            right:10+'%',
                            itemGap:30,
                            fontSize:'100%',
                        },*/
                        dataset: {
                            source: [
                                ['product', this.Interval[2].starttime+'-'+this.Interval[2].endtime, this.Interval[1].starttime+'-'+this.Interval[1].endtime, this.Interval[0].starttime+'-'+this.Interval[0].endtime],
                                ['24小时在线/故障数', this.Interval[2].sumtotal-this.Interval[2].faults, this.Interval[2].faults],
                                ['本周在线/故障数', this.Interval[1].sumtotal-this.Interval[1].faults, this.Interval[1].faults],
                                ['本月在线/故障数', this.Interval[0].sumtotal-this.Interval[0].faults, this.Interval[0].faults],
                            ]
                        },
                        xAxis: {type: 'category',axisLabel: {
                                show: true,
                                boundaryGap: true,
                                color:'orange',
                                fontSize:'0.12rem'
                            },
                        },
                        yAxis: {
                            name: '数量',
                            axisLabel:{
                                color:'orange',
                                fontSize:'0.12rem'
                            },

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
    .NumberTitle{
        text-align:left;
        margin-left: 0.3rem;
        margin-top: 0.2rem;
        p{
          font-size:@baseFont;
        }
    }
</style>