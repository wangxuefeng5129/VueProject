var getScreen=function(itemWidth,itemHeight,itemGap) {
    let w = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if(w >=1920 && w <=3000){
        itemWidth=30;
        itemHeight=15;
        itemGap=20;
        if(isIE11){
            itemGap=50
        }
        if(isIE){
            itemGap=50
        }
    }
    if(w >= 3000){
        itemWidth=65;
        itemHeight=30;
        itemGap=70;

    }
};

export {getScreen}