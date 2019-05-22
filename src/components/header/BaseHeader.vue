<template>
        <div class="header">
            <div class="data">
                <span>{{setTime | formatDate}}</span>
                <span style="margin-left: 0.16rem">{{setTime | formatDateHour}}</span>
            </div>
            <div class="title">上海汇珏智能设备展示</div>
            <div class="message">中文/English</div>
        </div>
</template>

<script>
    import {formatDate} from "../../until/date";
    export default {
        name:'BaseHeader',
        data(){
            return{
                setTime:new Date()
            }
        },
        mounted(){
           var _this = this;
            /*定时器每秒执行更新时间*/
          this.timer = setInterval(function () {
              _this.setTime=new Date()
          },1000);

        },
        beforeDestroy(){
            /*销毁定时器*/
          if(this.timer){
              clearInterval(this.timer)
          }
        },
        methods:{

        },
        filters: {
            /*时间过滤器*/
            formatDate: function(time) {
                if(time!=null && time!=="")
                {
                    var date = new Date(time);
                    return formatDate(date, "yyyy年MM月dd日");
                }else{
                    return "";
                }
            },
            formatDateHour: function(time) {
                if(time!=null && time!=="")
                {
                    var date = new Date(time);
                    return formatDate(date, "hh:mm:ss");
                }else{
                    return "";
                }
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../assets/styles/common";
    @baseLine:0.64rem;
    .header{
        height: 0.48rem;
        position: relative;
        /*box-shadow:
                -7.6rem 0.01rem 0.1rem rgba(6,97,194,1),
                7.6rem 0.01rem 0.1rem rgba(6,97,194,1)*/
    };
    .title{
        position: absolute;
        width: 100%;
        font-size: 0.34rem;
        color:#ffffff;
        margin:0.3rem auto;
    }
    /*.header .title{
        flex-grow: 3;
        text-align: center;
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
    };*/
    .data{
        float: left;
        font-size: 0.2rem;
        margin-top: 0.16rem;
        color:#279ace;
        width: 3rem;
        height: 0.3rem;
        border:1px solid #113b7c;
        border-radius: 0.15rem;
        margin-left: 0.3rem;
    }
    .message{
        float: right;
        color: #2ec2ff;
        font-size:0.22rem;
        margin-right: 0.3rem;
        margin-top: 0.16rem;

    }
</style>