<template>
    <div>
        <div class="dataEquipment">
            <data-equipment></data-equipment>
        </div>
    </div>
</template>

<script>
    import DataEquipment from './common/Equipment'
    export default {
        name:'BaseLeft',
        components:{
            DataEquipment
        },
        data(){
            return{}
        }
    }
</script>

<style scoped lang="less">
    .dataEquipment{
        width: 5.6rem;
    }

</style>