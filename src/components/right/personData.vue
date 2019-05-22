<template>
    <div class="person">
        <div class="commonTitle title">
            <span>人员登陆,操作日志列表</span>
            <span>Device data</span>
        </div>
        <div class="bg">
            <table  class="data">
                <thead>
                <tr class="data_title">
                    <th style="width: 1rem">人员名字</th>
                    <th nowrap>操作设备</th>
                    <th nowrap>操作时间</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,index) in data_message" :key="index" style="margin-bottom: 0.2rem">
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
        margin-top: 0.3rem;
    }
    .title{
        margin-bottom: 0.2rem;
    }
    .bg{
        background: url("./../../assets/images/right.png") no-repeat center center;
        background-size: cover;
        width: 4.71rem;
        height: 2.5rem;
        padding-top: 0.4rem;
        box-sizing: border-box;
    }
    .data{
        margin-left: 0.1rem;
        margin-right:0.1rem;
        .data_title{
            text-align: center;
            color: #ffffff;
            th:nth-child(2){
                width:1.5rem;
                background: -webkit-linear-gradient(top, rgba(255,255,255,0) , #6423cf);     /* 背景色渐变 */
            }
            th{
                background: -webkit-linear-gradient(top, rgba(255,255,255,0) , #2a95d6);     /* 背景色渐变 */
            }
        }
    }
    tbody{
        height:1.8rem;
        display: block;
        overflow-y:scroll;
        margin-top: 0.24rem;
        -webkit-overflow-scrolling: touch; // 为了滚动顺畅
        tr{
            text-align: center;

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