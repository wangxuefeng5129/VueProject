<template>
    <div style="margin-left: 0.4rem" class="baseRight">
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
    .baseRight{
        border: 2px solid deepskyblue;
        border-radius:25px;
        box-shadow: 0px 0px 10px inset;
        width: 5.2rem;
    }
</style>


