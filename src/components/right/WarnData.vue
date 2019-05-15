<template>
        <div class="equipment">
            <div class="equipment_title">
                <p>告警信息列表</p>
                <p>Device data</p>
            </div>

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
                        <th style="width: 1rem">告警设备名称</th>
                        <th nowrap>告警设备地址</th>
                        <th nowrap>告警原因</th>
                        <th style="width: 0.6rem;">是否检修</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item,index) in data_message" :key="index" class="reason">
                        <td style="width: 1rem">{{item.deviceType}}</td>
                        <td nowrap :title='item.deviceAddress'>{{item.deviceAddress}}</td>
                        <td nowrap :title="item.alarmMessage">{{item.alarmMessage}}</td>
                        <td style="width: 0.6rem;">{{item.processed}}</td>
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
                pages:1,
                number:'1',
                data_message:[],
            }
        },
        mounted(){
          this.getPages()
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

    thead tr th{
        color:@tableColor
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
        float: right;
        margin-right:0.6rem;
        padding-top: 0.2rem;
    }
    .seeAll{
        position: absolute;
        top:0.2rem;
    }
</style>