<template>
    <div>
        <div class="dataEquipment">
            <on-off></on-off>
            <data-equipment></data-equipment>
            <echarts-data></echarts-data>
        </div>
    </div>
</template>

<script>
    import DataEquipment from './common/Equipment'
    import OnOff from './common/OnOff'
    import echartsData from './common/echartData'
    export default {
        name:'BaseLeft',
        components:{
            DataEquipment,
            OnOff,
            echartsData
        },
        data(){
            return{}
        }
    }
</script>

<style scoped lang="less">
    .dataEquipment{
        width: 5.2rem;
        border: 2px solid deepskyblue;
        border-radius:25px;
        box-shadow: 0px 0px 10px inset;
        margin-right: 0.4rem;
    }

</style>