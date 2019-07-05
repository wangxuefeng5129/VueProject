<template>
        <div class="equipment">
            <div class="commonTitle title">
                <span>告警信息列表</span>
                <span>Device data</span>
            </div>

            <div class="bg" @click="dian()">
                <div class="dangerData">
                    <span>报警数:{{$store.state.wxf.alarms.alarmTotal}}</span>
                    <span>处理数:{{$store.state.wxf.alarms.alarmProcessedTotal}}</span>
                    <span>未处理数:{{$store.state.wxf.alarms.alarmUndisposedTotal}}</span>
                </div>
                <div class="sty1">
                    选择页面:<select  @change="getPages" v-model="number" >
                    <option :value="item" v-for="(item,index) in pages" :key="index">{{item}}</option>
                </select>
                </div>
                <div>
                    <table  class="data">
                        <thead>
                        <tr class="data_title">
                            <th @click="add()">告警设备名称</th>
                            <th  style="width: 1.5rem;" nowrap>告警设备地址</th>
                            <th nowrap>告警原因</th>
                            <th style="width: 1rem;">是否检修</th>
                        </tr>
                        </thead>
                        <tbody id="scrolls">
                        <tr v-for="(item,index) in data_message" :key="index" class="reason" style="margin-bottom: 0.16rem">
                            <td>
                                <span class="iconfont">&#xe613;</span>
                                <span style="width: 0.6rem ; display: inline-block">{{item.deviceType}}</span>
                            </td>
                            <td nowrap :title='item.deviceAddress' style="width: 1.5rem;">{{item.deviceAddress}}</td>
                            <td nowrap :title="item.alarmMessage">{{item.alarmMessage}}</td>
                            <td style="width: 1rem;">{{item.processed}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name:'WarnData',
        components:{

        },
        data(){
            return{
                pages:1,
                number:'1',
                data_message:[],
                devices:null
            }
        },
        mounted(){
          this.getPages();
          this.devices=this.$store.state.wxf.devices;
          for(var i in this.devices){
            if(this.devices[i].length>0){
              this.data_message.push(...this.devices[i])
            }
          }
          console.log(this.data_message)
        },
        methods:{
            getPages(){
                this.$axios.get('Statistics/ListDeviceAlarm',{
                    params:{
                        pageNumber:this.number,
                        pageSize:10
                    }
                }).then((response)=>{
                    if(response.status === 200){
                        let res = response.data;
                        this.data_message = res.data.list;
                        this.pages = res.data.navigatepageNums;
                    }
                })
            },
            add(){
              this.ScrollTop(0,400)
            },
            ScrollTop(number=0,time){
                if (!time) {
                    document.getElementById('scrolls').scrollTop = number;
                    return number;
                }
                const spacingTime = 20; // 设置循环的间隔时间  值越小消耗性能越高
                let spacingInex = time / spacingTime; // 计算循环的次数
                let nowTop = document.getElementById('scrolls').scrollTop;// 获取当前滚动条位置
                let everTop = (number - nowTop) / spacingInex; // 计算每次滑动的距离
                let scrollTimer = setInterval(() => {
                    if (spacingInex > 0) {
                        spacingInex--;
                        this.ScrollTop(nowTop += everTop);
                    } else {
                        clearInterval(scrollTimer); // 清除计时器
                    }
                }, spacingTime);
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../assets/styles/common';
    .iconfont{
        color:RGB(25,206,249)
    }
    .title{
        margin-bottom: 0.2rem;
    }
    .bg{
        background: url("./../../assets/images/right.png") no-repeat center center;
        background-size: cover;
        height: 2.5rem;
        width: 4.71rem;
        position: relative;
    }
    .dangerData{
        padding-top: 0.1rem;
        font-size: 0.14rem;
        text-align: right;
        color: RGB(244,22,22);
        margin-bottom: 0.2rem;
        span{
            padding-right: 0.12rem;
        }
    }
    .data{
        margin-left: 0.1rem;
        margin-right:0.1rem ;
        font-size: 0.12rem;
        margin-bottom: 0.2rem;
        .data_title{
            color: #ffffff;
            text-align: center;
            th:nth-child(4){
                background: -webkit-linear-gradient(top, rgba(255,255,255,0) , #6423cf);     /* 背景色渐变 */
            }
            th:nth-child(2){
                background: -webkit-linear-gradient(top, rgba(255,255,255,0) , #6423cf);     /* 背景色渐变 */
            }
            th{
                background: -webkit-linear-gradient(top, rgba(255,255,255,0) , #2a95d6);     /* 背景色渐变 */
            }
        }
    }
    tbody{
        margin-top: 0.2rem;
        height:1.5rem;
        display: block;
        overflow: hidden;
        overflow-y:scroll;
        text-align: center;
        -webkit-overflow-scrolling: touch; // 为了滚动顺畅
    }
    table thead, tbody tr {
        display:table;
        width:100%;
        table-layout:fixed;
    }
    table tbody::-webkit-scrollbar {
        display: none; // 隐藏滚动条
    }

    .reason td{
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
        -moz-text-overflow: ellipsis;
        -webkit-text-overflow: ellipsis;
        overflow:hidden;
        white-space:nowrap;
    }
    .sty1{
        position: absolute;
        top: 0.1rem;
        left: 0.2rem;
    }
    .seeAll{

    }
</style>
