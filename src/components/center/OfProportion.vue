<template>
    <div>
        <div class="NumberTitle">
            <p>在线/故障设备数占比</p>
            <p>Number of on-line/fault devices</p>
        </div>
        <circle-charts  :circleId="hourCircle" :on="On" :off="off" :title="'24小时'+title"></circle-charts>
        <circle-charts  :circleId="weekCircle" :on="On" :off="off" :title="'本周'+title"></circle-charts>
        <circle-charts  :circleId="monthCircle" :on="On" :off="off" :title="'本月'+title"></circle-charts>
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
    .NumberTitle{
        text-align:left;
        margin-top: 0.4rem;
        margin-bottom: 0.26rem;
        p{
            font-size:@baseFont;
        }
    }
</style>