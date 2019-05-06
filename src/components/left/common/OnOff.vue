<template>
    <div style="margin-bottom: 0.2rem">
        <div class="header">
            <p>当前在线/故障设备</p>
            <p>Current on-line/fault devices</p>
        </div>
        <div class="OnOff">
            <div class="OnOffD">
                <div class="role">
                    <svg class="icon" aria-hidden="true" style="font-size:0.6rem">
                        <use xlink:href="#iconrenwu-zhengchang"></use>
                    </svg>
                </div>
                <div class="data">
                    <p>在线设备数</p>
                    <p>100</p>
                </div>
            </div>
            <div class="OnOffD">
                <div class="role">
                    <svg class="icon" aria-hidden="true" style="font-size:0.6rem">
                        <use xlink:href="#iconrenwu-yichang"></use>
                    </svg>
                </div>
                <div class="data">
                    <p>故障设备数</p>
                    <p>20</p>
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
    .header{
        text-align: left;
        margin-left: 0.3rem;
        margin-bottom: 0.24rem;
        p{
            font-size: @baseFont;
        }
    }
    .OnOff{
        margin-left: 0.3rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        .OnOffD{
            margin-left: 0.3rem;
            margin-right: 1.6rem;
            .role{
                margin-bottom: 0.3rem;
            }
            .data{
                text-align: center;
                p:nth-child(2){
                    font-size: 0.38rem;
                    margin-top: 0.12rem;
                    color: RGB(203,62,78);
                }
            }
        }
    }
</style>