<template>
    <div style="margin-top: 0.5rem ; margin-left: 0.4rem">
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