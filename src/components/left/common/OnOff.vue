<template>
    <div style="margin-left: 0.3rem">
        <div class="commonTitle title">
            <span>当前正常/故障</span>
            <span>Current on-line/fault devices</span>
        </div>
        <div class="top">
            <div class="OnOff">
                <div class="OnOffDL">
                    <div class="role">
                        <span class="iconfont normal">&#xe617;</span>
                    </div>
                    <div class="data">
                        <p class="equNumber">正常设备数</p>
                        <p class="number1">{{$store.state.wxf.onlineDevices}}</p>
                    </div>
                </div>
                <div class="OnOffDR">
                    <div class="role">
                        <span class="iconfont offLine">&#xe617;</span>
                    </div>
                    <div class="data">
                        <p class="equNumber">故障设备数</p>
                        <p class="number2">{{$store.state.wxf.faultDevices}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'OnOff',
        data(){
            return{}
        }
    }
</script>

<style scoped lang="less">
    @import '../../../assets/styles/common';
    .normal,.offLine{
        font-size: 0.52rem;

    }
    .normal,.number1{
        background: -webkit-linear-gradient(top, #11f1ff , #4c48c0);
        -webkit-background-clip: text;         /* 规定背景的划分区域 */
        -webkit-text-fill-color: transparent;  /* 防止字体颜色覆盖 */
    }
    .offLine,.number2{
        background: -webkit-linear-gradient(top, #ffff00 , #ff6e02);     /* 背景色渐变 */
        -webkit-background-clip: text;         /* 规定背景的划分区域 */
        -webkit-text-fill-color: transparent;  /* 防止字体颜色覆盖 */
    }
    .title{
        margin-bottom: 0.2rem;
    }
    .top{
        background: url("./../../../assets/images/left.png") no-repeat center center;
        background-size: cover;
        height: 2.5rem;
        width: 4.71rem;
    }
    .OnOff{
        padding-top: 0.59rem;
        .OnOffDL{
            margin-left: 1.2rem;
            float: left;
        }
        .OnOffDR{
            margin-right: 1.2rem;
            float: right;
        }
    }
    .equNumber{
        margin-top: 0.36rem;
        margin-bottom: 0.26rem;
        font-size: 0.14rem;
        color:#ffffff;
    }
    .number1{
        font-size: 0.4rem;
    }
    .number2{
        font-size: 0.4rem;

    }
</style>
