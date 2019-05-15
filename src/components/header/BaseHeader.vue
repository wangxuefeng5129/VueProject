<template>
    <div>
        <div class="header">
            <div class="data">
                <span>{{setTime | formatDate}}</span>
            </div>
            <div class="title">上海汇珏智能设备综合展示</div>
            <div class="message">中文/English</div>
        </div>
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
                    return formatDate(date, "yyyy年MM月dd号hh时mm分ss秒");
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
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        height: 0.64rem;
        box-shadow:
                -7.6rem 0.01rem 0.1rem rgba(6,97,194,1),
                7.6rem 0.01rem 0.1rem rgba(6,97,194,1)
    };
    .header .title{
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
    };
    .data{
        font-size: @baseFont;
        line-height: @baseLine;
        text-align: left;
        padding-left: 0.32rem;
        width: 3rem;
    }
    .message{
        width: 3rem;
        font-size: @baseFont;
        text-align: right;
        padding-right: 0.32rem;
        line-height: @baseLine;
    }
</style>