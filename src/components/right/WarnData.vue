<template>
        <div class="equipment">
            <div class="equipment_title">
                <p>告警信息列表</p>
                <p>Device data</p>
            </div>

            <div class="dangerData">
                <span>报警数:100</span>
                <span>处理数:90</span>
                <span>未处理数:10</span>
            </div>
            <div>
                <table  class="data">
                    <thead>
                    <tr class="data_title">
                        <th style="width: 1rem">告警设备名称</th>
                        <th nowrap>告警设备地址</th>
                        <th nowrap>告警原因</th>
                        <th style="width: 0.6rem;">是否检修</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item,index) in data_message" :key="index">
                        <td style="width: 1rem">{{item.warnName}}</td>
                        <td nowrap>{{item.warnLocation}}</td>
                        <td nowrap>{{item.warnRes}}</td>
                        <td style="width: 0.6rem;">{{item.warnSee}}</td>
                    </tr>
                    </tbody>
                </table>
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
                data_message:[
                    {warnName:'井盖',warnLocation:'上海市奉贤区奉浦大道',warnRes:'进水',warnSee:'是'},
                    {warnName:'电箱',warnLocation:'上海市奉贤区奉浦大道',warnRes:'电箱打开',warnSee:'是'},
                    {warnName:'路灯',warnLocation:'上海市奉贤区奉浦大道',warnRes:'路灯不亮',warnSee:'否'},
                    {warnName:'广交箱',warnLocation:'上海市奉贤区奉浦大道',warnRes:'电箱打开',warnSee:'是'},
                    {warnName:'地埋柜',warnLocation:'上海市奉贤区奉浦大道',warnRes:'柜门打开',warnSee:'否'},

                ]
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../assets/styles/common';
    .equipment{
        margin-top: 0.2rem;
    }
    .equipment_title{
        font-size: @baseFont;
        margin-left: 0.3rem;
        margin-bottom: 0.2rem;
        float: left;
        p{
            text-align: left;

        }
    }
    .dangerData{
        font-size: 0.16rem;
        color: #ff4d54;
        span{
            padding-right: 0.12rem;
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
</style>