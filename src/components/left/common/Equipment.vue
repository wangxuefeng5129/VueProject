<template>
    <div>
        <div class="equipment">
            <div class="equipment_title">
                <p>设备数据</p>
                <p>Device data</p>
            </div>
            <div>
                <table  class="data">
                    <thead>
                    <tr class="data_title">
                        <th>设备名称</th>
                        <th>在库（有效）设备数</th>
                        <th>当前失联设备数</th>
                        <th>当前失联设备占比</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item,index) in data_message" :key="index">
                        <td>{{item.equipmentName}}</td>
                        <td>{{item.equipmentUse}}</td>
                        <td>{{item.equipmentThrow}}</td>
                        <td>
                            <progress-bar :value=item.equipmentProportion :max=100 animate="animate"></progress-bar>
                            <span style="float: right; line-height: 0.3rem">{{item.equipmentProportion}}%</span>
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
                    {equipmentName:'井盖',equipmentUse:'100',equipmentThrow:'31',equipmentProportion:45},
                    {equipmentName:'电箱',equipmentUse:'200',equipmentThrow:'31',equipmentProportion:55},
                    {equipmentName:'路灯',equipmentUse:'100',equipmentThrow:'31',equipmentProportion:45},
                    {equipmentName:'广交箱',equipmentUse:'100',equipmentThrow:'31',equipmentProportion:45},
                    {equipmentName:'地埋柜',equipmentUse:'100',equipmentThrow:'31',equipmentProportion:45},
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../../assets/styles/common';
    .equipment_title{
        font-size: @baseFont;
        margin-left: 0.3rem;
        margin-bottom: 0.2rem;
        p{
            text-align: left;

        }
    }
    .data{
        width: 4.4rem;
        line-height: 0.3rem;
        text-align: left;
        margin-left: 0.3rem;
        tr{
            border-bottom: 1px solid gray;
        };
        .data_title{
            color: RGB(60,55,86);
        }
    }
    tbody{
        height:1.8rem;
        display: block;
        overflow-y:scroll;
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

    thead tr th{
        color: @tableColor;
    }
</style>