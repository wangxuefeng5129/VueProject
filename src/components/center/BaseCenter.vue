<template>
    <div>
        <china></china>
        <of-proportion></of-proportion>
    </div>
</template>

<script>
    import china from '../common/china'
    import OfProportion from './OfProportion'
    export default {
        name:'BaseCenter',
        components:{
            china,
            OfProportion
        },
        data(){
            return{}
        }
    }
</script>

<style lang="less" scoped></style>