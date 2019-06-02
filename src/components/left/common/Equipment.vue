<template>
    <div style="margin-left: 0.3rem">
        <div class="commonTitle title">
            <span>设备数据</span>
            <span>Devices data</span>
        </div>
        <div class="equipment">
            <div style="padding-top: 0.3rem">
                <table class="data">
                    <thead>
                    <tr class="data_title">
                        <th>设备名称</th>
                        <th>在库（有效）设备数</th>
                        <th>当前失联设备数</th>
                        <th>当前失联设备占比</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in data_message" :key="index" style="margin-bottom: 0.16rem">
                            <td>
                                <span>
                                    <span v-if="item.id==1" class="iconfont">&#xe616;</span>
                                    <span v-if="item.id==2" class="iconfont">&#xe615;</span>
                                    <span v-if="item.id==3" class="iconfont">&#xe614;</span>
                                    <span v-if="item.id==4" class="iconfont">&#xe612;</span>
                                    <span v-if="item.id==5" class="iconfont">&#xe613;</span>
                                </span>
                                <span style="display: inline-block ; width: 0.4rem" >{{item.equipmentName}}</span>
                            </td>
                            <td>{{item.equipmentUse}}</td>
                            <td>{{item.equipmentThrow}}</td>
                            <td style="position: relative">
                                <progress-bar :value=item.equipmentProportion :max=100 animate="animate"></progress-bar>
                                <span style="position: absolute ;left: 1rem">{{item.equipmentProportion}}%</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import ProgressBar from './../../common/progressBar'
    export default {
        name:'equipment',
        components:{
            ProgressBar
        },
        data(){
            return{
                data_message:[
                    {equipmentName:'井盖',equipmentUse:'100',equipmentThrow:'31',equipmentProportion:45 , id:'1'},
                    {equipmentName:'电箱',equipmentUse:'200',equipmentThrow:'31',equipmentProportion:55 ,id:'2'},
                    {equipmentName:'路灯',equipmentUse:'100',equipmentThrow:'31',equipmentProportion:45 , id:'3'},
                    {equipmentName:'光交箱',equipmentUse:'100',equipmentThrow:'31',equipmentProportion:45 , id:'4'},
                    {equipmentName:'地埋柜',equipmentUse:'100',equipmentThrow:'31',equipmentProportion:45 , id:'5'},
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../../assets/styles/common';
    .iconfont{
        color: RGB(25,206,249);
    }
    .title{
        margin-top: 0.3rem;
        margin-bottom:0.2rem;
    }
    .equipment{
        background: url("./../../../assets/images/left.png") no-repeat center center;
        background-size: cover;
        height: 2.5rem;
        width: 4.72rem;
    }
    .data{
        margin-left: 0.1rem;
        margin-right:0.1rem ;
        font-size: 0.12rem;
        .data_title{
            color: #ffffff;
            th:nth-child(4){
                width:1.5rem;
                background: -webkit-linear-gradient(top, rgba(255,255,255,0) , #6423cf);     /* 背景色渐变 */
            }
            th:nth-child(2){
                width: 1.1rem;
                background: -webkit-linear-gradient(top, rgba(255,255,255,0) , #6423cf);     /* 背景色渐变 */
            }
            th{
                background: -webkit-linear-gradient(top, rgba(255,255,255,0) , #2a95d6);     /* 背景色渐变 */
            }
        }
    }
    tbody{
        margin-top: 0.2rem;
        display: block;
        overflow-y:scroll;
        -webkit-overflow-scrolling: touch; // 为了滚动顺畅
        tr{
            text-align: center;
            td:nth-child(2){
                width: 1.1rem;
                text-align: center;
            }
            td:nth-child(4){
                width: 1.5rem;
                text-align: center;
            }
        }
    }
    table thead, tbody tr {
        display:table;
        width:100%;
        table-layout:fixed;
    }
    table tbody::-webkit-scrollbar {
        display: none; // 隐藏滚动条
    }
</style>