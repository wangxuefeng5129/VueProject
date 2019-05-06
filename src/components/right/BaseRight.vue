<template>
    <div style="margin-left: 0.4rem">
        <warn-data></warn-data>
        <search-eqip></search-eqip>
        <person-data></person-data>
    </div>
</template>

<script>
    import WarnData from './WarnData'
    import SearchEqip from './SearchEqip'
    import personData from './personData'
    export default {
        name:'BaseRight',
        components:{
            WarnData,
            SearchEqip,
            personData
        },
        data(){
            return{}
        }
    }
</script>

<style scoped lang="less">

</style>


