module.exports = {
    publicPath:process.env.NODE_ENV === 'production'
        ? './'
        : './',
    outputDir:process.env.NODE_ENV ==="production" ? "production":"alpha",
    assetsDir:'static',
    indexPath:'index.html',
    filenameHashing: false,
    lintOnSave: false,//是否开启eslint保持检测
    runtimeCompiler:true,//运行时版本是否需要编译
    productionSourceMap:false,//// 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    css:{
        sourceMap:false,
        extract: true, //是否使用css分离插件ExtractTextPlugin
    },
    devServer:{
        proxy:null, //配置跨域
        port:8081,
        host:"localhost",
        open:true,
        hotOnly:false,
    },
    //第三方插件配置
    pluginOptions:{

    }
};