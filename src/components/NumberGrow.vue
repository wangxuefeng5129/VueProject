<template>
    <div>
        <div class="head" @click="numFun(minNumber,maxNumber)">点击金额变动</div>
        <div>{{amount}}</div>
    </div>
</template>



<script>
    export default {
        data () {
            return {
                amount: this.minNumber
            }
        },
        props:{
          minNumber:{
              type:Number,
              default:0,
          },
          maxNumber:{
              type:Number,
              default:5000
          }
        },
        methods: {
            //金额变动动画
            numFun(startNum,maxNum) {
                var that = this;
                let numText = startNum;
                let golb; // 为了清除requestAnimationFrame
                function numSlideFun(){ // 数字动画
                    numText+=0.1; // 速度的计算可以为小数 。数字越大，滚动越快
                    if(numText >= maxNum){
                        numText = maxNum;
                        cancelAnimationFrame(golb);
                    }else {
                        golb = requestAnimationFrame(numSlideFun);
                    }
                    that.amount=numText;
                    that.amount=parseInt(that.amount).toLocaleString();
                    // console.log(numText)
                }
                numSlideFun(); // 调用数字动画
            }
        }
    }
</script>