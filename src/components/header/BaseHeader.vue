<template>
    <div>
        <div class="header">
            <span class="data">
                <span>2016年12月20日</span>
                <span>星期六</span>
            </span>
            <span class="title">上海汇珏智能设备展示</span>
            <span class="message">通知钢卡是否健康的角度</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:'BaseHeader',
        data(){
            return{
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../assets/styles/common";
    @baseLine:0.64rem;
    .header{
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        box-shadow:
                -7.6rem 0.01rem 0.1rem rgba(6,97,194,1),
                7.6rem 0.01rem 0.1rem rgba(6,97,194,1)
    };
    .header .title{
        font-size: 0.32rem;
        line-height: @baseLine;
        text-shadow: 0 0 0.03rem rgba(37,206,232,1),
        0 0 0.06rem rgba(37,206,232,0.9),
        0 0 0.08rem rgba(37,206,232,0.9),
        0 0 0.14rem rgba(37,206,232,0.9),
        0 0 0.22rem rgba(37,206,232,0.7),
        0 0 0.28rem rgba(37,206,232,0.7),
        0 0 0.36rem rgba(37,206,232,0.6),
        0 0 0.48rem rgba(37,206,232,0.5),
        0 0 0.54rem rgba(37,206,232,0.3),
        0 0 0.68rem rgba(37,206,232,0.1);
    };
    .data{
        font-size: @baseFont;
        line-height: @baseLine;
        span{
            margin-left:0.3rem;
        }
    }
    .message{
        font-size: @baseFont;
        margin-right: 0.3rem;
        line-height: @baseLine;
    }
</style>