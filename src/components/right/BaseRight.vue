<template>
    <div style="margin-left: 0.4rem">
        <warn-data></warn-data>
        <search-eqip></search-eqip>
    </div>
</template>

<script>
    import WarnData from './WarnData'
    import SearchEqip from './SearchEqip'
    export default {
        name:'BaseRight',
        components:{
            WarnData,
            SearchEqip
        },
        data(){
            return{}
        }
    }
</script>

<style scoped lang="less">

</style>


