<template>
    <div>
        <china></china>
        <!--<chinas></chinas>-->
        <of-proportion></of-proportion>
    </div>
</template>

<script>
    import china from '../common/china'
    import chinas from '../common/chinas'
    import OfProportion from './OfProportion'
    export default {
        name:'BaseCenter',
        components:{
            china,
            chinas,
            OfProportion
        },
        data(){
            return{}
        }
    }
</script>

<style lang="less" scoped></style>