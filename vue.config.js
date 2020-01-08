const px2rem = require('postcss-px2rem')
// 配置postcs-px2rem
const postcss = px2rem({
  remUnit: 37.5   //基准大小 baseSize，需要和rem.js中单位rem值占比一样相同  设计稿10等分之后的值
})

module.exports = {
    runtimeCompiler: true,
    lintOnSave: false,
    css:{
        loaderOptions: {
            postcss: {
              plugins: [
                postcss
              ]
            }
          }
    }
}