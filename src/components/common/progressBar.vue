<template>
    <div class="progress-outer">
        <div class="progress" :class="{'progress-striped active':animate}">
            <div class="progress-bar"
                :class="type && 'progress-bar-'+type"
                 role="progressbar"
                 :aria-valuenow="value"
                 :aria-valuemin="0"
                 :aria-valuemax="max"
                 :style="{width:(percent < 100 ? percent:100)+'%'}">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            value:{
                type:Number,
                required:true
            },
            max:{
                type: Number,
                dafault:100
            },
            type:{
                type:String,
                default:''
            },
            animate:{
                type:Boolean,
                default:false
            }
        },
        computed:{
            percent(){
                return parseInt(this.value*100/this.max,10)
            }
        }
    }
</script>


<style scoped lang="less">
    .progress{
        height: 0.1rem;
        width:70%;
        margin-bottom: 0.1rem;
        float: left;
        overflow: hidden;
        background-color: #f5f5f5;
        border-radius: 0.4rem;
        box-shadow: inset 0 0.01rem 0.02rem rgba(0,0,0,.1);
    }
    .progress-bar{
        width: 0;
        height: 100%;
        font-size: 0.12rem;
        line-height: 0.2rem;
        color: #fff;
        text-align: center;
        background-color: #337ab7;
        border-radius: 0.04rem;
        box-shadow: inset 0 -0.01rem 0 rgba(0,0,0,.15);
        transition: width .6s ease;
    }

    .progress.active .progress-bar{
        animation: progress-bar-stripes 2s linear infinite;
    }
    @keyframes progress-bar-stripes {
        0%{
            background-position: 0.4rem 0;
        }
        100%{
            background-position: 0 0;
        }
    }

    .progress-striped .progress-bar{
        background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25% , transparent 50% , rgba(255,255,255,.15) 50%,
        rgba(255,255,255,.15) 75% , transparent 75% , transparent);
        -webkit-background-size: 0.4rem 0.4rem;
        background-size: 0.4rem 0.4rem;
    }
</style>