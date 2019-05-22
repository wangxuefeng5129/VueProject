<template>
    <div style="margin-top: 0.3rem">
        <div class="commonTitle title">
            <span>正常/故障设备数占比</span>
            <span>Number of on-line/fault devices</span>
        </div>
        <div class="bg">
            <circle-charts  :circleId="hourCircle" :on="On" :off="off" :title="'24小时'+title"></circle-charts>
            <circle-charts  :circleId="weekCircle" :on="On" :off="off" :title="'本周'+title"></circle-charts>
            <circle-charts  :circleId="monthCircle" :on="On" :off="off" :title="'本月'+title"></circle-charts>
        </div>
    </div>
</template>

<script>
    import circleCharts from './../common/circleCharts'
    export default {
        name:'OfPropotrion',
        components:{
            circleCharts
        },
        data(){
            return{
                title:'在线/故障设备占比数',
                On:'在线设备',
                off:'故障设备',
                hourCircle:'hourCircle',
                weekCircle:'weekCircle',
                monthCircle:'monthCircle',

            }
        }
    }
</script>


<style lang="less" scoped>
    @import '../../assets/styles/common';
    .title{
        margin-bottom:0.2rem;
    }
    .bg{
        background: url("./../../assets/images/bottom.png") no-repeat center center;
        background-size: cover;
        width: 8.36rem;
        height: 2.5rem;
    }
</style>