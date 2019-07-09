<template>
    <div>
        <base-header></base-header>
        <div class="main">
            <base-left></base-left>
            <base-center></base-center>
            <base-right></base-right>
        </div>
    </div>
</template>

<script>
    import BaseHeader from '../components/header/BaseHeader'
    import BaseLeft from '../components/left/BaseLeft'
    import BaseCenter from '../components/center/BaseCenter'
    import BaseRight from '../components/right/BaseRight'
    export default {
        name:'home',
        components:{
            BaseHeader,
            BaseLeft,
            BaseCenter,
            BaseRight
        },
        data(){
            return{
            }
        },
        created(){
            this.$store.dispatch('OnlineFault');
        }
    }
</script>

<style scoped lang="less">

    .main{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-top: 0.6rem;
    }
</style>
