<template>
    <div class="person">
        <div class="person_title">
            <p>人员登陆,操作日志列表</p>
            <p>Device data</p>
        </div>
        <div>
            <table  class="data">
                <thead>
                <tr class="data_title">
                    <th style="width: 1rem">人员名字</th>
                    <th nowrap>操作设备</th>
                    <th nowrap>操作时间</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,index) in data_message" :key="index">
                    <td style="width: 1rem">{{item.personName}}</td>
                    <td nowrap>{{item.operationEqip}}</td>
                    <td nowrap>{{item.timeData}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name:'personData',
        components:{

        },
        data(){
            return{
                data_message:[
                    {personName:'小王',operationEqip:'操作井盖',timeData:'2019/1/2 10:20'},
                    {personName:'小李',operationEqip:'操作井盖',timeData:'2019/2/3 14:05'},
                    {personName:'小陆',operationEqip:'操作井盖',timeData:'2019/2/3 14:05'},
                    {personName:'小马',operationEqip:'操作井盖',timeData:'2019/2/3 14:05'},
                    {personName:'小徐',operationEqip:'操作井盖',timeData:'2019/2/3 14:05'},

                ]
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../assets/styles/common';
    .person{
        margin-top: 0.2rem;
    }
    .person_title{
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